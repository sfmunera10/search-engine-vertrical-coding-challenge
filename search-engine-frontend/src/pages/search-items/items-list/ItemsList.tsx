import React from "react";
import "./ItemsList.styles.css";
import Card from "../../../components/card/Card";
import "./ItemsList.styles.css";
import { PATH } from "../../../constants/Path";
import { Item } from "../../../interfaces/Item";

interface Props {
    itemsFound: Item[];
    resultsQuery: string | null;
};

const ItemsList: React.FC<Props> = ({ itemsFound, resultsQuery }: Props) => {
    return (
        <div className="items__list">
            {itemsFound.length &&
                itemsFound.map((item: Item) =>
                (<Card
                    className="small"
                    border="none"
                    borderRadius="8px"
                    cardId={item.id}
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