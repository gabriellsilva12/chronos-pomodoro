import { useTaskContext } from "../../contexts/TasksContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";


export default function Tips() {
const { state } = useTaskContext();

// cycles
const nextCycle = getNextCycle(state.currentCycle);
const nextCycleType = getNextCycleType(nextCycle);

// Tips
const tipsForWhenActiveTask = {
  workTime: (
    <span>
      Foque por <b>{state.config.workTime}min</b>
    </span>
  ),
  shortBreakTime: (
    <span>
      Descanse por <b>{state.config.shortBreakTime}min</b>
    </span>
  ),
  longBreakTime: <span>Descanso longo</span>,
};

const tipsForNoActiveTask = {
  workTime: (
    <span>
      Proximo ciclo é de <b>{state.config.workTime}min</b>
    </span>
  ),
  shortBreakTime: (
    <span>
      Proximo descanso é de <b>{state.config.shortBreakTime}min</b>
    </span>
  ),
  longBreakTime: (
    <b>
      <span>Proximo descanso será longo</span>
    </b>
  ),
};  
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
