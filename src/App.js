import { useAuth } from './context/authContext';
import Wrapper from './components/Wrapper';
import LoggedInRoutes from './routes/LoggedInRoutes';
import LoggedOutRoutes from './routes/LoggedOutRoutes';

function App() {
  const { user } = useAuth();
  return <Wrapper>{user ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Wrapper>;
}

export default App;
