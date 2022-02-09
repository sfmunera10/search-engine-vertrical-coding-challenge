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
        cardPhotoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lupinus_polyphyllus_UA_2015_G5.jpg/640px-Lupinus_polyphyllus_UA_2015_G5.jpg"
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