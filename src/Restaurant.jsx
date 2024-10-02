import React, { useState } from 'react';

const Restaurant = ({ restaurants,onChangeCurrent }) => {
  const [current, setCurrent] = useState('');


  const setActive = (name,index) => {
    setCurrent(name);
    onChangeCurrent(index);
  };

  return (
    <div className='mt-5 '>
      <ul className="w-[250px] bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        {restaurants.map((restaurant, index) => (
          <li onClick={() => setActive(restaurant.restaurantName,index)}
            key={index}
            className={`text-center p-4 cursor-pointer ${
              current === restaurant.restaurantName ? 'bg-red-500 text-white' : ''
            }`}
          >
            <span >
              {restaurant.restaurantName}
            </span>
          </li>
        ))}
      </ul>

      

     
    </div>
  );
};

export default Restaurant;
