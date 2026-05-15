import { BrowserRouter, Routes, Route } from "react-router-dom"

function Home() {
  return <h1>Home Page</h1>
}

function Lonely() {
  return <h1>Lonely Page 🌙</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/lonely" element={<Lonely />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App