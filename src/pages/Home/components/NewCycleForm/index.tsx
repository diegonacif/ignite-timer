import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      {activeCycle ? (
        <div className="active-task-title">{activeCycle.task}</div>
      ) : (
        <>
          <label htmlFor="taks">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="taks-suggestions"
            placeholder="Dê um noma para o seu projeto"
            {...register('task')}
          />

          <datalist id="taks-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={1}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </>
      )}
    </FormContainer>
  )
}
