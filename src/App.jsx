import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { styled } from "styled-components";
import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;


function App() {
  return (
    <Container>
      {/* <Navbar /> */}
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test />
    </Container>
  );
}

export default App;
