
function Header () {
    return (
<header className ="d-flex justify-between align-center p-40">
      <div className ="d-flex aliign-center">
        <img width ={40} height = {40} src = "/img/logo.png"/>
        <div>
        <h3 className="text-uppercase">
          React Sneakers
        </h3>
        <p className="oppacity-5">Maгазин лучших кроссовок</p>
      </div>
      </div>
      <ul className = "d-flex">
        <li className = "mr-30">
        <img width={18} height={18} src = "/img/vector.svg"/>
          <span>1505 руб.</span>
          </li>
      <li>
      <img width ={18} height = {18} src="/img/union.svg"/> 
         
        </li>
      </ul>
    </header>
    );
}
export default Header;