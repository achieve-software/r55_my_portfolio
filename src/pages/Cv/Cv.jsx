import React from "react";
import "./Cv.scss";
const Cv = () => {
  const imgStyle = {
    width: "900px", // Resim genişliği
    height: "auto", // Resim yüksekliği otomatik olarak ayarlanacak
    border: "2px solid #df2525", // Kenarlık
    display: 'block', // Resmi bir blok element yapar
    margin: '30px auto', // Resmi yatayda ortalar

   
   
  };
  return (
    <div>
      <img src="c.png" alt="ccc" style={imgStyle} />
    </div>
  );
};

export default Cv;
