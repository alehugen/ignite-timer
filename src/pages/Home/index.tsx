import { Play } from '@phosphor-icons/react'
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
  return (
    <HomeContainer>
      <form action="">
        <FormContaier>
          <label>Vou Cronometrar a</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="Nome do Tarefa"
          />

          <datalist id="task-suggestions">
            <option value="Brelshaza G6"></option>
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={1}
            max={60}
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

        <StartCountdownButton type="submit">
          <Play size={24} color="#000" />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
