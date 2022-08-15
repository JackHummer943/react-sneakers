
function Header (props) {
    return (
<header className ="d-flex justify-between align-center p-40">
      <div className ="d-flex aliign-center">
        <img width ={40} height = {40} src = "/img/logo.png" alt ="logotype "/>
        <div>
        <h3 className="text-uppercase">
          React Sneakers
        </h3>
        <p className="oppacity-5">Maгазин лучших кроссовок</p>
      </div>
      </div>
      <ul className = "d-flex">
        <li onClick={props.onClickCart} className = "mr-30 cu-p">
        <img width={18} height={18} src = "/img/vector.svg" alt ="Cart"/>
          <span>1505 руб.</span>
          </li>
      <li >
      <img width ={18} height = {18} src="/img/union.svg" alt = "User"/> 
         
        </li>
      </ul>
    </header>
    );
}
export default Header;