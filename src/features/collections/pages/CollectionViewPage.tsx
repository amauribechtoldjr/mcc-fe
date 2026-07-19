import { Container } from "@components/Container";
import { Typography } from "@components/Typography";
import { MOCK_COLLECTIONS } from "@features/collections/mocks/collections.mock";

import { getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/collections/$id/");

export const CollectionViewPage = () => {
  const { id } = route.useParams();
  const collection = MOCK_COLLECTIONS.find((candidate) => candidate.id === id);

  return (
    <Container>
      <section className="py-16">
        <Typography as="h1" size="xl" className="mb-8 block">
          {collection?.name ?? "Coleção"}
        </Typography>
      </section>
    </Container>
  );
};
