
import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header  from "./src/components/Header";
import Body from "./src/components/Body";
import restroData from "./src/utils/mockRestroData";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
// import Grocery from "./src/components/Grocery";


/*
Read: 
Chunking
Lazy loading
Dynamic Bundling
Code Spliting
On demand loading
*/


const Grocery = lazy(()=>import("./src/components/Grocery"));
const About = lazy(()=>import("./src/components/About"));


// <div id="parent">
// <div id="child">
//     <h1>
//         "I am h1 tag"
//     </h1>
//       <h1>
//         "I am h1 tag"
//     </h1>
// </div>
// </div>

// make the above structure in react

// const jsxHeading = (<h1>"React using JSX"

// </h1>)

//React Components
//class based component (Old way of writing code)
//function based component (new way of writing code)

// a function that returns some jsx code, is a functional component
// const Title = ()=>(
//     <h1 id="heading" className="head" tabIndex="5">
//      Hi I am title
//     </h1>
// )

// //conponent composition
// const a=1000
// const b=2000
// const HeadComponent = ()=>(
//     <div id="container">
//         {/* This is how react element are passed    */} 
//         {jsxHeading}
//      {/* This is how component are passed    */}
//     <Title/>
//     {/* You can pass like function also */}
//     {Title()}
//     <h2>{a+b}</h2>
//     <h1 id="heading">React functional component using JSX</h1>;
//     </div>
// )


// const parent = React.createElement("div", { "id": "parent" }, [
//     React.createElement("div",
//         { "id": "child" },
//         [React.createElement("h1", {}, "React rock"),React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
//     React.createElement("div",
//         { "id": "child2" },
//         [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])
// ]);


// let heading = React.createElement("h1", {
//     "id": "heading", "xyz": "abc"
// }, "Hello World from React")

// //console.log(parent); // it will return a javascript object
// let root = ReactDom.createRoot(document.getElementById("root"));
// //root.render(parent);
// //this is how we render functional component
// root.render(<HeadComponent/>)


// FOOD ordering App


// const Header =()=>{
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=1380&t=st=1707054825~exp=1707055425~hmac=7b436b804c69b2b7c199c12977c3c2380b38f3da811f5b5b4c3e04df8848558c"/>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About US</li>
//                     <li>Contact US</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>

//         </div>
//     )
// }

// const RestaurantCard = (props)=>{
//     let {resData} = props;
//     let {name, cuisines, avgRating, costForTwo} = resData?.info;
//     let {deliveryTime} = resData?.info?.sla;
//     return (
//         <div className="res-card">
//             <img 
//             className="res-logo"
//             alt="res-logo"
//             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/"+ resData.info.cloudinaryImageId }
//             ></img>
//         <h3>{name}</h3>
//         <h4>{cuisines.join(", ")}</h4>
//         <h4>{avgRating} stars</h4>
//         <h4>{costForTwo} </h4>
//         <h4>{deliveryTime} minutes</h4> 
//         </div>
//     )
// }

// const Body =()=>{
//     return (
//         <div className="body">
//           <div className="Search">Search</div>
//           <div className="res-container"> 
//           {/* <RestaurantCard  resData={restroData[0]}
//         //   resName="KFC"
//         //    cuisine="Burger"
//         //    rating="4.5 rating"
//         //    timetaken="38 min"
//         //    image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/f01666ac73626461d7455d9c24005cd4"
           
//           /> 
//            <RestaurantCard resData={restroData[1]}
//         //    resName="Dominos"
//         //    cuisine="Pizza, Burger"
//         //    rating="4.5 rating"
//         //    timetaken="38 min"
//         //    image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/fslxuufplefyuqrdqt9g"
//            />
//             <RestaurantCard  resData={restroData[2]}/>
//             <RestaurantCard  resData={restroData[3]}/>
//             <RestaurantCard  resData={restroData[4]}/>
//             <RestaurantCard  resData={restroData[5]}/>
//             <RestaurantCard  resData={restroData[6]}/>
//             <RestaurantCard  resData={restroData[7]}/>
//             <RestaurantCard  resData={restroData[8]}/> */}
//             {    // this index methodology is not recommended
//                 //  restroData.map((row,index)=> <RestaurantCard key={index} resData={row}/>)

//                 // key is there for not loading whole cards in the container when new card is added
//              restroData.map(row=> <RestaurantCard key={row.info.id} resData={row}/>)
//             }
//           </div>
//         </div>
//     )
// }




const Applayout =()=>(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children:[
            {
                path:"/",
                element: <Body/>,
                errorElement : <Error/>
             },
            {
                path:"/about",
                element: (<Suspense fallback={<h1>Loading About.....</h1>}> <About/> </Suspense>),
                errorElement : <Error/>
             },
             {
                path:"/contact",
                element: <Contact/>,
                errorElement : <Error/>
             },
             {
                path:"/cart",
                element: <Cart/>,
                errorElement : <Error/>
             },
             {
               path:"/grocery",
               element: (<Suspense fallback={<h1>Loading Grocery.....</h1>}> <Grocery/> </Suspense>),
               errorElement : <Grocery/>
            },
            {
               path:"/login",
               element: (<Suspense fallback={<h1>Loading Loading.....</h1>}> <Login/> </Suspense>),
               errorElement : <Error/>
            },
            {
               path:"/restaurants/:resId",
               element: <RestaurantMenu/>,
               errorElement : <Error/>
            }
        ],
        errorElement : <Error/>
     },
     {
        path:"/about",
        element: <About/>,
        errorElement : <Error/>
     },
     {
        path:"/contact",
        element: <Contact/>,
        errorElement : <Error/>
     },
     {
        path:"/cart",
        element: <Cart/>,
        errorElement : <Error/>
     },{
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>,
        errorElement : <Error/>
     },
     {
      path:"/login",
      element: (<Suspense fallback={<h1>Loading Loading.....</h1>}> <Login/> </Suspense>),
      errorElement : <Login/>
   }
    ])

let root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>)
