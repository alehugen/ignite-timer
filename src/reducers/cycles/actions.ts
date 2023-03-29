import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUT_CURRENT_CYCLE = 'INTERRUT_CURRENT_CYCLE',
  TAG_CURRENT_CYCLE_FINISHED = 'TAG_CURRENT_CYCLE_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  }
}

export function tagCurrentCycleAction() {
  return {
    type: ActionTypes.TAG_CURRENT_CYCLE_FINISHED,
  }
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUT_CURRENT_CYCLE,
  }
}
