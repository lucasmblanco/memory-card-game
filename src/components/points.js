import {useEffect, useState} from "react"; 

function ScoreDisplay({status, highScore}) {

        const [ maxHighScore, setMaxHighScore ] = useState(highScore); 

       

        useEffect(() => {
            const displayHighScore = () => {
                return highScore > maxHighScore ? setMaxHighScore(highScore) : maxHighScore
            }
         
            displayHighScore(); 
        }, [highScore, maxHighScore])


    return(
        
        <div className={`score-container ${status > 0 ? "positive" : "negative"} `}>
            <h3>CURRENT SCORE: {status}</h3><h3>HIGHSCORE: {maxHighScore}</h3>
        </div>
    )
}

export default ScoreDisplay