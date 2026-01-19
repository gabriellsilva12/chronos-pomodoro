import type { TaskModel } from "../models/taskModel";

export  function getNextCycleType(currenctCycle: number): TaskModel['type'] {
  if(currenctCycle % 8 === 0 ) return 'longBreakTime'
  if(currenctCycle % 2 === 0 ) return 'shortBreakTime'
  return 'workTime'
}
