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
            <p>Телефон: ххх-ххх</p>
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
        </div>
      </div>
    </>
  );
};

export default index;
