import { useContext } from 'react'
import { SumContext } from '../../../App'

const HeaderProfile = () => {
  const { sum } = useContext(SumContext)

  return (
    <div className="head">
      <div className="head__logos">
        <img src="/logo.svg" alt="logo" />
        <img className="head__logos-img-2" src="/compo.svg" alt="compo" />
      </div>
      <div className="head__menu">
        <img src="/MENU.svg" alt="menu" />
        <button className="head__menu-button">Меню</button>
      </div>
      <div className="head__search">
        <input
          className="head__search-input"
          type="text"
          placeholder="Название запроса"
        />
        <img src="/close.svg" alt="close" />
        <img src="/search.svg" alt="search" />
      </div>
      <div className="head__bell">
        <img src="/bell.svg" alt="bell" />
      </div>
      <div className="head__line"></div>
      <div className="head__like">
        <img src="/heart.svg" alt="like" />
      </div>
      <button className="head__basket">
        <img src="/basket.svg" alt="basket" />
        <p className="head__basket-text">{sum + '₽'}</p>
      </button>
      <div className="head__user">
        <img src="/user.svg" alt="user" />
        <h6 className="head__user-name">Ермаков Е.</h6>
        <img src="/arrow-down.svg" alt="arrow-down" />
      </div>
    </div>
  )
}

export default HeaderProfile
