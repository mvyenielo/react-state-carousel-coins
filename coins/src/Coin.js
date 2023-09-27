const TAILS_SRC = 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Apollo_11_50th_Anniversary_silver_dollar_reverse.png';
const HEADS_SRC = 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Silver_Dollar_1794.jpg'

function Coin({ side="heads"}){
  return (
    <div className="Coin-container">
      <img className="Coin-img" src={side === "heads" ? HEADS_SRC: TAILS_SRC}/>
    </div>
  )

}

export default Coin;