import React from "react";
import { Link } from "react-router-dom";

const Card = ({description, alt_description, id, user, urls, likes}) => {
const Card = (props) => {

  const {description, alt_description, id, user, urls, likes} = props;

  const style = {
    backgroundImage: `url(${urls.small})`
@@ -24,4 +27,4 @@ const Card = ({description, alt_description, id, user, urls, likes}) => {
  )
}

export default Card;
export default Card;