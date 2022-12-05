import Card from "../components/card"
import  _  from "lodash"


function Panel({cardData, handleChange}) { 

    const shuffledAndSplice = () => _.shuffle(cardData).splice(0, 5)

  
    return(
        <div className="panel">
        {
            shuffledAndSplice().map(card => 
            <Card data={card} key={card.id} handleChange={handleChange}/>)
        }
        </div>
        )
    }

export default Panel;
