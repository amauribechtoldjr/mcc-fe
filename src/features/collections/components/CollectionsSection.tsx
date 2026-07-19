import type { ReactNode } from "react";
import { Container } from "@components/Container";
import { Typography } from "@components/Typography";
import { CollectionsGrid } from "@features/collections/components/CollectionsGrid";

type CollectionsSectionProps = {
  title: string;
  children: ReactNode;
};

/**
 * "Maiores coleções" on the Home and "Suas coleções" on the Collections page
 * are the same section with a different title and link target, so the caller
 * supplies the already-linked cards.
 */
export const CollectionsSection = ({
  title,
  children,
}: CollectionsSectionProps) => {
  return (
    <Container>
      <section className="py-16">
        <Typography as="h2" size="xl" className="mb-8 block">
          {title}
        </Typography>
        <CollectionsGrid>{children}</CollectionsGrid>
      </section>
    </Container>
  );
};
