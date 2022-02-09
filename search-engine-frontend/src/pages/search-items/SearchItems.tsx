import React from "react";
import Card from "../../components/card/Card";
import SearchField from "../../components/search-field/SearchField";
import "./SearchItems.styles.css";

const SearchItems: React.FC<{}> = () => {
  return (
    <div className="search__items__container" style={{
      backgroundImage: `url(/BgImg.png)`,
      backgroundSize: "contain"
    }}>
      <SearchField></SearchField>
      <Card
        className="small"
        border="none"
        borderRadius="8px"
        cardPhotoUrl="https://cdn.puntosleal.com/lc/images/marketplace/home-banner-slide-2-mb.png"
        altPhotoDescription="Cheems"
        cardTitle="Cheems"
        cardShortDescription="Cheems"
        cardFullDescription="Cheems"
        cardDetailRedirectUrl="Cheems"
        isRedirectUrlActive={false}
      />
      <a href='https://www.freepik.es/vectores/abstracto'>
        Vector de Abstracto creado por vectorjuice - www.freepik.es
      </a>
    </div>
  );
}

export default SearchItems;