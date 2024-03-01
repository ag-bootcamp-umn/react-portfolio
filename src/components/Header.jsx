import { Nav } from "../components";
import {  Routes, Route, useLocation } from "react-router-dom";

export default function Header(props) {

  return (
   <>
    <Nav  currentPage={props.currentPage}/>
   </>
  )
}