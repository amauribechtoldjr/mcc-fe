import { SearchInput } from "@components/SearchInput";

export const CardSearchBar = () => {
  return (
    <SearchInput
      icon="filter"
      placeholder="Busque pelo nome"
      aria-label="Busque pelo nome"
    />
  );
};
