import React, { useState } from 'react';
import './App.css';
import photo_main from './img/photo_main.png';
import spider_cat from './img/spider_cat.png'
import heart from './img/heart_var_1.png';
import meme from './img/meme_var_2.png';
import purple from './img/purple_var_3.png';
import england_1920 from './img/england_1920_var_4.png';



function App() {
  const [greeting, setGreeting] = useState("");
  const [mood, setMood] = useState("");
  const [accent, setAccent] = useState("");
  const [image, setImage] = useState("");
  const [joke, setJoke] = useState("");
  const [isGreetingGenerated, setIsGreetingGenerated] = useState(false);

  const greetings = {
    "Дружнє": "Дружбанисько Даніііле,",
    "Смішне": "Величний сосок орангутанга,",
    "Агресивне": "Чуєш ти, блін, чувачела?!",
    "Офіційне": "Вельмишановне пане,"
  }

  const moods = {
    "Веселе": "Аххвпххаах, ти прикинь, хтось дійсно заїбався щоб цікаво привітати тебе з ДРчиком, а це значить що хтось тебе цінує)0)",
    "Сумне": "Плакали цілою маршруткою, на жаль, ти досі живеш і тобі вже {вік} років",
    "Здивоване": "Вааууу, а хто це в нас досі існує з сенсом життя на страждання, виходить?)",
    "Обурене": "Я не зрозумів, тобто ти реально чекав, що тут буде щось цікаве чи старанне? Радій навіть за lorem ipsum :)"
  }
  const accents = {
    "Грошах": "Звичайно головне що хочу побажати, так це грошей побільше, щоб прям з крану текли! Ну і взагалі воду не забувай пити, вода важлива.",
    "Дітях": "Дітей, дітей і побільше бажаю, чуваче. Вони такі прикальнясі, бігають, сміються, як пупси можуть не подобатись?!",
    "Кайфі": "Та затягнись нормально і все життя не таке вже погане. Та й сам гедоністичний підхід краще страждань. Чіл і все буде кул.",
    "Самореалізації": "Коли душа і тіло в гармонії процесу самореалізації - це неймовірна суміш. Майже як я і Макс)) Фокусуйся на тому, що важливе, інше підтягнеться."
  }

  const images = {
    "Сердечко": <img src={heart} alt='Сердечко' />,
    "Мем": <img src={meme} alt='Мем' />,
    "Фіолетова": <img src={purple} alt='Фіолетова' />,
    "Англія 1920-х": <img src={england_1920} alt='Англія 1920-х' />
  }

  const jokes = {
    "Шістнадцятковий": "d09dd0b020d187d0b0d18120d181d182d0b2d0bed180d0b5d0bdd0bdd18f20d181d0b0d0b9d182d18320d0b1d183d0bbd0be20d0b2d0b8d182d180d0b0d187d0b5d0bdd0be203120d0b6d0b8d182d182d18f20d180d0b8d0b1d0b82dd0bad0bbd0bed183d0bdd0b0",
    "Актуальний": "The Hart Team - \"Don't worry, our team is working very hard and diligently to get everything done and fixed as soon as possible!\" (In reality, everyone has cat paws)",
    "Життєвий": "ЗСУ, РДК, ЧВК, КВН - росію знищують трилітерні абревіатури. НАТО, закройте небо над вагнеравцами! А також 1000 і 1 казка від Аладіна",
    "Дотерський": "Банку пива відкриваєш - Баратрума заправляєш, На еС-еФа ми сідаємо - матерів не залишаєм хепхехепех"
  }

  const isAllChoicesMade = !!(greeting && mood && accent && image && joke);

  const handleChoiceChange = (setter) => (value) => {
    setter(value);
    setIsGreetingGenerated(false);
  }

  return (
    <div className="App">
      <header>
        <div>
          <a>Збери собі привітання сам be like (1024 комбінацій)</a>
          <div className='spider-cat'> <img src={spider_cat} alt='spider-cat' /></div>
        </div>
      </header>
      <main>
        <div className='first_line'>
          <div className='main_photo'>
            <img src={photo_main} alt='photo_main' />
          </div>
          <div className="container">
            <div className='text_near_photo_left'>
              <a>В тебе там, наче б то, сьогодні др, як бачиш, мені лінь придумувати привітання.<br/>
                  Вирішив все спихнути на твою уяву і бачення, ти ж НАПЕВНЕ знаєш що ти хочеш :)
                  <br/>Тикай і роби вигляд, що тобі дуже сподобалось так, наче я думав над цим 300 років. 
                  (кхм, звичайно 300 світлових років)</a>
            </div>

            <div className="choices_container">
              <ChoiceRow title="Звертання:" choices={["Дружнє", "Смішне", "Агресивне", "Офіційне"]} onChange={handleChoiceChange(setGreeting)} />
              <ChoiceRow title="Настрій привітання:" choices={["Веселе", "Сумне", "Здивоване", "Обурене"]} onChange={handleChoiceChange(setMood)} />
              <ChoiceRow title="Акцент робимо на:" choices={["Грошах", "Дітях", "Кайфі", "Самореалізації"]} onChange={handleChoiceChange(setAccent)} />
            </div>
          </div>
        </div>


        <div className='second_line'> 
          <div className="greeting-container">
            <div className="greeting-text">
              Тут буде саме привітання, коли ти все вибереш.
              На реакті все ж працюємо, ги.<br/>
              (Скотина, якщо натиснеш раніше ніж вибереш все я не ручаюсь, ти думаєш я і це мав продумати?)
            </div>
          </div>

          <div className="choices_container_2">
          <ChoiceRow title="Картинка:" choices={["Сердечко", "Мем", "Фіолетова", "Англія 1920-х"]} onChange={handleChoiceChange(setImage)} />
<ChoiceRow title="Жарт в кінці:" choices={["Шістнадцятковий", "Актуальний", "Життєвий", "Дотерський"]} onChange={handleChoiceChange(setJoke)} />
            <div className="greeting-button-container">
              <span className="greeting-button-text">Твоє привітання:</span>
              <button className="generate-greeting" onClick={() => setIsGreetingGenerated(true)}>Зробити привітання</button>
            </div>
          </div>
        </div>

        {isAllChoicesMade && isGreetingGenerated && (
          <div className='third_line'>
            <div className="greeting-text-container">
              <p className="greeting-text-paragraph">{greetings[greeting]}</p>
              <p className="greeting-text-paragraph">{moods[mood]}</p>
              <p className="greeting-text-paragraph">{accents[accent]}</p>
              <p className="greeting-text-small">{jokes[joke]}</p>
            </div>
            <div className="greeting-image">{images[image]}</div>
          </div>
        )}
      </main>
    </div>
  );
}

function ChoiceRow({ title, choices, onChange }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleClick = (choice) => {
    setSelectedChoice(choice);
    onChange(choice);
  }

  return (
    <div className="choice_row">
      <div className='choice_text'>
        <a>{title}</a>
      </div>
      <div className='choices'>
        {choices.map(choice => (
          <button
            key={choice}
            onClick={() => handleClick(choice)}
            className={selectedChoice === choice ? 'active' : ''}
          >
            <a>{choice}</a>
          </button>
        ))}
      </div>
    </div>
  )
}



export default App;
