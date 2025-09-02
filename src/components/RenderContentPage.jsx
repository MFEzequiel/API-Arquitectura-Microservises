import { cl } from '@/utils/logger'
import { CardTitleLenguage } from './CardTitleLenguage'
import { PageContent } from './PageContent'
import { useParams } from 'react-router-dom'

export function ContentPage ({ image, content, name }) {
  const { subName } = useParams()
  const contentPage = content.find(el => el[subName])

  return (
    <div className='page-content'>
      <CardTitleLenguage image={image} text={name} />
      <section className='container-section'>
        {contentPage?.[subName]?.map(el => (
          <div className='container-content-text'>
            {el.contentPage?.map(el => (
              <>
                {el.subTitle && (
                  <h2 className='subTitle' key={el.id}>
                    {el.subTitle}
                  </h2>
                )}
                {el.text && <PageContent content={el.text} />}
              </>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}
