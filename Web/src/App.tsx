import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import { Osasco } from './pages/Osasco';
import { SaoPaulo } from './pages/SaoPaulo';
import { Home } from './pages/Home';

function App() {

  return (
    <div className="bg-gray-300 min-h-[100vh] w-[100%]">
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Osasco" element={<Osasco />} />
        <Route path="/SaoPaulo" element={<SaoPaulo />} />
      </Routes>

    </div>
  )
}

export default App
