import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/header-logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
