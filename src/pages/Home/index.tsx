import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContaier,
  HomeContainer,
  Separator,
} from './style'

export default function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContaier>
          <label>Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContaier>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} color="#000" />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
