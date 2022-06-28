import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Form} />
          <Route exact path="/table" component={Table} />

        </>
      </Router>
    </div>
  );
}

export default App;
