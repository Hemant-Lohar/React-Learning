import { useRef } from "react";
import { useState } from "react";




function App() {
  const [inputTask, setinputTask] = useState("");
  const [TaksList, setTaksList] = useState([{ id: "", name: "" }]);
  const first = useRef()

  const TaskInput = (inputValue) => {
    setinputTask(inputValue);
  };

  const handleSubmit = () => {
    setTaksList([
      ...TaksList,
      { id: new Date().getTime().toString(), name: inputTask },
    ]);

    setinputTask("");
  };
  

  return (
    <>
      <div className="h-screen w-full p-8 flex flex-col justify-start items-center">
        <h1 className=" text-purple-600 font-bold text-center text-4xl w-full p-4">
          TODO APP
        </h1>
        <div>
          <input
            className="border rounded-xl border-black py-1 px-4"
            type="text"
            name="taskInput"
            id="task"
            value={inputTask}
            onChange={(event) => {
              TaskInput(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 ms-2 bg-blue-500 rounded-full text-center text-white font-bold"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            ADD
          </button>

          {TaksList.map((list) => {
            
            return (
              <>
                <p>{list.id}</p>
                <p>{list.name}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
