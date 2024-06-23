import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Donations from "./Components/Pages/Donations";
import Blog from "./Components/Pages/Blog";
import SharedLayout from "./Components/Layout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Post4 from "./Components/Post4";
import Post1 from "./Components/Post1";
import Post2 from "./Components/Post2";
import Post3 from "./Components/Post3";
import Post5 from "./Components/Post5";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Donations" element={<Donations/>}></Route>
        <Route path="/Post1" element={<Post1/>}></Route>
        <Route path="/Post2" element={<Post2/>}></Route>
        <Route path="/Post3" element={<Post3/>}></Route>
        <Route path="/Post4" element={<Post4/>}></Route>
        <Route path="/Post5" element={<Post5/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
