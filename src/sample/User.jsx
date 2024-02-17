import React from "react";
import { useContext } from "react";
import UserContext from "./context/userContext";
import Details from "./Details";

function User() {
  const data = useContext(UserContext);
  return <div>User: {data}
  <Details/></div>;
}

export default User;
