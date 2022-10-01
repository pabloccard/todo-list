import { HeaderContainer } from './styles'
import logo from '../../assets/todo-list-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
