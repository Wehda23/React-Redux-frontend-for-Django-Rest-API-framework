import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { HashRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import EditUserScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import EditProductScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id/" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/admin/user/:id/edit" component={EditUserScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={EditProductScreen}
            />

            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/productlist" component={ProductListScreen} />
            <Route path="/admin/orderlist" component={OrderListScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
