import { Container } from "@components/Container";
import { Typography } from "@components/Typography";
import { CollectionsGrid } from "@features/collections/components/CollectionsGrid";
import type { ReactNode } from "react";

type CollectionsSectionProps = {
  title: string;
  children: ReactNode;
};

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
