import React from "react";
import {Card, Text, CardHeader, CardBody, CardFooter} from "@chakra-ui/react";
import {Props} from "@/type";
import styles from "./ProductSlider.module.css";

const CardItem = ({children, className}: Props) => {
  return (
    <Card className={`${className}} ${styles["title-products-seller"]}`}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  );
};

export default CardItem;
