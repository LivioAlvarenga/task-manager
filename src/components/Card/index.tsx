import React from "react";
import style from "./Card.module.scss";

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return <div className={style.Card}>{props.children}</div>;
};

export default Card;
