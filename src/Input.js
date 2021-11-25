import { useState } from "react";
import "./global.css";

const Input = () => {
  const [input, setInput] = useState("");
  //   const [disable, setDisable] = useState(false);

  function stop() {
    if (input.length > 280) {
      alert("complete");
    } else {
      ("");
    }
  }

  function handleNext() {
    let btn = document.createElement("textarea");
    btn.innerText = "";
    let be = btn.innerText;
    document.body.appendChild(btn);
    // let myData = be.split(",");
    // console.log(typeof myData);
    // console.log(myData.length);
    console.log(be.length);
  }

  //   function handleDisable() {
  //     if (input.length > 20) {
  //       setDisable(!disable);
  //     }
  //   }
  return (
    <div>
      <label htmlFor="tweet" className="red">
        Type the tweet here ➡️
      </label>
      <textarea
        id="tweet"
        name="tweet"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={(e) => setInput(e.target.value)}
        onKeyDown={stop()}
        disabled={input.length > 280 ? 1 : 0}
        // onKeyDown={stop()}
        // disabled={handleDisable}
      ></textarea>
      {/* {input.length > 20 ? alert("wat") : ""} */}
      <div className="new">
        <section>{input}</section>
      </div>
      <aside>Number of Characters remaining : {input.length}/280</aside>

      {/* <button onClick={handleNext}>Next</button> */}
    </div>
  );
};

export default Input;
