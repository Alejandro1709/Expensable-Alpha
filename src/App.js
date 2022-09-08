import Container from './components/Container';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Container>
        <aside className='sidebar'>Sidebar</aside>
        <main className='main'>Main</main>
      </Container>
    </Wrapper>
  );
}

export default App;
