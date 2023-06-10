import { UseFormRegister } from 'react-hook-form'
import * as S from './styles'
import { Cycle } from '../../../../@types/Cycle'
import { NewCycleFormData } from '../../validation'

type NewCycleFormProps = {
  activeCycle: Cycle | undefined
  register: UseFormRegister<NewCycleFormData>
}

export function NewCycleForm({ activeCycle, register }: NewCycleFormProps) {
  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </S.FormContainer>
  )
}
