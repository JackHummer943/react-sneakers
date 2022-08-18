
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([ ]);
  const [favorites, setFavorites] = React.useState([ ]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {


  axios.get('https://62f72b81ab9f1f8e89f9780a.mockapi.io/items').then((res) => {
    setItems(res.data);
  });
  axios.get('https://62f72b81ab9f1f8e89f9780a.mockapi.io/cart').then((res) => {
    setCartItems(res.data);
  });
  }, []);

const onAddToCart = (obj) => {
  axios.post('https://62f72b81ab9f1f8e89f9780a.mockapi.io/cart', obj);
 setCartItems((prev) => [... prev, obj]);
};

const onRemoveItem = (id) => {
  axios.delete(`https://62f72b81ab9f1f8e89f9780a.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const onAddToFavorite = (obj) => {
  axios.post('https://62f72b81ab9f1f8e89f9780a.mockapi.io/favorites', obj);
 setFavorites((prev) => [... prev, obj]);
};

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};


  return (
    <div className="wrapper clear">
    {cartOpened && (
    <Drawer items = {cartItems} onClose= {() => setCartOpened(false)} onRemove={onRemoveItem}/>
    )}
   
    <Header onClickCart = {() => setCartOpened(true)}/>
    <Routes>
 <Route  path="/favorites"  element={<Favorites/>} />                
        </Routes> 
    </div>
  );
}

export default App;
