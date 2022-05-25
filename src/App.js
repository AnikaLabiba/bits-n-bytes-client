import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio'
import Login from './Pages/Login/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/UserDash/AddReview';
import MyOrders from './Pages/Dashboard/UserDash/MyOrders';
import AddProduct from './Pages/Dashboard/AdminDash/AddProduct';
import ManageProducts from './Pages/Dashboard/AdminDash/ManageProducts';
import ManagesOrders from './Pages/Dashboard/AdminDash/ManagesOrders';
import AllUsers from './Pages/Dashboard/AdminDash/AllUsers';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='orders' element={<MyOrders />}></Route>
          <Route path='addProduct' element={<AddProduct />}></Route>
          <Route path='manageProducts' element={<ManageProducts />}></Route>
          <Route path='manageOrders' element={<ManagesOrders />}></Route>
          <Route path='allUsers' element={<AllUsers />}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
