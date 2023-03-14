import { HandPalm, Play } from '@phosphor-icons/react'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './style'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormSchema = zod.object({
  task: zod.string().min(3, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1)
    .max(60, 'O invervalo precisa ser de 1 a 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export default function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCycle} type="button">
            <HandPalm size={24} color="#fcfafa" />
            Pausar
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={!task}>
            <Play size={24} color="#e9e3e3" />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
