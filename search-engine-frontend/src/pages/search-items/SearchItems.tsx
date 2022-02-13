import React, { useEffect, useState } from "react";
import SearchField from "../../components/search-field/SearchField";
import { ITEMS_API_BASE_URL } from "../../constants/ClientAPIBaseURL";
import "./SearchItems.styles.css";
import ItemsList from "./items-list/ItemsList";
import { Item } from "../../interfaces/Item";
import { useSearchParams } from "react-router-dom";

const SearchItems: React.FC<{}> = () => {
  const [searchQueryParams] = useSearchParams();
  const resultsQuery = searchQueryParams.get("title");

  const [itemsQuery, setItemsQuery] = useState<string | null>(resultsQuery);
  const [itemsFound, setItemsFound] = useState<Item[]>([]);

  const searchItemsByTitle = async (titleQuery: string, abortControllerSignal?: AbortSignal): Promise<Item[]> => {
    const encodedItemsQuery = encodeURIComponent(titleQuery);
    const result = await fetch(`${ITEMS_API_BASE_URL}?title=${encodedItemsQuery}`, {
      signal: abortControllerSignal || null
    });
    if (abortControllerSignal && abortControllerSignal.aborted) {
      console.log("Aborted");
    }
    return (await result.json()).data;
  };

  const handleSearch = async (event?: React.FormEvent<HTMLFormElement>, abortControllerSignal?: AbortSignal) => {
    if (event) {
      event.preventDefault();
    }
    if (itemsQuery) {
      const response = await searchItemsByTitle(itemsQuery, abortControllerSignal);
      setItemsFound(response);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (resultsQuery) {
      setItemsQuery(resultsQuery);
      handleSearch(undefined, abortController.signal);
    }
    return () => {
      abortController.abort();
    };
  }, [resultsQuery]);

  return (
    <div className="search__items__container" style={{
      backgroundImage: `url(/BgImg.png)`,
      backgroundRepeat: "repeat"
    }}>
      <SearchField searchQuery={itemsQuery} setSearchQuery={setItemsQuery} handleSearch={handleSearch} />
      <ItemsList itemsFound={itemsFound} resultsQuery={itemsQuery} />
      <a href='https://www.freepik.com/vectors/background'>
        Background vector created by Sketchepedia - www.freepik.com
      </a>
      <br />
    </div>
  );
}

export default SearchItems;