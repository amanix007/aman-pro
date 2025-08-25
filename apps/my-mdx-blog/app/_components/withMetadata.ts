// app/_components/withMetadata.ts

import { resolveConfig } from "@/app/_components/NestedPageHandler";

export function createMetadataGenerator(baseKey: string, maxDepth = 6) {
  return async function generateMetadata({ params }: { params: { slug?: string[] } }) {
    const config = resolveConfig(baseKey, params.slug ?? [], maxDepth);

    if (!config) return {};

    return {
      title: config.seo?.title ?? config.title,
      description: config.seo?.description ?? config.description,
    };
  };
}
