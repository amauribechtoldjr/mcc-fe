import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Icon } from "@components/Icon";
import { CardGrid } from "@features/cards/components/CardGrid";
import { CardSearchBar } from "@features/cards/components/CardSearchBar";
import { CardTile } from "@features/cards/components/CardTile";
import { MOCK_CARDS } from "@features/cards/mocks/cards.mock";
import { CollectionSidebar } from "@features/collections/components/CollectionSidebar";
import { MOCK_COLLECTION_ENTRIES } from "@features/collections/mocks/collections.mock";

export const CollectionEditPage = () => {
  return (
    <Container>
      <div className="py-12">
        <CardSearchBar />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CardGrid>
              {MOCK_CARDS.map((card) => (
                <CardTile
                  key={card.id}
                  card={card}
                  action={
                    <Button
                      variant="accent"
                      shape="circle"
                      aria-label={`Adicionar ${card.name}`}
                    >
                      <Icon icon="plus" />
                    </Button>
                  }
                />
              ))}
            </CardGrid>
          </div>

          <CollectionSidebar entries={MOCK_COLLECTION_ENTRIES} />
        </div>
      </div>
    </Container>
  );
};
