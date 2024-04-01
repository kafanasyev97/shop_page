const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__line"></div>
      <div className="footer__connection">
        <div className="footer__connection-contacts">
          <div className="footer__connection-brands">
            <img src="./public/logo-big.svg" alt="logo" />
            <img
              className="footer__connection-compo"
              src="./public/compo-big.svg"
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
      <div className="footer__line"></div>
      <div className="footer__categories">
        <div className="footer__categories-block">
          <p>Женщинам</p>
          <ul>
            <li>
              <p>Одежда</p>
            </li>
            <li>
              <p>Обувь</p>
            </li>
            <li>
              <p>Аксессуары</p>
            </li>
            <li>
              <p>Белье</p>
            </li>
            <li>
              <p>Bra fitting</p>
            </li>
          </ul>
        </div>
        <div className="footer__categories-block">
          <p>Мужчинам</p>
          <ul>
            <li>
              <p>Одежда</p>
            </li>
            <li>
              <p>Обувь</p>
            </li>
            <li>
              <p>Аксессуары</p>
            </li>
            <li>
              <p>Белье</p>
            </li>
          </ul>
        </div>
        <div className="footer__categories-block">
          <p>Детям</p>
          <ul>
            <li>
              <p>Одежда</p>
            </li>
            <li>
              <p>Обувь</p>
            </li>
            <li>
              <p>Аксессуары</p>
            </li>
            <li>
              <p>Белье</p>
            </li>
            <li>
              <p>Игрушки</p>
            </li>
            <li>
              <p>Малыши</p>
            </li>
          </ul>
        </div>
        <div className="footer__categories-block">
          <p>Виды спорта</p>
          <ul>
            <li>
              <p>Велоспорт</p>
            </li>
            <li>
              <p>Туризм</p>
            </li>
            <li>
              <p>Тренажеры и фитнес</p>
            </li>
            <li>
              <p>Командные виды спорта</p>
            </li>
            <li>
              <p>Самокаты</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__line"></div>

      <div className="footer__about">
        <ul className="footer__about-us">
          <li>
            <img src="public/pdf.svg" alt="PDF" />
            <p>PDF презентация</p>
          </li>
          <li>
            <img src="public/video.svg" alt="video" />
            <p>Видео инструкция</p>
          </li>
          <li>
            <img src="public/FAQ.svg" alt="FAQ" />
            <p>FAQ</p>
          </li>
          <li>
            <img src="public/YouTube.svg" alt="YouTube-icon" />
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
            <img src="./public/logo-grey.svg" alt="logo" />
            <img
              className="footer__about-compo"
              src="public/compo-grey.svg"
              alt="compo"
            />
          </div>
          <h6>Разработка платформы</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer
