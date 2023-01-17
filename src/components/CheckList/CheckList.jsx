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
            key={item.itemName}
            uuid={item.uuid}
            itemName={item.itemName}
            itemStatus={item.itemStatus}
          />
        );
      })}
    </div>
  );
};

export default CheckList;
