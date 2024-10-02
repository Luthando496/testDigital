import React, { useState } from 'react';
import { RiArrowRightWideFill } from "react-icons/ri";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const Categories = ({ currency,restaurantData,exchange }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[482px] rounded-xl bg-white">
      {restaurantData.categories.map((category, index) => (
        <div key={index} className="">
          <div
            onClick={() => toggleCategory(index)}
            className="max-w-full flex justify-between items-center px-3 cursor-pointer"
          >
            <div className="flex gap-1 items-center py-2">
              <span>
                {openIndex === index ? <MdOutlineKeyboardArrowUp size={30} /> : <RiArrowRightWideFill size={30} />}
              </span>
              <h2 className="text-xl font-light">{category.categoryName}</h2>
            </div>
            <GiFullPizza size={30} />
          </div>
        

        {/*  */}
          {openIndex === index && (
            category.items.map((food, index) => (
              <div key={index} className="w-full bg-gray-500/30 py-3">
                <p className="flex justify-between px-[4rem] py-1 text-black/60">
                  <span className="font-semibold">{food.name}</span>
                  <span className="font-semibold"> {currency === "USD" ? "$" : "EUR"} { (food.price * exchange).toFixed(2)}</span>
                </p>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;