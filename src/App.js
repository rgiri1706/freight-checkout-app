import './App.css';
import HomePage from './pages/HomePage/homepage';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import Checkout from './pages/checkout/checkout.component';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
    </div>
  );
}

export default App;
