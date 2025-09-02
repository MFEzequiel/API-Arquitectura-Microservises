import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import { Home } from './components/Home'
import { MainContent } from './components/RenderContainerPage'
import { Header } from './components/Header'
import './css/App.css'

function App () {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<MainContent />} />
          <Route path='/:name/:subName' element={<MainContent />} />
        </Routes>
      </main>
    </>
  )
}

export default App
