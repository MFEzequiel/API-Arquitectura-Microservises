import { NavLink, useParams } from 'react-router-dom'
import { cl } from '@/utils/logger'

export function Sidebar ({ link }) {
  return (
    <nav className='navigation'>
      <ul className='navigation-subMenu'>
        {link?.map(el => (
          <li key={el.id} className='navigation-subMenu-item'>
            <NavLink to={el.link} className={'subMenu-item-link'}>
              {el.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ButtonTo ({ list, onHandleClick }) {
  cl(list)
  return (
    <>
      {list.map(el => (
        <button key={el.id} onClick={() => onHandleClick(el.id)}>
          {el.text}
        </button>
      ))}
    </>
  )
}
