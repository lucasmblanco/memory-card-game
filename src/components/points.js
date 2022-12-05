//import {useEffect} from "react"; 

function ScoreDisplay({status}) {
    
    return(
        
        <div className={`score-container ${status > 0 ? "positive" : "negative"} `}>
            <h3>CURRENT SCORE: {status}</h3>
        </div>
    )
}

export default ScoreDisplay