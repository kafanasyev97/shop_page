const HeaderPages = () => {
  return (
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
  )
}

export default HeaderPages
