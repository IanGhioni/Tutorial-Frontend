import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HTML from './pages/html/html-explicado.jsx'
import CSS from './pages/css/css-explicado.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/html-explicado' element={<HTML/>} />
      <Route path='/css-explicado' element={<CSS/>} />
    </Routes>
  )
}