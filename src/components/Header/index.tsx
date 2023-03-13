import { HeaderContainer } from './styles'

import LoaLogo from '../../assets/LOA_LOGO.png'
import { Timer, Scroll } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={LoaLogo} alt="Logo aplicação" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} color="#E1E1E6" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} color="#E1E1E6" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
