  import { Container} from 'react-bootstrap';
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import {Dashboard, Category, Product, Header, Footer} from './components/admin/Index'
  import Home from './components/Home';

  function App() {
    return (
      <BrowserRouter>
        <Container>
          <Header/>         
              <Routes>
              <Route exact path="/" component={Home} />

              </Routes>
          <Footer/>
        </Container>
      </BrowserRouter>
    );
  }

  export default App;
