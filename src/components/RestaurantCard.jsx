import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
  
const RestaurantCard = (props) =>{
    const {resData} = props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating 
    } = resData.info
    // console.log(resData) // there is problem that the extra res card other than
    //called by my api is coming on my webpage .
    return(
        
      <>
      <Link to="/restaurants/123">
    <div  className="my-3 py-2  w-[90%] gap-[30px] sm:max-w-sm rounded-2xl shadow-md  mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200 flex md:flex-col sm:h-auto md:bg-amber-100">
   
    <div className="h-[200px]  rounded-lg ">
      <img
        className="h-full w-full object-cover p-2 rounded-2xl"
        src={CDN_URL+cloudinaryImageId}
        alt="Restaurant"
      />
    </div>
  
  
    <div className="px-4 py-6 flex flex-col justify-between h-[150px]">
      <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
      <p className="text-sm text-gray-500 font-semibold ">{cuisines[0]}</p>
      <span className="text-green-600 font-semibold" >{costForTwo}</span>
      <div className="flex items-center justify-between mt-1">
        <span className="text-yellow-500 font-medium text-[20px]">⭐ {avgRating}</span>
       
        <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition">
          🛒 Add
        </button>
      </div>
    </div>
  </div>
  </Link>
      </>
    )
  }
  export default RestaurantCard;