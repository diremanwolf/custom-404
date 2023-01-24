import { Route, Routes } from 'react-router-dom';

import './assets/icons-monkey/see-monkey.webp';
import './assets/icons-monkey/hear-monkey.webp';
import './assets/icons-monkey/speak-monkey.webp';

import Home from './pages/home/home.page';
import Menu from './pages/menu/menu.page';
import Cart from './pages/cart/cart.page';

import Navigation from './components/navigation/navigation.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='menu' element={<Menu />} />
      </Route>
    </Routes>
  )
}

export default App;