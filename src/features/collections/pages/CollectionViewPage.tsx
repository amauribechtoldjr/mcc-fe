import { getRouteApi } from "@tanstack/react-router";
import { Container } from "@components/Container";
import { Typography } from "@components/Typography";
import { CardGrid } from "@features/cards/components/CardGrid";
import { CardTile } from "@features/cards/components/CardTile";
import { MOCK_CARDS } from "@features/cards/mocks/cards.mock";
import { MOCK_COLLECTIONS } from "@features/collections/mocks/collections.mock";

const route = getRouteApi("/collections/$id/");

/** Public, read-only view: the same `CardTile` as the editor, minus the action. */
export const CollectionViewPage = () => {
  const { id } = route.useParams();
  const collection = MOCK_COLLECTIONS.find(
    (candidate) => candidate.id === id,
  );

  return (
    <Container>
      <section className="py-16">
        <Typography as="h1" size="xl" className="mb-8 block">
          {collection?.name ?? "Coleção"}
        </Typography>
        <CardGrid>
          {MOCK_CARDS.map((card) => (
            <CardTile key={card.id} card={card} />
          ))}
        </CardGrid>
      </section>
    </Container>
  );
};
