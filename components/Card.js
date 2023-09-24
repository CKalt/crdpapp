function Card({ value, suit, faceDown }) {
  const cardStyle = {
    border: '2px solid black',
    padding: '10px',
    margin: '5px',
    width: '50px',
    height: '70px',
    textAlign: 'center',
    lineHeight: '70px',
    fontSize: '20px',
    backgroundColor: faceDown ? 'gray' : 'white',
    color: suit === '♦' || suit === '♥' ? 'red' : 'black',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={cardStyle}>
      {faceDown ? '?' : `${value} ${suit}`}
    </div>
  );
}

export default Card;