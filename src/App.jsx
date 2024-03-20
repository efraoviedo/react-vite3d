import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { styled } from "styled-components";
import Test from "./components/Test";
import Octaedrohexagonal from "./components/Octaedrohexagonal";

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

const Section = styled.div`
  height: 50vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    padiing-left: 20;
    padiing-top: 0;
    margin-left: 20;
    margin-top: 0;
  }
 ;
`;

function App() {
  return (
    <Container>
      {/* <Navbar /> */}
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Section>
        <Test />
        <Octaedrohexagonal />
      </Section>
    </Container>
  );
}

export default App;
