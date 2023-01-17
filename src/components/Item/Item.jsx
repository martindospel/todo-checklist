import React from "react";
import PropTypes from "prop-types";
import "./Item.css";
import { useDispatch } from "react-redux";
import { itemToggle, itemDelete } from "../../state/slices";

const Item = (uuid, itemName, itemStatus) => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(itemToggle({ uuid, itemStatus: !itemStatus }));
  };

  const handleDelete = () => {
    dispatch(itemDelete({ uuid }));
  };

  return (
    <div className={"todo__item" + (itemStatus ? " todo--completed" : "")}>
      <div className="todo--toggle-completed" onClick={handleStatus}>
        {itemName}
      </div>
      {itemStatus && (
        <button className="todo__button--remove" onClick={handleDelete}>
          Remove
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
