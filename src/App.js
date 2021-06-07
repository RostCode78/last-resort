import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Admi from './components/admi/Admi';
import Catalogue from './components/catalogue/Catalogue';
import Login from './components/login/Login';
import ObjectView from './components/objectView/ObjectView';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sobre-nosotros" component={About}/>
        <Route exact path="/admi" component={Admi}/>
        <Route exact path="/catalogo" component={Catalogue}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/contacto" component={Contact}/>
        <Route exact path="/vista-de-objeto" component={ObjectView}/>
      </Switch>
    </Router>
  );
}

export default App;
