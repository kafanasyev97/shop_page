import HeaderPages from './HeaderPages'
import HeaderProfile from './HeaderProfile'

const Header = () => {
  return (
    <header>
      <HeaderProfile />
      <div className="section-line"></div>
      <HeaderPages />
      <div className="section-line"></div>
    </header>
  )
}

export default Header
