import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/car/:name" component={Detail} />
    </HashRouter>
  );
}

export default App;
