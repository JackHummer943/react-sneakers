function Card() {
    return (
        <div className="card">
        <img width = {133} height = {112} src="/img/sneakers/4.jpg" alt =" "/>
        <h5>мужские кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
          <span>Цена:</span>
        <b>14 950 руб.</b>
        </div>
        <button className="button">
          <img width = {11} height = {11} src ="/img/plus.svg" alt="Plus"/>
        </button>
      </div>
       </div>
    )
}

export default Card;