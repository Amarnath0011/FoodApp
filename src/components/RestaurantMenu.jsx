import React from 'react'
import { useEffect } from 'react';
const RestaurantMenu = () => {
  
  const fetchMenu = async() =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7719432&lng=86.1468485&restaurantId=783298&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  }
  useEffect(()=>{
    fetchMenu();
  },[]);
  return (
    <>
  <div className="text-center my-6">
    <h1 className="text-3xl font-bold text-amber-600">Name of the Restaurant</h1>
  </div>

  <div className="mx-auto w-[90%] md:w-[70%] lg:w-[50%] border-2 border-amber-200 rounded-2xl shadow-md p-6 flex flex-col gap-4">

    <div className="flex justify-between text-lg font-medium">
      <div className="text-green-600">⭐ 4.5</div>
      <div className="text-gray-700">₹XXX for Two</div>
    </div>

    {/* Cuisines */}
    <div className="text-gray-600">
      <span className="font-semibold">Cuisines: </span>
      Indian, Chinese, Italian
    </div>

    {/* Delivery Time */}
    <div className="text-gray-600">
      <span className="font-semibold">Delivery Time: </span>
      30-40 mins
    </div>
  </div>
</>

   
  )
}

export default RestaurantMenu;