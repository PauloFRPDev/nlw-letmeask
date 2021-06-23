import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthCountextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthCountextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthCountextProvider>
    </BrowserRouter>
  );
}

export default App;
