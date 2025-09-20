// import RestaurantCard from "./RestaurantCard"
// import { useState } from "react"
// // import resObj from "../utils/mockData" 
// import { useEffect } from "react"
// import Shimmer from "./Shimmer"

// const Body = () =>{
//    const[reslist,setReslist] = useState([]);
//    const[filteredRestaurant, setFilteredRestaurant] = useState([]);
//    const[searchText, setSearchText] = useState("");
//    useEffect(()=>{
//     fetchData();
//    },[]) 

//    const fetchData = async () =>{
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.123841&lng=75.856316&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//     );
//     const json = await data.json();
//     console.log(json);
//     const restaurants = json?.data?.cards
//     ?.filter(c => c.card?.card?.info)  
//     .map(c => c.card.card);  
//     setReslist(restaurants)
//     setFilteredRestaurant(restaurants)
//    };

// //Conditional rendering :-

//   //  if(reslist.length === 0 ){
 
//   //   return (
//   //     <Shimmer/>
//   //   )
//   //  }

//     return reslist.length === 0 ? ( <Shimmer/>) :
//       <>
//       <div className="flex justify-start my-4 mx-[50px]">
//         <button className="p-3 bg-amber-200 text-black rounded-2xl hover:bg-amber-400 shadow-amber-800 hover:cursor-pointer" 
//         onClick={()=>{
//           const filteredList = reslist.filter((res)=> {
//           return (Number(res.info.avgRatingString) > 4)
//           });
//           setFilteredRestaurant(filteredList) }}>Top Rated Restaurant</button>
//         <input
//   type="text"
//   placeholder="🔍"
//   value={searchText}
//   onChange={(e) => setSearchText(e.target.value)}
//   className="mx-4 border-2 border-amber-200 rounded-2xl cursor-pointer px-3 text-2xl"
// />
//         <button className="bg-green-800 rounded-2xl hover:bg-green-500 shadow-md p-3 hover:outline-amber-500 text-white cursor-pointer "
//         onClick={()=>{
//           console.log(searchText)
//           const filtered = reslist.filter((res)=>{
           
//              return res.info.name.toLowerCase().includes(searchText.toLowerCase()) ;
              
//           });
//           setFilteredRestaurant(filtered)
//         }}>Search</button>
//       </div>
//       <div className="flex justify-center items-center min-h-screen min-w-screen">
//       <div className='flex flex-wrap mx-[70px]'>
//       {/* <RestaurantCard resData={resObj[0]}/> */}
//       {/* <RestaurantCard resName="KFC" cuisine="chicken , American " avgRating="4.8"/>
//       <RestaurantCard resName="Burger King" cuisine="Burgers , Chinese" avgRating="4.0"/>  */}
    
//       {filteredRestaurant.map((restaurant) =>( 
//         <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
//       ) )}
//       </div>
//       </div>
//       </>
    
//   }
   
//   export default Body
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Footer from "./Footer";

const Body = () => {
  const [reslist, setReslist] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.123841&lng=75.856316&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards
        ?.filter((c) => c.card?.card?.info)
        .map((c) => c.card.card) || [];

    setReslist(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (reslist.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      {/* 🔎 Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start my-4 mx-6 md:mx-[50px]">
        {/* Top Rated */}
        <button
          className="p-2 md:p-3 bg-amber-200 text-black rounded-2xl hover:bg-amber-400 shadow hover:cursor-pointer"
          onClick={() => {
            const filteredList = reslist.filter(
              (res) => Number(res.info.avgRatingString) > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1 border-2 border-amber-200 rounded-2xl px-3 text-base md:text-lg"
        />

        {/* Search Button */}
        <div className="sm: flex justify-evenly">
        <button
          className="bg-green-800 rounded-2xl hover:bg-green-500 shadow-md px-4 py-2 text-white cursor-pointer sm:gap-6"
          onClick={() => {
            const filtered = reslist.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>

        {/* Reset Button */}
        <button
          className="bg-gray-400 text-white rounded-2xl hover:bg-gray-500 shadow px-4 py-2"
          onClick={() => setFilteredRestaurant(reslist)}
        >
          Reset
        </button>
        </div>
      </div>

      {/* 🏪 Restaurant Cards */}
      <div className="px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filteredRestaurant.length > 0 ? (
            filteredRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No restaurants found 🍴
            </p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Body;
