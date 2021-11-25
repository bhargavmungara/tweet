import { useState } from "react";
import "./global.css";

const Input = () => {
  const [input, setInput] = useState("");

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
  
    console.log(be.length);
  }

 
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
        
      ></textarea>
      <div className="new">
        <section>{input}</section>
      </div>
      <aside>Number of Characters remaining : {input.length}/280</aside>

    </div>
  );
};

export default Input;
