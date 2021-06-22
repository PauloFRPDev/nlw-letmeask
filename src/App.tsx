import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthCountextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthCountextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthCountextProvider>
    </BrowserRouter>
  );
}

export default App;
