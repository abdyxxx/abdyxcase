import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import { CssBaseline } from '@mui/material'
import Main from "./main/Main";
import Cart from "./cart/Cart";
import MadeCases from './main/madeCases/MadeCases'
import { setItemsToDispatch } from "./redux/cartSlice";
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useEffect } from "react";

function App() {
  let dispatch = useDispatch();
  let productsState = useSelector(state => state)

  useEffect(() => {
    console.log('state', productsState)
    dispatch(setItemsToDispatch());
  }, [])
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/made-cases" element={<MadeCases />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
