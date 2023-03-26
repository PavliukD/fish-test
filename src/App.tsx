import styled from "styled-components";

import { Route, Routes } from 'react-router';

import { Main } from "./pages/main";
import { Add } from "./pages/add";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { fetchProducts } from "./redux/operations";

import { Header } from "./components/header";

const Title = styled.h1`
 margin: 0;
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  outline: 1px solid tomato;
  padding: 20px;
`

function App() {

  const dispatch = useAppDispatch() 

  useEffect(() => {
    dispatch(fetchProducts())
  })

  return (
    <Container>
        <Title>This is my awesome test app</Title>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="new-product" element={<Add/>} />
        </Routes>
    </Container>
  );
}

export default App;
