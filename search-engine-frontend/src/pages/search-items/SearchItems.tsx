import React, { useEffect, useState } from "react";
import SearchField from "../../components/search-field/SearchField";
import "./SearchItems.styles.css";
import ItemsList from "./items-list/ItemsList";
import { Item } from "../../interfaces/Item";
import { useSearchParams } from "react-router-dom";
import { searchItemsByTitle } from "../../services/ItemService";
import Loader from "../../components/loader/Loader";

const SearchItems: React.FC<{}> = () => {
  const [searchQueryParams] = useSearchParams();
  const resultsQuery = searchQueryParams.get("title");

  const [itemsQuery, setItemsQuery] = useState<string | null>(resultsQuery);
  const [itemsFound, setItemsFound] = useState<Item[]>([]);
  const [itemsNotFound, setItemsNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (event?: React.FormEvent<HTMLFormElement>, abortControllerSignal?: AbortSignal) => {
    if (event) {
      event.preventDefault();
    }
    if (itemsQuery !== null) {
      setLoading((loading) => !loading);
      const result = await searchItemsByTitle(itemsQuery, abortControllerSignal);
      setItemsNotFound(!result.length);
      setItemsFound(result);
      setLoading((loading) => !loading);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
      {loading ? (<Loader />) : (<ItemsList itemsFound={itemsFound} itemsNotFound={itemsNotFound} resultsQuery={itemsQuery} />)}
      <a href='https://www.freepik.com/vectors/background'>
        Background vector created by Sketchepedia - www.freepik.com
      </a>
      <br />
    </div>
  );
}

export default SearchItems;