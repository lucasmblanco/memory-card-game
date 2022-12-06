//import {useEffect} from "react"; 

function ScoreDisplay({status, highScore}) {
    
    return(
        
        <div className={`score-container ${status > 0 ? "positive" : "negative"} `}>
            <h3>CURRENT SCORE: {status}</h3><h3>HIGHSCORE: {highScore}</h3>
        </div>
    )
}

export default ScoreDisplay