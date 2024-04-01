const FooterContacts = () => {
  return (
    <div className="footer__connection">
      <div className="footer__connection-contacts">
        <div className="footer__connection-brands">
          <img src="/logo-big.svg" alt="logo" />
          <img
            className="footer__connection-compo"
            src="/compo-big.svg"
            alt="compo"
          />
        </div>
        <div className="footer__connection-phone-email">
          <div className="footer__connection-item">
            <h5>8 800 841-95-95</h5>
            <p>Служба поддержки</p>
          </div>
          <div className="footer__connection-item">
            <h5>support@sport.ru</h5>
            <p>Служба поддержки</p>
          </div>
        </div>
      </div>
      <div className="footer__connection-pages">
        <h5>Вакансии</h5>
        <h5>Блог</h5>
        <h5>Акции</h5>
        <button className="footer__connection-button">Предложить идею</button>
      </div>
    </div>
  )
}

export default FooterContacts
