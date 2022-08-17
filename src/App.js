import Card from './components/Card';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';



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
    {cartOpened && (<Drawer items = {cartItems} onClose= {() => setCartOpened(false)} onRemove={onRemoveItem}/>
    )}
   
    <Header onClickCart = {() => setCartOpened(true)}/>
    {/* <Route path="/" exact>
            Это тестовая

    </Route> */}

          

    
    <div className= "content  p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search" />
        {searchValue && ( 
        <img  
        onClick ={() => setSearchValue('')} 
        className="clear cu-p" 
        src ="img/btn-remove.svg " 
        alt="Clear"
        />
        )}
        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
        .filter((item) => item.title.toLowerCase().includes(searchValue))
        .map((item, index) => ( 
          <Card 
          key = {index}
          title ={item.title}
          price={item.price} 
          imageUrl={item.imageUrl}
          onFavorite = {(obj) => onAddToFavorite(obj)}
          onPlus = {(obj) => onAddToCart(obj)}
          />
        ))}
      </div>
     
    </div>
    </div>
  );
}

export default App;
