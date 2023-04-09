
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLayout from "./components/layout/user"
import Home from "./pages/home"
import ProductDetail from "./pages/productdetail"
import AdminLayout from "./components/layout/admin"
import Dashboard from "./pages/admin"
import ProductUpdate from "./pages/productupdata"
// import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Signin from "./pages/signin"


function App() {
  return <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
     <Route path='/signin' element={<Signin/>}/>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='product/:id' element={<ProductUpdate/>}/>
      </Route>
    </Routes>


  </BrowserRouter>

}

export default App
