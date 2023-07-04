import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer"
// import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    <Header />
      <header>
        <main className='py-3'>
          <Container>
            <Outlet />
          </Container>
        </main>
      </header>
      <Footer />
    </>
  )
}

export default App