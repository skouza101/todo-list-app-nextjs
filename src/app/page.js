"use client";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Task from "@/components/Task";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function Home() {
  const [todos, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([...todos, { id: uuidv4(), task: todo, isEnding: false }]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (newValue, id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id
          ? { ...todos, task: newValue, isEnding: true }
          : console.log("canceled")
      )
    );
  };

  const updateTask = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todos, isEnding: true } : console.log("canceled")
      )
    );
  };

  return (
    <main className="w-screen min-h-full px-32 relative flex flex-col">
      <Header />
      <Task
        data={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        updateTask={updateTask}
      />
      <Form createTodo={createTodo} />
    </main>
  );
}
