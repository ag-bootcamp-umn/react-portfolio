import { Nav } from "../components";
import {  Routes, Route, useLocation } from "react-router-dom";



export default function Header(props) {

  const currentPage = useLocation().pathname;

  return (
   <>
    {/* {props.children} */}
    <Nav  currentPage={currentPage}/>
   </>
  )
}