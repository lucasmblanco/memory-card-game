import Card from "../components/card"
import  _  from "lodash"


function Panel({cardData, handleChange}) { 
    const shuffledAndSplice = () => {
        const cardsTable = _.shuffle(cardData);
        //const filterElement = () => cardsTable.findIndex(element => !element.checked);
        const filtered = cardsTable.findIndex(element => !element.checked); 
        if(filtered > 15) {
           return _.shuffle(cardsTable.slice().reverse().slice(cardsTable.length - filtered, (cardsTable.length - filtered) + 5))
        }
        return _.shuffle(cardsTable.slice(filtered, filtered + 5));
        
    }

    return(
        <div className="panel"> { shuffledAndSplice().map(card => 
            <Card data={card} key={card.id} handleChange={handleChange}/>) } </div>
        )
    }

export default Panel;
