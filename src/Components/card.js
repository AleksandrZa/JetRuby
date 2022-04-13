import './card.css'

export default function Card({ card, handelChoice, flipped}) {

    const handelClick = () =>  {
            handelChoice(card)
        }
    
    return(
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt="frontCard" />
                <img 
                 className='back' 
                 src="/img/jRuby.png"
                 alt="backCard"
                 onClick={handelClick} />
            </div>
      </div>
    )
}
