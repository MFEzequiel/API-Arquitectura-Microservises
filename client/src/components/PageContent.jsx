import { useEffect, useState } from 'react'
import { CodEditor } from './CodeEditor'
import { RenderList, RenderListLinkList, RenderListOrden } from './RenderList'
import { cl } from '@/utils/logger'

export function PageContent ({ content }) {
  // const [ pageContent, setPageContent ] = useState([])

  // useEffect(() => {
  //   setPageContent(content)
  // }, [])

  return (
    <>
      {content?.map(el => (
        <>
          {el.title && (
            <p key={el.id} className='title'>
              {el.title}
            </p>
          )}
          {el.subTitle && (
            <p key={el.id} className='subTitle'>
              {el.subTitle}
            </p>
          )}
          {el.text && (
            <p key={el.id} className='paragraph'>
              {el.text}
            </p>
          )}
          {el.code && (
            <CodEditor key={el.id} code={el.code} language={el.language} />
          )}
          {el.list && <RenderList key={el.id} list={el.list} />}
          {el.listOR && <RenderListOrden key={el.id} listOR={el.listOR} />}
          {el.listLink && <RenderListLinkList key={el.id} listLink={el.listLink} />}
        </>
      ))}
    </>
  )
}
