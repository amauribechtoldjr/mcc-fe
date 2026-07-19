import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Icon } from "@components/Icon";
import { Pagination } from "@components/Pagination";
import { SearchInput } from "@components/SearchInput";
import { CollectionSidebar } from "@features/collections/components/CollectionSidebar";
import { MOCK_COLLECTION_ENTRIES } from "@features/collections/mocks/collections.mock";
import { CardGrid } from "@features/mtg_cards/components/CardGrid";
import { CardTile } from "@features/mtg_cards/components/CardTile";
import { useMTGCardsQuery } from "@features/mtg_cards/hooks/useCardsQuery";
import { useDebounce } from "@hooks/useDebounce";
import { usePagination } from "@hooks/usePagination";
import { useEffect, useState } from "react";

export const CollectionEditPage = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce<string>(search);
  const { page, pageSize, limit, offset, setPage, reset } = usePagination({
    pageSize: 20,
  });

  useEffect(() => {
    reset();
  }, [debouncedSearch, reset]);

  const { data: cards } = useMTGCardsQuery({
    enabled: debouncedSearch.length >= 3,
    limit,
    offset,
    search: debouncedSearch,
  });

  return (
    <Container>
      <div className="py-12">
        <SearchInput
          icon="filter"
          placeholder="Busque pelo nome"
          aria-label="Busque pelo nome"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CardGrid>
              {cards?.data.map((card) => (
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

            {cards && (
              <Pagination
                total={cards.total}
                page={page}
                pageSize={pageSize}
                onPageChange={setPage}
                className="mt-8"
              />
            )}
          </div>

          <CollectionSidebar entries={MOCK_COLLECTION_ENTRIES} />
        </div>
      </div>
    </Container>
  );
};
