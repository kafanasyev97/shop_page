const FooterAbout = () => {
  return (
    <div className="footer__about">
      <ul className="footer__about-us">
        <li>
          <img src="/pdf.svg" alt="PDF" />
          <p>PDF презентация</p>
        </li>
        <li>
          <img src="/video.svg" alt="video" />
          <p>Видео инструкция</p>
        </li>
        <li>
          <img src="/FAQ.svg" alt="FAQ" />
          <p>FAQ</p>
        </li>
        <li>
          <img src="/YouTube.svg" alt="YouTube-icon" />
          <p className="footer__about-us-youtube">Мы на YouTube</p>
        </li>
        <li>
          <p>Политика конфиденциальности </p>
          <p>Лицензионное соглашение</p>
        </li>
      </ul>
      <p>
        Настоящая Политика обработки персональных данных разработана в
        соответствии с Конституцией Российской Федерации, Трудовым кодексом
        Российской Федерации, Гражданским кодексом Российской Федерации,
        Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
        информационных технологиях и о защите информации",
      </p>
      <div className="footer__about-development">
        <div className="footer__about-logos">
          <img src="/logo-grey.svg" alt="logo" />
          <img
            className="footer__about-compo"
            src="/compo-grey.svg"
            alt="compo"
          />
        </div>
        <h6>Разработка платформы</h6>
      </div>
    </div>
  )
}

export default FooterAbout
