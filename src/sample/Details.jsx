import React from 'react'
import { useContext } from "react";
import UserContext from "./context/userContext";
function Details() {
    const data = useContext(UserContext)
  return (
    <div>Details : {data}</div>
  )
}

export default Details