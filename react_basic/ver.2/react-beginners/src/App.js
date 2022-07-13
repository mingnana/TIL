import { useState, useEffect } from "react";

function Hello(){
  useEffect(function(){
    console.log("hi :)");
    return function(){
      console.log("bye :(")
    }
  }, [])
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false); 
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("")
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);
  // useEffect(()=> {
  //   console.log("i run only once");
  // }, []);
  // useEffect(()=> {
  //   console.log("i run when 'keyword' changes." )
  // }, [keyword]);
  // useEffect(()=> {
  //   console.log("i run when 'counter' changes." )
  // }, [counter]);
  // useEffect(()=>{
  //   console.log("i run when keyword & counter change")
  // }, [keyword, counter])
  // return (
  //   <div>
  //     <input 
  //       value={keyword}
  //       onChange={onChange} 
  //       type="text" 
  //       placeholder="Search here..."/>
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>click me</button>
  //   </div>
  // );
}

export default App;
