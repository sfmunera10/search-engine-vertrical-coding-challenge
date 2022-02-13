import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import "./ItemDetail.styles.css";
import { Item } from "../../interfaces/Item";
import { ITEMS_API_BASE_URL } from "../../constants/ClientAPIBaseURL";
import { PATH } from "../../constants/Path";

const ItemDetail: React.FC<{}> = () => {

  const [searchQueryParams] = useSearchParams();
  const { id } = useParams();
  const titleQuery = searchQueryParams.get("title");
  const resultsQuery = searchQueryParams.get("results");

  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const getItem = async () => {
      const result = await fetch(`${ITEMS_API_BASE_URL}/${id}?title=${titleQuery}`, {
        signal: abortController.signal
      });
      if (!abortController.signal.aborted) {
        let itemResult = (await result.json()).data;
        setItem(itemResult);
      }
    };
    if (titleQuery) {
      getItem();
    }
    return () => {
      abortController.abort();
    };
  }, [titleQuery]);

  return (
    <div className="item__detail__container" style={{
      backgroundImage: `url(/BgImg.png)`,
      backgroundRepeat: "repeat"
    }}>
      {item && (
        <Card
          className="large"
          border="none"
          borderRadius="8px"
          cardId={item.id}
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