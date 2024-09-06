import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./components/app";
import Home from "./components/home";
import About from "./components/about";


export const routing = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
  </Route>
));