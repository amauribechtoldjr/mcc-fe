import { Link } from "@tanstack/react-router";
import { CollectionCard } from "@features/collections/components/CollectionCard";
import { CollectionsSection } from "@features/collections/components/CollectionsSection";
import { MOCK_COLLECTIONS } from "@features/collections/mocks/collections.mock";

export const CollectionsPage = () => {
  return (
    /* These are the signed-in user's own collections, so they lead to the editor. */
    <CollectionsSection title="Suas coleções">
      {MOCK_COLLECTIONS.map((collection) => (
        <Link
          key={collection.id}
          to="/collections/$id/edit"
          params={{ id: collection.id }}
        >
          <CollectionCard collection={collection} />
        </Link>
      ))}
    </CollectionsSection>
  );
};
