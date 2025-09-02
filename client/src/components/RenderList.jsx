import { cl } from '@/utils/logger'
import { NavLink } from 'react-router-dom'

export function RenderList ({ list }) {
  return (
    <ul className='list'>
      {list.map(el => (
        <li key={el.id}>{el.text}</li>
      ))}
    </ul>
  )
}

export function RenderListOrden ({ listOR }) {
  return (
    <ol className='listOrden'>
      {listOR.map(el => (
        <li key={el.id}>{el.text}</li>
      ))}
    </ol>
  )
}

export function RenderListLink ({ listLink }) {
  return (
    <>
      {
        listLink.map(el => (
          <div className='container-list-link'>
            <p key={el.id} className='subTitle'>
              ° {el.subTitle}
            </p>
            <ul className="listLink">
              <li className="listLink-item">
                <NavLink className="listLink-itme-link">{el.text}</NavLink>
              </li>
            </ul>
            </div>
        ))
      }
    </>
  )
}
export function RenderListLinkList ({ listLink }) {
  return (
    <>
      {
        listLink.map(el => (
          <div className='container-list-link'>
            <p key={el.id} className='subTitle'>
              ° {el.subTitle}
            </p>
            <ul className="listLink-list">
              {
                el.links ? el.links.map(el2 => (
                  <li className="listLink-item" key={el2.id}>
                    <NavLink key={el2.id} className="listLink-item-link" to={el2.link}>{el2.text}</NavLink>
                  </li>
                )) : ''
              }
            </ul>
            </div>
        ))
      }
    </>
  )
}
