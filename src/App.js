import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Header />
    <main className= "py-3" >
    <Container>
    <HomeScreen />
    </Container>
    
    </main>
    <Footer />
    </Router>
  );
}

export default App;
