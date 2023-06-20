import React from "react";
import Card from "./Card";
import BasicCard from "./BasicCard";

function ImageCard() {
  const items = [
    { id: 1, image: "https://cdn.shopify.com/s/files/1/0264/3207/7929/products/eng4u-english-online-course_1718x.jpg?v=1598295984" },
    { id: 2, image: "url2" },
    { id: 3, image: "url3" },
    // Другие объекты данных...
  ];

  return (
    <div>
      {items.map((item) => (
        <BasicCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ImageCard;
