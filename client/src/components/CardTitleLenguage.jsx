export function CardTitleLenguage ({ image, text }) {
  return (
    <div className='container-header'>
      <img src={image} className='icon-lenguage' alt='image logo of lenguage' />
      <p className='title'>{text}</p>
    </div>
  )
}