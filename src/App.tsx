import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ApiCallTest } from "./pages/ApiCallTest"
import { Contact } from "./pages/Contact"
import { Content } from "./pages/Content"
import { Home } from "./pages/Home"
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apicall" element={<ApiCallTest />} />

      </Routes>


      <Footer></Footer>
    </>
  )
}

export default App
