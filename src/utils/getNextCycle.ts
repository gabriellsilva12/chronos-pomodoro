
export  function getNextCycle(currenctCycle: number) {
  return currenctCycle === 0 || currenctCycle === 8 ? 1 : currenctCycle + 1
}
