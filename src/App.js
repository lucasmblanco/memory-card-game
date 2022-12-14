import Panel from "./components/panel";
import ScoreDisplay from "./components/points";
import Celebration from "./components/celebration"; 
import End from "./components/end"
import { useState} from "react";
import { cardData } from "./components/cardsData";
import  _  from "lodash"

function App() {

  const [ points, setPoints ] = useState(0); 
  const [ cards, setCards] = useState(cardData);
  const [highScore, setHighScore] = useState(0); 

  const changePoints = () => setPoints( prevPoints => prevPoints + 1);
  
  const checkCard = (id) => {
    setCards(cards.map((card) => card.id === id ? {...card, checked: true} : card))
  }

  const resetCards = () => {
    setCards(cards.map(card => ({ ...card, checked: false})))
  }


  const resetGame = () => {
    setPoints(0); 
    resetCards();
  }

  const handleChange = (data) => {
    if(data.checked) {
      setHighScore(points); 
      setPoints(0); 
      resetCards(); 
    } else {
      changePoints(); 
      checkCard(data.id);
    }
     
}

//const cardsTable = _.shuffle(cardData);

  return(
      <div className="app">
        <h1>FIND THE PEEPS</h1>
        <h2>MEMORY CARD GAME</h2>
        <ScoreDisplay status={points} highScore={highScore}/> 
        <div className="panel-container">
          <Panel cardData={_.shuffle(cards)} handleChange={handleChange} />
        </div>
      {
        points === 20 ? <Celebration resetGame={resetGame}/> : null
      }
      <End />
    </div>
  )
}

export default App;
 