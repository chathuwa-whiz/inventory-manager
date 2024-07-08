import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Shared/Layout";
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Products/Products";
import Stock from "./Stock/Stock";
import Suppliers from "./Suppliers/Suppliers";
import Category from "./Category/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Dashboard /> }/>
          <Route path="products" element={ <Products /> } />
          <Route path="stock" element={ <Stock /> } />
          <Route path="suppliers" element={ <Suppliers /> } />
          <Route path="category" element={ <Category /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
