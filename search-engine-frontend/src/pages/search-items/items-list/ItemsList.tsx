import React from "react";
import "./ItemsList.styles.css";
import Card from "../../../components/card/Card";
import "./ItemsList.styles.css";
import { PATH } from "../../../constants/Path";
import { Item } from "../../../interfaces/Item";
import ListNotFound from "../../../components/list-not-found/ListNotFound";

interface Props {
    itemsFound: Item[];
    itemsNotFound: boolean;
    resultsQuery: string | null;
};

const ItemsList: React.FC<Props> = ({ itemsFound, itemsNotFound, resultsQuery }: Props) => {
    return (
        <div className="items__list">
            {itemsNotFound ? (<ListNotFound />) :
                !itemsFound.length ? (<span></span>) :
                    itemsFound.map((item: Item) =>
                    (<Card
                        className="small"
                        border="none"
                        borderRadius="8px"
                        cardPhotoUrl={item.photoURL}
                        altPhotoDescription={item.title}
                        cardTitle={item.title}
                        cardShortDescription={item.shortDescription}
                        cardFullDescription={item.description}
                        cardDetailRedirectUrl={`${PATH.ITEM_DETAIL_NO_PARAM}/${item.id}?title=${item.title}&results=${resultsQuery}`}
                    />))
            }
        </div>
    );
}

export default ItemsList;