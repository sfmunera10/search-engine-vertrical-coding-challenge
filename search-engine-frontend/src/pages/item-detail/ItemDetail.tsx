import React from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import "./ItemDetail.styles.css"

const ItemDetail: React.FC<{}> = () => {
  return (
    <div className="item__detail__container" style={{
      backgroundImage: `url(/BgImg.png)`,
      backgroundSize: "contain"
    }}>
      <Card
        className="large"
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

export default ItemDetail;