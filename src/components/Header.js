import {Link} from 'react-router-dom';

function Header (props) {
    return (
<header className ="d-flex justify-between align-center p-40">
      <div className ="d-flex aliign-center">
      <Link to="/favorites">
        <img width ={40} height = {40} src = "/img/logo.png" alt ="logotype "/>
        <div>
        <h3 className="text-uppercase">
          React Sneakers
        </h3>
        <p className="oppacity-5">Maгазин лучших кроссовок</p>
      </div>
      </Link>
      </div>
      <ul className = "d-flex">
        <li onClick={props.onClickCart} className = "mr-30 cu-p">
        <img width={18} height={18} src = "/img/vector.svg" alt ="Корзина"/>
          <span>1505 руб.</span>
          </li>
          <li className = "mr-20 cu-p">
            <Link to="/favorites">
              <img width ={18} height = {18} src="/img/heart.svg" alt = "Закладки"/>
              </Link>
        </li>
      <li >
      <img width ={18} height = {18} src="/img/union.svg" alt = "Пользователь"/> 
         
        </li>
      </ul>
    </header>
    );
}
export default Header;