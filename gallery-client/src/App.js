import "./App.css";
import { useState, useEffect } from "react";
import photos from "./photos.json";

function App() {
  const [master, setMaster] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [start, setStart] = useState(true);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {}, []);

  function Loading() {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Загружаю картины</p>
      </div>
    );
  }

  function StartPage() {
    function BlockAbout() {
      return (
        <>
          <div className="block select">
            <label className="text-name">О нас</label>
            <button
              className="block-close"
              onClick={() => {
                setAbout(false);
              }}
            ></button>
            <br />
            <br />
            Тут можно написать информацию о Галереи
          </div>
        </>
      );
    }

    function BlockContact() {
      return (
        <>
          <div className="block select">
            <label className="text-name">Контакты</label>
            <button
              className="block-close"
              onClick={() => {
                setContact(false);
              }}
            ></button>
            <br />
            <br />
            <li className="contact">
              Телефон: &#8194;&#8194;{" "}
              <a className="contact-a" href="tel:+7 (919) 770-92-90">
                <b>
                  <u>+7 (919) 770-92-90</u>
                </b>
              </a>
            </li>

            <li className="contact">
              Карты:&#8194; &#8194;{" "}
              <a
                className="contact-a"
                href="https://yandex.ru/maps/-/CDrXyLoD"
                target="_blank"
                rel="noreferrer"
              >
                <b>
                  {" "}
                  <u>Открыть Я.Карты</u>
                </b>
              </a>
            </li>

            <li className="contact">
              ВКонтакте:&#8194; &#8194;{" "}
              <a className="contact-a" href="vk.com" target="_blank">
                <b>
                  {" "}
                  <u>ссылка</u>
                </b>
              </a>
            </li>

            <li className="contact">
              Одноклассники:&#8194; &#8194;{" "}
              <a className="contact-a" href="ok.com" target="_blank">
                <b>
                  <u> ссылка</u>
                </b>
              </a>
            </li>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="block">
          <h1 className="block-header">Gallery</h1>
          <h4 className="block-under-header">Искусство и не только</h4>
          <button
            className="blcok-button"
            onClick={() => {
              setGallery(true);
              setStart(false);
            }}
          >
            Галерея картин
          </button>
          <button
            className="blcok-button"
            onClick={() => {
              setMaster(true);
              setStart(false);
            }}
          >
            Мастер классы
          </button>
          {contact ? (
            <BlockContact />
          ) : (
            <>
              <button className="blcok-button" onClick={() => setContact(true)}>
                Контакты
              </button>
            </>
          )}
          {about ? (
            <BlockAbout />
          ) : (
            <>
              <button className="blcok-button" onClick={() => setAbout(true)}>
                О нас
              </button>
            </>
          )}
        </div>
      </>
    );
  }

  function MasterPage() {
    function messageToWhats() {
      window.open(
        "https://wa.me/79153218754?text=Здравствуйте%2C+у+меня+есть+вопрос",
        "_blank"
      );
    }

    return (
      <>
        <div className="block">
          <button
            className="block-back"
            onClick={() => {
              setMaster(false);
              setStart(true);
            }}
          ></button>
          <h1 className="block-header mb15">Мастер-классы</h1>
          <div className="block text mb15">
            <li>Классические техники написания картин акварелью</li>
            <li>Абстракция алкогольными чернилами</li>
            <li>Акриловая живопись</li>
            <li>Основные техники работы с пастелью</li>
            <li>Занятия по рисованию для ребенка</li>
            <br />
            &#8212; Александра Алексеевна Шейко
            <button
              className="blcok-button black mt25 semi"
              onClick={() => messageToWhats()}
            >
              Запись
            </button>
            <button
              className="blcok-button black mt25 semi"
              onClick={() => messageToWhats()}
            >
              Подробнее
            </button>
          </div>
          <div className="block text">
            <label className="block-main-text">
              Мастер-классы по живописи и правополушарному рисованию.
              Преподаватель <br />
              &#8212; Ольга Яновна Доротти.
              <br />
              <br /> Художница родилась в г. Можайске. Закончила МПГУ" Институт
              Изящных Исскусств ".
              <br />
              <br />
              Является членом Союза Русских Художников. Пишет в разных
              техниках:&nbsp;
              <u>акварель</u>, <u>пастель</u>, <u>акрил</u>, <u>масло</u>.{" "}
              <br />
              <br />
              Занятия «с нуля» до «уверенного уровня»!
            </label>
            <button
              className="blcok-button black mt25"
              onClick={() => messageToWhats()}
            >
              Подробнее
            </button>
          </div>

          <button
            className="blcok-button "
            onClick={() => {
              setMaster(false);
              setStart(true);
            }}
          >
            Назад
          </button>
        </div>
      </>
    );
  }

  function nextPage() {
    console.log(page);
    if (page === 14) {
      setPage(1);
      return;
    }
    setPage(page + 1);
  }

  function backPage() {
    if (page === 1) return;
    setPage(page - 1);
  }
  async function updateData(data) {
    
  }

  async function editCard(id) {
    console.log("sada");
    photos[0].Author = "ttdsads";
    const jsonString = JSON.stringify(photos);
    updateData(jsonString);
  }

  function FiveCards() {
    let data = [];
    for (let i = page * 5 - 4; i < page * 5; i++) {
      data.push(
        <>
          <div className="block color mb15">
            <h1 className="block-header">{photos[i].Title}</h1>
            <h3 className="block-under-header">{photos[i].Author}</h3>
            <img
              className="block-photo"
              src={"./photos/output_" + i + ".jpg"}
            />

            <h3 className="block-under-header price">
              Цена: {photos[i].Price} руб.
            </h3>
            <button className="blcok-button" onClick={() => editCard(i)}>
              Подробнее
            </button>
          </div>
        </>
      );
    }

    return <>{data}</>;
  }

  function GalleryPage() {
    function createCards() {
      return <>{FiveCards()}</>;
    }

    return (
      <>
        <div className="block">
          <button
            className="block-back"
            onClick={() => {
              setGallery(false);
              setStart(true);
            }}
          ></button>
          <h1 className="block-header mb15">Картины</h1>

          {createCards()}

          <h3 className="block-header">Страница {page}</h3>
          <button
            className="blcok-button black mb15 semi"
            onClick={() => backPage()}
          >
            Предыдущая
          </button>
          <button
            className="blcok-button black mb15 semi"
            onClick={() => nextPage()}
          >
            Следующая
          </button>
          <button
            className="blcok-button"
            onClick={() => {
              setGallery(false);
              setStart(true);
            }}
          >
            Назад
          </button>
        </div>
      </>
    );
  }

  let content = <Loading />;

  if (start === true) {
    content = StartPage();
  }

  if (master === true) {
    content = MasterPage();
  }

  if (gallery === true) {
    content = GalleryPage();
  }

  return (
    <>
      <div className="app">{content}</div>
    </>
  );
}

export default App;
