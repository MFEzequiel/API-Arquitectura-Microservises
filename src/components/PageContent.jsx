import { useEffect, useState } from 'react'
import { CodEditor } from './CodeEditor'
import { RenderList, RenderListLinkList } from './RenderList'
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
          {/* {el.title && (
            <h2 key={el.id} className='title'>
              {el.title}
            </h2>
          )} */}
          {el.subTitle && (
            <p key={el.id} className='subTitle'>
              {el.text}
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
          {el.list && <RenderList list={el.list} />}
          {el.listLink && <RenderListLinkList listLink={el.listLink} />}
        </>
      ))}
    </>
  )
}
