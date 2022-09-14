
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';





function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([ ]);
  const [favorites, setFavorites] = React.useState([ ]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://62f72b81ab9f1f8e89f9780a.mockapi.io/cart');
      const favoritesResponse = await  axios.get('https://62f72b81ab9f1f8e89f9780a.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://62f72b81ab9f1f8e89f9780a.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);
  

const onAddToCart = (obj) => {
  if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
  axios.delete(`https://62f72b81ab9f1f8e89f9780a.mockapi.io/cart${obj.id}`); 
  setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
  } else {
  axios.post('https://62f72b81ab9f1f8e89f9780a.mockapi.io/cart', obj);
  setCartItems((prev) => [... prev, obj]);
  }
};

const onRemoveItem = (id) => {
  axios.delete(`https://62f72b81ab9f1f8e89f9780a.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const onAddToFavorite = async (obj) => {
try {
  if (favorites.find((favObj) => favObj.id === obj.id)) {
    axios.delete(`https://62f72b81ab9f1f8e89f9780a.mockapi.io/favorites/${obj.id}`);
  } else {
   const { data } = await axios.post('https://62f72b81ab9f1f8e89f9780a.mockapi.io/favorites/', obj);
    setFavorites((prev) => [... prev, data]);
  }
} catch (error) {
  alert('Не удалось добавить в фавориты');
}
};

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};


  return (
    <AppContext.Provider value={{ items, cartItems,favorites  }}>
      <div className="wrapper clear">
    {cartOpened && (
      <Drawer items = {cartItems} onClose= {() => setCartOpened(false)} onRemove={onRemoveItem}/>
      )}
    <Header onClickCart = {() => setCartOpened(true)}/>
    <Routes>
    <Route  path="/"  element={
    <Home
    items={items}
    cartItems={cartItems}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    onChangeSearchInput={onChangeSearchInput}
    onAddToFavorite={onAddToFavorite}
    onAddToCart={onAddToCart}
    isLoading={isLoading}
    />} />                
        </Routes> 
        <Routes>


 <Route  path="/favorites"  element={<Favorites
  onAddToFavorite={onAddToFavorite}
 />} />                
        </Routes> 
    </div>
    </AppContext.Provider>
  );
}

export default App;
