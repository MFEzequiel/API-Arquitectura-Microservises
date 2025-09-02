import { CodEditor } from './CodeEditor'
import contentJson from '../json/responce'
import { useState } from 'react'
import { cl } from '../utils/logger'

export function Home () {
  const [content, setContent] = useState(contentJson)

  return (
    <section className='section-home'>
      {content.html.content[0].html.contentPage[2].code && (
        <CodEditor
          code={content.html.content[0].html.contentPage[2].code}
          language={content.html.content[0].html.contentPage[2].language}
        />
      )}
    </section>
  )
}
