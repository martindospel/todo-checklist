import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
import "./CheckList.css";

const CheckList = () => {
  const items = useSelector((state) => state.items);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="items">
      {items?.map((item) => {
        return (
          <Item
            item={item}
            key={item.uuid}
            id={item.uuid}
            title={item.itemName}
            completed={item.itemStatus}
          />
        );
      })}
    </div>
  );
};

export default CheckList;
