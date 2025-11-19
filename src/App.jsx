import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HTML from './pages/html/html'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/html-explicado' element={<HTML/>} />
    </Routes>
  )
}