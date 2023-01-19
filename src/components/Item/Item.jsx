import React from "react";
import PropTypes from "prop-types";
import "./Item.css";
import { useDispatch } from "react-redux";
import { itemToggle, itemDelete } from "../../state/slices";

const Item = ({ uuid, itemName, itemStatus }) => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(itemToggle({ uuid, itemStatus: !itemStatus }));
  };

  const handleDelete = () => {
    dispatch(itemDelete({ uuid }));
  };

  return (
    <div
      className={"item" + (itemStatus ? " item-done" : "")}
      onClick={handleStatus}
    >
      <div>{itemName}</div>
      {itemStatus && (
        <button className="item-delete" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

Item.propTypes = {
  uuid: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemStatus: PropTypes.bool.isRequired,
};

export default Item;
