import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getShuffledDeck } from '../utils/deck';

export default function Home() {
  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([]);

  useEffect(() => {
    const shuffledDeck = getShuffledDeck();
    const dealCards = async () => {
      for (let i = 0; i < 6; i++) {
        setHand1(prev => [...prev, shuffledDeck[i]]);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      for (let i = 6; i < 12; i++) {
        setHand2(prev => [...prev, shuffledDeck[i]]);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    };
    dealCards();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {hand1.map((card, index) => (
          <Card key={index} value={card.value} suit={card.suit} />
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        {hand2.map((card, index) => (
          <Card key={index} faceDown={true} />
        ))}
      </div>
    </div>
  );
}