// import needed components
import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Header/>
      <main className='background-container'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App;