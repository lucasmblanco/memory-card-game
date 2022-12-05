import celebration1 from '../assets/cardsImages/peep-standing-10.png'
import celebration2 from '../assets/cardsImages/peep-standing-16.png'
import celebration3 from '../assets/cardsImages/peep-sitting-4.png'


function Celebration({resetGame}) {
    return(
        <div className="celebration-container" >
            <div className="celebration">
               <div className='celebration-message'>
               <div className="celebration-text">YOU CAUGHT EVERYONE!</div>
               <div><button onClick={resetGame}>Reset game</button></div>
               </div>
                <div className='celebration-images'>
                <div className='image-1'>
                    <img className="image-1" src={celebration1} alt="celebration"></img>
                </div>
                <div className='image-3'>
                    <img className="image-3" src={celebration3} alt="celebration"></img>
                </div>
                <div className='image-2'>
                    <img className="image-2" src={celebration2} alt="celebration"></img>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Celebration