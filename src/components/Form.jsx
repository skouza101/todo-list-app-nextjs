"use client";
import Button from "@mui/material/Button";
import { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (value != "") {
      createTodo(value);
      setValue("");
    } else {
      console.log("write a task ...");
    }
  };
  return (
    <div className="flex justify-between items-center sticky w-full gap-4 bottom-3 backdrop-blur-sm bg-slate-950/50 py-4 px-6 rounded-xl">
      <form className="w-full" onSubmit={handleAddTodo}>
        <input
          type="text"
          className="w-full input-bordered input-info input "
          placeholder="write To-Do..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      <Button
        variant="outlined"
        className="h-12 w-20 text-sky-500 border-sky-500 font-bold text-md "
        onClick={handleAddTodo}
      >
        Add
      </Button>
    </div>
  );
};

export default Form;
