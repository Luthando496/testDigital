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
    // parent container of each list 
    <div className='flex flex-col gap-3'>
      {restaurantData.categories.map((category, index) => (
        /// each list of categories and items
    <div key={index} className="lg:w-[482px] md:w-full rounded-lg bg-white  shadow-2xl foods">
        <ul key={index *6} className="">
          <li
            onClick={() => toggleCategory(index)}
            className="max-w-full flex justify-between items-center cursor-pointer px-4"
          >
            <div className="flex gap-1 items-center py-5 ">
              <span className='fonts-logos'>
                {openIndex === index ? <MdOutlineKeyboardArrowUp className='fonts-logos'  /> : <RiArrowRightWideFill className='fonts-logos' />}
              </span>
              <h2 className="lg:text-xl text-base font-light">{category.categoryName}</h2>
            </div>
            <GiFullPizza className='text-[2rem]'  />
          </li>
        

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
        </ul>
    </div>
      ))}
    </div>
  );
};

export default Categories;