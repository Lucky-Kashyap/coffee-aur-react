import { useRef, useState } from "react";

const Counter = () => {
    const [charLength,setCharLength] = useState(0);
    const [wordLength,setWordLength] = useState(0);

    const textInput = useRef('');


    const handleInput=()=>{
        const res = textInput.current.value;

        setCharLength(res.length);

        // const word = res.split(' ').length;

        // setWordLength(word);

        // res.length ? setWordLength(res.split(' ').length) : setWordLength(0);
        res.length ? setWordLength(res.trim().split(" ").length) : setWordLength(0);



    }
    const removeData=()=>{
        textInput.current.value='';
        handleInput();
    }

  return (
    <section className="counter">
      <textarea ref={textInput}
        data-testid="textArea"
        placeholder="Type or paste your text" onChange={handleInput}
      ></textarea>
      <button onClick={removeData} data-testid="clearBtn" disabled={charLength ? "" : "disabled"}>Clear</button>

      <p className="result">
        <span data-testid="charLength">Character: {charLength} </span>
        <span data-testid="wordLength">Word: {wordLength}</span>
      </p>
    </section>
  );
};
export default Counter;
