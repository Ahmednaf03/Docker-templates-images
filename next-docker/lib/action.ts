"use server";

import dbConnect from "./database/connect";
import Task from "./database/task.model";

export async function getTasks() {
  await dbConnect();

  try {
    const tasks = await Task.find({});
    console.log(tasks);
    
    return tasks;
  } catch (err) {
    console.log(err);
  }
}

export async function createTask(params: {
  task: string;
  description: string;
  status: string;
}) {
  await dbConnect();
console.log(params);

  const { task, description, status } = params;
  console.log(task, description, status);
  

  try {
    const newTask = await Task.create({ task, description, status });
    return newTask;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteData(task: string) {
  await dbConnect();
  try {
    const deletedTask = await Task.findOneAndDelete({ task });
    return deletedTask;
  } catch (err) {
    console.log(err);
  }
}
