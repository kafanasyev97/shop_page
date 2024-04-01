const Header = () => {
  return (
    <header>
      <div className="head">
        <div className="head__logos">
          <img src="./public/logo.svg" alt="logo" />
          <img
            className="head__logos-img-2"
            src="./public/compo.svg"
            alt="compo"
          />
        </div>
        <div className="head__menu">
          <img src="./public/MENU.svg" alt="menu" />
          <button className="head__menu-button">Меню</button>
        </div>
        <div className="head__search">
          <input
            className="head__search-input"
            type="text"
            placeholder="Название запроса"
          />
          <img src="./public/close.svg" alt="close" />
          <img src="./public/search.svg" alt="search" />
        </div>
        <div className="head__bell">
          <img src="./public/bell.svg" alt="bell" />
        </div>
        <div className="head__line"></div>
        <div className="head__like">
          <img src="./public/heart.svg" alt="like" />
        </div>
        <div className="head__basket">
          <img src="./public/basket.svg" alt="basket" />
          <button className="head__basket-button">144 235₽</button>
        </div>
        <div className="head__user">
          <img src="./public/user.svg" alt="user" />
          <h6 className="head__user-name">Ермаков Е.</h6>
          <img src="./public/arrow-down.svg" alt="arrow-down" />
        </div>
      </div>
      <div className="section-line"></div>
      <nav className="nav">
        <ul className="nav__pages">
          <li>
            <h6>Мои заказы</h6>
          </li>
          <li>
            <h6>Сотрудники</h6>
          </li>
          <li>
            <h6>Шаблоны заказов</h6>
          </li>
          <li>
            <h6>Обращения</h6>
          </li>
        </ul>
        <ul className="nav__profile">
          <li>
            <div className="nav__profile-manager">
              <img src="./public/message.svg" alt="message" />
              <h6>Ваш менеджер</h6>
            </div>
          </li>
          <li>
            <div className="nav__profile-stocks">
              <img src="./public/percent.svg" alt="percent" />
              <h6>Акции</h6>
            </div>
          </li>
          <li>
            <h6>Блог</h6>
          </li>
        </ul>
      </nav>
      <div className="section-line"></div>
    </header>
  )
}

export default Header
