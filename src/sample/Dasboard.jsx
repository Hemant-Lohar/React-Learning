import React, { useReducer, useState } from "react";
import Details from "./Details";
import User from "./User";
import UserContext from "./context/userContext";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, 
      {
        id: state.length + 1,
        name: action.payload
      }
      ];
      case "DELETE":
        return state.filter((e) => e.id !== action.payload)
    
    default:
      return state;
  }
}

function Dasboard() {
  const [name, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const username = name;

  return (
    <UserContext.Provider value={username}>
      <div className="flex flex-col justify-start items-center p-20">
        <h1>Dasboard</h1>

        <input
          className="border"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          className="bg-blue-500 p-2 mt-4"
          onClick={(e) => {
            dispatch({ type: "ADD_NAME", payload: input });
          }}
        >
          ADD
        </button>
        <button bg-blue-500 p-4>
          Delete
        </button>
        {name.map((item) => {
          
          return <li key={item.id}> {item.id}  ---- {item.name}  <span> <button
          className="bg-red-500 p-2 mt-4"
          onClick={(e) => {
            dispatch({ type: "DELETE", payload: item.id });
          }}
        >
          DELETE
        </button></span></li>;
        })}
        <hr />
        {/* <User /> */}
        <hr />
        {/* <Details /> */}
      </div>
    </UserContext.Provider>
  );
}

export default Dasboard;
