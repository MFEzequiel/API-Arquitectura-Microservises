import { NavLink } from 'react-router-dom'
import { DarkLight } from './svg/darkLight'
import { useTheme } from '../hoocks/useTheme'

function Navigation ({ onChangeTheme }) {
  return (
    <nav className='header-navigation'>
      <ul className='navigation-menu'>
        <li className='menu-item'>
          <NavLink className={'item-link'} to={'/'}>
            Inicio
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink className={'item-link'} to={'/html'}>
            HTML
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink className={'item-link'} to={'/css'}>
            CSS
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink className={'item-link'} to={'/javascript'}>
            JavaScript
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink className={'item-link'} to={'/sqlite'}>
            SQLite
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink className={'item-link'} to={'/proyect'}>
            Proyect
          </NavLink>
        </li>
      </ul>
      <button className='button-theme' onClick={onChangeTheme}>
        <DarkLight />
      </button>
    </nav>
  )
}

export function Header () {
  const { handleChangeTheme } = useTheme()

  return (
    <header className='header'>
      <Navigation onChangeTheme={handleChangeTheme} />
    </header>
  )
}
