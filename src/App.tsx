import styled from "styled-components";

import { Footer, Header, Main } from "./components";

const Root = styled.div`
  background-color: #05336b;
  background-image: linear-gradient(#113278 9%, #70a2a8);
`;

function App() {
  return (
    <Root>
      <Header />
      <Main />
      <Footer />
    </Root>
  );
}

export default App;
