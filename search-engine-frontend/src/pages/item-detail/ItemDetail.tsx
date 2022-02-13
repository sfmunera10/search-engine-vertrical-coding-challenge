import React, { useEffect, useState } from "react";
import { useSearchParams, useParams, Navigate } from "react-router-dom";
import Card from "../../components/card/Card";
import "./ItemDetail.styles.css";
import { Item } from "../../interfaces/Item";
import { PATH } from "../../constants/Path";
import { getItem } from "../../services/ItemService";
import Loader from "../../components/loader/Loader";

const ItemDetail: React.FC<{}> = () => {

  const [searchQueryParams] = useSearchParams();
  const { id } = useParams();
  const titleQuery = searchQueryParams.get("title");
  const resultsQuery = searchQueryParams.get("results");

  const [item, setItem] = useState<Item | null>(null);
  const [itemNotFound, setItemNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const abortController = new AbortController();
    const getItemResult = async () => {
      const itemResult = await getItem(id!, titleQuery!, abortController.signal);
      setItemNotFound(!itemResult);
      setItem(itemResult);
    };
    if (id && titleQuery) {
      setLoading((loading) => !loading);
      getItemResult();
      setLoading((loading) => !loading);
    }
    return () => {
      abortController.abort();
    };
  }, [id, titleQuery]);

  return (
    <div className="item__detail__container" style={{
      backgroundImage: `url(/BgImg.png)`,
      backgroundRepeat: "repeat"
    }}>
      {loading ? (<Loader />) : itemNotFound ? (<Navigate to={PATH.NOT_FOUND_NO_PARAM} />) : item && (
        <Card
          className="large"
          border="none"
          borderRadius="8px"
          cardPhotoUrl={item.photoURL}
          altPhotoDescription={item.title}
          cardTitle={item.title}
          cardShortDescription={item.shortDescription}
          cardFullDescription={item.description}
          cardDetailRedirectUrl={`${PATH.SEARCH_ITEMS}?title=${resultsQuery}`}
        />
      )}
      <a href='https://www.freepik.com/vectors/background'>
        Background vector created by Sketchepedia - www.freepik.com
      </a>
      <br />
    </div>
  );
}

export default ItemDetail;