import { CollectionCard } from "@features/collections/components/CollectionCard";
import { CollectionsSection } from "@features/collections/components/CollectionsSection";
import { MOCK_COLLECTIONS } from "@features/collections/mocks/collections.mock";
import { Hero } from "@features/home/components/Hero";
import { StatsBanner } from "@features/home/components/StatsBanner";
import { MOCK_HOME_STATS } from "@features/home/mocks/home.mock";
import { Link } from "@tanstack/react-router";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsBanner stats={MOCK_HOME_STATS} />
      <CollectionsSection title="Maiores coleções">
        {MOCK_COLLECTIONS.map((collection) => (
          <Link
            key={collection.id}
            to="/collections/$id"
            params={{ id: collection.id }}
          >
            <CollectionCard collection={collection} />
          </Link>
        ))}
      </CollectionsSection>
    </>
  );
};
