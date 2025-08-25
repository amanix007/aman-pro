// app/_components/withNestedPage.tsx
import { NestedPageHandler } from "@/app/_components/NestedPageHandler";
import { createMetadataGenerator } from "../_components/withMetadata";


export function createNestedPage(baseKey: string, maxDepth = 6) {
  const generateMetadata = createMetadataGenerator(baseKey, maxDepth);

  const Page = ({ params }: { params: { slug?: string[] } }) => (
    <NestedPageHandler baseKey={baseKey} slug={params.slug} maxDepth={maxDepth} />
  );

  return { Page, generateMetadata };
}
