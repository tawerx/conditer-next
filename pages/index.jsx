import Image from 'next/image';
import React from 'react';
import { Button } from 'react-scroll';
import { cakes } from '../cakes';
// const items = ['Торты', 'Пирожные', 'Пироги', 'Свадебные караваи', 'Булочные изделия'];
const items = ['Заказные торты'];
const infoAbout = [
  'На рынке с 2005 года',
  'Около 300 наименований тортов и пирожных',
  'Только свежие, натуральные и качественные продукты',
  'Торты на заказ',
  '3 года подряд учавствуем в конкурсе "Доверие потребителей"',
  'Высококвалифицированные специалисты',
  'Программа лояльности',
  'Реализуем продукцию по соседним облостям',
];

const index = () => {
  const [itemSelect, SetItemSelect] = React.useState(0);
  const [pageSelect, SetPageSelect] = React.useState(0);

  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const catalogRef = React.useRef(null);
  const contactsRef = React.useRef(null);

  return (
    <>
      <div className="wrapper">
        <div className="home" ref={homeRef}>
          <div className="info_home">
            <div className="text1">
              <h1>Кондтерский цех</h1>
              <h5>ИП Бурлакова Т.А.</h5>
              {/* <p>Мы занимаемся производством кондитерских изделий</p> */}
            </div>
            <div className="btnControl">
              <Button to="catalog" spy={true} smooth={true} duration={1000}>
                Каталог
              </Button>
              <Button to="about" spy={true} smooth={true} duration={1000}>
                О нас
              </Button>
              <Button to="contacts" spy={true} smooth={true} duration={1000}>
                Контакты
              </Button>
            </div>
          </div>
        </div>
        <div className="about" ref={aboutRef}>
          <h1>О нас</h1>
          <div className="about-icons">
            <ul>
              {infoAbout.map((text) => (
                <li key={text}>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="btnControl">
            <Button to="catalog" spy={true} smooth={true} duration={1000}>
              Каталог
            </Button>
          </div>
          {/* <div className="info_about">
            <div className="text2">
              <h1>О нас</h1>
              <p>
                Мы на рынке с 2005 года и готовы предложить Вам около 300 наименований тортов 🎂 и
                пирожных 🍰. Огромный выбор нашей продукции сделает неповторимым как простое
                чаепитие, так и любое Ваше торжество: свадьбу, день рождения, юбилей, новоселье,
                детский праздник. У нас Вы найдёте торты как на каждый день, так и изготовленные на
                заказ: свадебные , детские , корпоративные. Кондитеры высшего класса осуществят Вашу
                самую сладкую фантазию. Вы можете выбрать не только дизайн торта, но и внутреннее
                его содержание. Мы используем только свежие, натуральные и качественные продукты.
                Наши кондитеры постоянно повышают свое мастерство, участвуя в выставках, семинарах и
                мастер-классах, изучая и используя на практике новое сырье и новые технологии в
                изготовлении. Мы реализуем свою продукцию не только по городу Рязани и области, но и
                по соседним областям. Мы 3 года подряд принимаем участие в конкурсе «Доверие
                потребителей», чем удостоены дипломами. У нас отработана своя система скидок, в
                которой Вам найдется выгодный вариант, индивидуальный подход, конкурентоспособные
                цены. Мы ценим и уважаем каждого потребителя.❤️ Наши специалисты с радостью готовы
                вам помочь с выбором кондитерского изделия!
              </p>
            </div>
            <div className="btnControl">
              <Button to="catalog" spy={true} smooth={true} duration={1000}>
                Каталог
              </Button>
            </div>
          </div> */}
        </div>
        <div className="catalog" ref={catalogRef}>
          <div className="info_catalog">
            <h1>Каталог</h1>
            <div className="item_lists">
              <ul>
                {items.map((item, i) => (
                  <li
                    key={item}
                    className={itemSelect == i ? 'selected' : ''}
                    onClick={() => SetItemSelect(i)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="products">
            {cakes.map((file, i) => {
              if (pageSelect <= i && i < pageSelect + 8) {
                return (
                  <div key={file} className="product">
                    <Image
                      src={require(`../public/cakes/${file}`)}
                      alt="Заказной торт"
                      width={300}
                      height={300}
                    />
                    <p>Торт №{i + 1}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="page_count">
            <ul>
              {cakes.map(
                (_, i) =>
                  i % 8 == 0 && (
                    <li
                      key={i}
                      className={i == pageSelect ? 'selected' : ''}
                      onClick={() => SetPageSelect(i)}>
                      {i / 8 + 1}
                    </li>
                  ),
              )}
            </ul>
          </div>
        </div>
        <div className="contacts" ref={contactsRef}>
          <div className="contact-info">
            <h1>Контакты</h1>
            <p>Адрес: ул. 9-я линия д.18</p>
            <p>График работы: </p>
            <ul>
              <li> пн-пт: 8:00 - 19:00</li>
              <li> сб: 8:00 - 16:00</li>
              <li> вс: 8:00 - 19:00</li>
            </ul>
            <p>Телефон:</p>
            <ul>
              <li>+7 (491) 276-58-25</li>
              <li>+7 961 132-80-24</li>
            </ul>
            <p>E-mail: 1-lakomka@mail.ru</p>
          </div>
          <div className="contact-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A140c19d9c3cd15fa90bd9daa678e248e8370f7fcfb01565e1b89e9356ae77322&amp;source=constructor"
              width="365"
              height="305"
              frameborder="0"></iframe>
          </div>
        </div>
        <div className="footer">
          <p>2005-2023. Кондитерский цех ИП Бурлакова Т.А.</p>
          <a href="https://t.me/+3Sjk4jRFYJ82NjIy" target="_blank">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid">
              <g>
                <path
                  d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                  fill="#40B3E0"></path>
                <path
                  d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                  fill="#FFFFFF"></path>
                <path
                  d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                  fill="#D2E5F1"></path>
                <path
                  d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                  fill="#B5CFE4"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
