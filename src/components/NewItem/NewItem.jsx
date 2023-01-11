import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const NewItem = () => {
  const dispatch = useDispatch();
  const userInput = useRef(null);
  return <div>NewItem</div>;
};

export default NewItem;