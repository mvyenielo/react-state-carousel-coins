function Flipper() {
  const [coinSide, setCoinSide] = useState("heads");
  const [numHeads, setNumHeads] = useState(0);
  const [numTails, setNumTails] = useState(0);

  function flipCoin() {
    const random = Math.random();
    random > 0.5 ? setCoinSide("heads") : setCoinSide("tails");

    random > 0.5 ? setNumHeads(numHeads + 1) : setNumTails(numTails + 1);
  }

  return (<div>
    <h1>Let's Flip a Coin!</h1>
    < Coin side={coinSide} />
    <button onClick={flipCoin}>Flip Me!</button>
    <p>
      Out of {numHeads + numTails}, there have been {numHeads} heads
      and {numTails} tails.
    </p>

  </div>);
}