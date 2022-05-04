import { Routes, Route } from "react-router-dom";

import { Products } from '../components/PRODUCTS/ProductsDashboard';
import { About } from "../components/ABOUT/About"
import { Home } from '../components/HOME/Home';
import { SingleProductList } from '../components/SingleProduct';
import SignInSide from './../components/Login';
import AddressForm from './../components/Checkout/AddressForm';
import Checkout from "../components/Checkout/Checkout";

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path='/product/:id' element={<SingleProductList />} />
                <Route path="/login" element={<SignInSide />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </>
    )
}