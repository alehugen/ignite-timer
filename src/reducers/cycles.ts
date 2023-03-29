export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedData?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUT_CURRENT_CYCLE = 'INTERRUT_CURRENT_CYCLE',
  TAG_CURRENT_CYCLE_FINISHED = 'TAG_CURRENT_CYCLE_FINISHED',
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.INTERRUT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedData: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    case ActionTypes.TAG_CURRENT_CYCLE_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
