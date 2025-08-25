
import { notFound } from "next/navigation";
import React from "react";
import { pageConfigs, NestedRouteConfig } from "@/app/config/pageConfigs";

export interface NestedPageConfig {
  title: string;
  description?: string;
  component?: React.ReactNode;
}

export function resolveConfig(
  baseKey: string,
  slug: string[] = [],
  maxDepth = 6
): NestedRouteConfig | null {
  let config: NestedRouteConfig | undefined = pageConfigs[baseKey];

  if (!config) return null;
  if (slug.length > maxDepth) return null;

  for (const segment of slug) {
    if (!config.children?.[segment]) return null;
    config = config.children[segment];
  }

  return config;
}

export function NestedPageHandler({
  baseKey,
  slug,
  maxDepth = 6,
}: {
  baseKey: string;
  slug?: string[];
  maxDepth?: number;
}) {
  const config = resolveConfig(baseKey, slug ?? [], maxDepth);

  if (!config) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{config!.title}</h1>
      {config!.description && <p className="text-gray-600">{config!.description}</p>}

      <div className="mt-4">{config!.component}</div>

      {slug?.length ? (
        <p className="mt-6 text-sm text-gray-500">
          Path: {slug.join(" / ")} (Depth {slug.length})
        </p>
      ) : (
        <p className="mt-6 text-sm text-gray-500">Root Page</p>
      )}
    </div>
  );
}
