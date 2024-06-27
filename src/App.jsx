// import React from "react";
// import NavbarComponent from "./components/NavbarComponent";
// import CarouselComponent from "./components/CarouselComponent";

// const App = () => {
//   return (
//     <div>
//       <App/>
//       <NavbarComponent />
//       <CarouselComponent />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Root from "./components/Root";
import  About  from "./pages/About";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./Contact";
const router = createBrowserRouter(
  createRoutesFromElements(
  
      
    <Route path="/" element={<Root />}>
      <Route>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
        </Route>
     
    
  
  )
);

const App = () => {
  return (
    <div>
      {" "}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
