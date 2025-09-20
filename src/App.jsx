
// import './App.css'

import Header from './components/Header'
import Body from './components/Body'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ContactUs from './components/ContactUs'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import { Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu' 
function App() {
  
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
};
 export const appRouter = createBrowserRouter([
{
  path:"/",
  element: <App/>,
  errorElement : <ErrorPage/>,
  children: [
    {
      path:"/",
      element:<Body/>,
      errorElement: <ErrorPage/>
    },
    {
      path:"/about",
      element : <About/>,
      errorElement : <ErrorPage/>,
    },
    {
      path:"/contactUs",
      element : <ContactUs/>,
      errorElement : <ErrorPage/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
      errorElement:<ErrorPage/>,
    }
  ]
},

]);

export default App
