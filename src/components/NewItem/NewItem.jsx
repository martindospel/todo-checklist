import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { itemAdd } from "../../state/slices";
import "./NewItem.css";

const NewItem = () => {
  const dispatch = useDispatch();
  const userInput = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      userInput.current.value !== "" &&
      !/^\s*$/gi.test(userInput.current.value)
    ) {
      dispatch(
        itemAdd({
          itemName: userInput.current.value,
        })
      );
      userInput.current.value = null;
    }
  };

  return (
    <form onSubmit={onSubmit} className="userinput">
      <input
        className="textbox"
        type="text"
        ref={userInput}
        placeholder="Go for that walk..."
      ></input>
      <button type="submit" className="submititem">
        Submit
      </button>
    </form>
  );
};

export default NewItem;
