import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Form from './Components/Form/Form';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <About></About> */}
        <Switch>
          <Route exact path='/'>
            <About></About>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/form'>
            <Form></Form>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>

    </div >
  );
}

export default App;
