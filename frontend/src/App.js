import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container, Row , Col} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
function App() {
  const router = createBrowserRouter([
    {
      element:<HomeScreen/>,
      path:'/',
    },
    {
      element:<ProductScreen/>,
      path:'/product/:id'
    }
  ])
  return (
    <>
    <Header/>
    <main>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
