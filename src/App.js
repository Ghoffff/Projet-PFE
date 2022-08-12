import Navbar from "./Navbar"
import Superviseurs from "./pages/Espace superviseur/Superviseurs"
import Home from "./pages/Espace home/Home"
import Administration from "./pages/Esapce administartion/Administration"
import Jury from "./pages/Espace Jury/Jury"
import Fiche from "./pages/fiche note/fiche"
import PV from "./pages/Procès-Verbal/Pv"



import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/administartion" element={<Administration />} />
          <Route path="/superviseurs" element={<Superviseurs />} />
          <Route path="/jury" element={<Jury />} />
          <Route path="/pages/fiche%20note/fiche" element={<Fiche/>}/>
        </Routes>
      </div>
      <PV />
    </>
  )
}

export default App
