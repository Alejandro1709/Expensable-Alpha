import { useState } from 'react';
import Wrapper from './components/Wrapper';
import LoggedInRoutes from './routes/LoggedInRoutes';
import LoggedOutRoutes from './routes/LoggedOutRoutes';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Wrapper>
      {user ? (
        <LoggedInRoutes user={user} setUser={setUser} />
      ) : (
        <LoggedOutRoutes />
      )}
    </Wrapper>
  );
}

export default App;
