import { useAuth } from './context/authContext';
import Wrapper from './components/Wrapper';
import LoggedInRoutes from './routes/LoggedInRoutes';
import LoggedOutRoutes from './routes/LoggedOutRoutes';

function App() {
  const { user } = useAuth();

  // lol
  return (
    <Wrapper>
      {user ? <LoggedInRoutes user={user} /> : <LoggedOutRoutes />}
    </Wrapper>
  );
}

export default App;
