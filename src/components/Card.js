import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from 'react-i18next';

function BasicCard({ item }) {
  const { t } = useTranslation();
  let description = "";

  if (item.id === 1) {
    description = t("basicCard.description1");
  } else if (item.id === 2) {
    description = t("basicCard.description2");
  } else if (item.id === 3) {
    description = t("basicCard.description3");
  }
 else if (item.id === 4) {
  description = t("basicCard.description4");
}
 else if (item.id === 5) {
  description = t("basicCard.description5");
}
 else if (item.id === 6) {
  description = t("basicCard.description6");
}
  return (
    <Card
      style={{
        width: 300,
        height: 300,
        border: "1px solid rgb(49, 54, 61)",
        backgroundColor: "#0d1117",
        color: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Card.Img variant="top" src={item?.image} />
      <Card.Body>
        <Card.Title>Level {item.id}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
