import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <main className='main'>Main</main>
      </Container>
    </Wrapper>
  );
}

export default App;
