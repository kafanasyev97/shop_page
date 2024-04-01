import FooterAbout from './FooterAbout'
import FooterCategories from './FooterCategories'
import FooterContacts from './FooterContacts'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__line"></div>
      <FooterContacts />
      <div className="footer__line"></div>
      <FooterCategories />
      <div className="footer__line"></div>
      <FooterAbout />
    </footer>
  )
}

export default Footer
