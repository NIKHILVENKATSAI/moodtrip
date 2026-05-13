import Calm from "./pages/Calm"
import Romantic from "./pages/Romantic"
import Adventure from "./pages/Adventure"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Lonely from "./pages/Lonely"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/lonely" element={<Lonely />} />

        <Route path="/calm" element={<Calm />} />

<Route path="/romantic" element={<Romantic />} />

<Route path="/adventure" element={<Adventure />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App