import Card from "../components/card"
import  _  from "lodash"


function Panel({cardData, handleChange}) { 

    const shuffledAndSplice = () => _.shuffle(cardData).splice(0, 5);

    const showCards = () => shuffledAndSplice().map(card => 
        <Card data={card} key={card.id} handleChange={handleChange}/>)


    return(
        <div className="panel"> { showCards() } </div>
        )
    }

export default Panel;
