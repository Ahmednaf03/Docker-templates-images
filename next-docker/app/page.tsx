'use client';

import Link from "next/link";
import { getTasks, deleteData } from "@/lib/action";
import { useEffect, useState } from "react";

function Home() {
  function handleDelete(task: string) {
    console.log(task);
    deleteData(task);
    setTasks(...tasks)
  }
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getAllTasks() {
      const allTasks = await getTasks();
      setTasks(allTasks); // Update the state
      console.log(allTasks);
    }

    getAllTasks();
  }, []);

  if (!tasks.length) {
    return (
      <main className="p-8 bg-gray-100 min-h-screen">
        <section className="max-w-7xl mx-auto">
      <div className="flex justify-between h-12">
          <h1 className="text-4xl font-bold mb-6">Registered Tasks</h1>
          <Link href="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center ">
            Create Record
          </Link>
          </div>
          
          <div className="text-gray-600 text-left w-full flex justify-between">
            <p>No Records found enter one to ensure the orchestration of containers are fine.</p>
            
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6">Registered Tasks</h1>
          <Link href="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Task
          </Link>
        </div>
      
        <div className="grid grid-cols-1 gap-6 mt-5">
  {tasks.map((task) => (
    <div
      key={task._id}
      className="border text-card-foreground bg-white shadow-lg rounded-lg p-2"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {task.task}
        </h3>
        <p className="text-sm text-muted-foreground">{task.description}</p>
      </div>
      <div className="items-center flex justify-between px-6 pb-6">
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700">
          {task.status}
        </span>
        <button
          onClick={() => handleDelete(task.task)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>
      </section>
    </main>
  );
}

export default Home;
