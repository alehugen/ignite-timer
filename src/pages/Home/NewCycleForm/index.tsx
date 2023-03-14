import { FormContaier, MinutesAmountInput, TaskInput } from './style'
import { useContext } from 'react'
import { CyclesContext } from '..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContaier>
      <label>Vou Cronometrar a</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Nome do Tarefa"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Brelshaza G6"></option>
      </datalist>

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContaier>
  )
}
