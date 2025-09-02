import { useParams } from 'react-router-dom'
import { cl } from '@/utils/logger'
import { Sidebar } from './Sidebar'
import { useDinamicPage } from '@/hoocks/useDinamicContent'
import { ContentPage } from './RenderContentPage'

export function MainContent () {
  const { name } = useParams()
  const { icon, content, sidebar } = useDinamicPage({ name })

  return (
    <>
      <section className='container-page'>
        <div className='sidebar'>
          <Sidebar link={sidebar} />
        </div>
        <ContentPage image={icon.url} content={content} name={name} />
      </section>
    </>
  )
}
