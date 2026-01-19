import { useContext } from "react";
import { TaskContexts } from "./TaskContext";

export function useTaskContext() {
  return useContext(TaskContexts)
}