import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([ {
    "title": "Мужские кроссовки Nike Blazzer Mid Suede",
    "price": "14 540",
    "imageUrl": "./img/sneakers/1.jpg"
   },
   {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": "16 540",
    "imageUrl": "./img/sneakers/2.jpg"
   }]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62f72b81ab9f1f8e89f9780a.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });
  }, []);
  return (
    <div className="wrapper clear">
    {cartOpened && <Drawer items = {cartItems} onClose= {() => setCartOpened(false)}/>}
    <Header onClickCart = {() => setCartOpened(true)}/>
    <div className= "content  p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search" />
        <input placeholder="Поиск..."></input>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((obj) =>( 
          <Card 
          title ={obj.title}
          price={obj.price} 
          imageUrl={obj.imageUrl}
          onClick = {() => console.log(obj)}
          />
        ))}
      </div>
     
    </div>
    </div>
  );
}

export default App;
