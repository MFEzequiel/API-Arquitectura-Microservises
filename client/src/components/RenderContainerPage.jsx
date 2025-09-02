import { useParams } from 'react-router-dom'
import { cl } from '@/utils/logger'
import { Sidebar } from './Sidebar'
import { useDinamicPage } from '@/hoocks/useDinamicContent'
import { ContentPage } from './RenderContentPage'

export function MainContent () {
  const { name } = useParams()
  const { icon, content, sidebar } = useDinamicPage({ name })
  
  const isIcon = icon && icon.url ? icon : ''
  const isContent = content ? content : []
  const isSidebar = sidebar ? sidebar : []
  
  return (
    <>
      <section className='container-page'>
        <div className='sidebar'>
          <Sidebar link={isSidebar} />
        </div>
        <ContentPage image={isIcon} content={isContent} name={name} />
      </section>
    </>
  )
}
