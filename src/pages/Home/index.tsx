import { Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

import {
  CountdownContainer,
  FormContaier,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './style'

export default function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContaier>
          <label>Vou Cronometrar a</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContaier>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={!task}>
          <Play size={24} color="#000" />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
