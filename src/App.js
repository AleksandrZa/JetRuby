import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/card';

const cardImgs = [
  { 'src': '/img/c.png', coinc: false },
  { 'src': '/img/ruby.png', coinc: false },
  { 'src': '/img/react.png', coinc: false },
  { 'src': '/img/python.png', coinc: false },
  { 'src': '/img/java.png', coinc: false },
  { 'src': '/img/html.png', coinc: false },
  { 'src': '/img/go.png', coinc: false },
  { 'src': '/img/css.png', coinc: false }
]

function App() {

  const [cards, setCards] = useState([]);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);

  const mixCards = () => {
    const mixCards = [...cardImgs, ...cardImgs].sort(() => Math.random() -0.5)
    .map(card => ({...card, id:Math.random().toFixed(5)}))
    setCards(mixCards)
  }

  const handelChoice = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card)
  }

  useEffect(() => {
    if(cardOne && cardTwo) {
      
      if(cardOne.src === cardTwo.src) {
        setCards(cards => {
          return cards.map(card => {
            if (card.src === cardOne.src) {
              return {...card, coinc: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 500) 
      }
    }
  }, [cardOne, cardTwo])

  const resetTurn = () => {
    setCardOne(null)
    setCardTwo(null)
  }

  return (
    <div className="App">
      <button onClick={mixCards}>Start Game</button>
      <div className="cards-grid">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card}
            handelChoice={handelChoice} 
            flipped={card === cardOne || card === cardTwo || card.coinc} />
        ))}
      </div>
    </div>
  );
}

export default App;