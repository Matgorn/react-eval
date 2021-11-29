import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { About, Home, Users, User } from './screens';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<User />} />
          </Route>

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
