import {Task, TaskStatus} from "../store/types";
import {kCompanyName} from "./constants";

export function generateTask (num : number) : Task[] {
  let tasks : Task[] = [];
  for (let i = 1; i <= num; ++i) {
    let task : Task = {
      id: i.toString(),
      owner: kCompanyName,
      timer: i,
      status: TaskStatus.Idle,
    }
    tasks.push(task);
  }
  return tasks;
}
