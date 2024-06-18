//import Button from "./Buttons";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("created");
    return byFn; // 컴포넌트가 언제 destroyed 되는지 알고싶으면 return에다가
  }
  useEffect(hiFn, []);

  //자주 쓰이는 다른 방법
  // useEffect(() => {
  //   console.log("hi");
  //   return () => console.log("bye");
  // }, []);

  // 잘 안쓰이는 방법
  // useEffect(function () {
  //   console.log("hi");
  //   return function () {
  //     console.log("bye");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  // 리엑터는 새로운 데이터가 들어올때마다 reflesh 자동으로 해준다
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState(0);
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => setShowing((prev) => !prev);
  console.log("i run all the time");

  useEffect(() => {
    //state 변경시 모든 컴포넌트가 계속 render되는데
    //특정 컴포넌트를 한번만 render시키고 싶을때
    console.log("only once");
  }, []);
  useEffect(() => {
    //counter가 아닌 keyword가 변화할때만
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes");
    }
  }, [keyword]);
  useEffect(() => {
    //keyword가 아닌 counter가 변화할때만
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    //keyword, counter가 변화할때만
    console.log("i run when 'counter' and 'keyword' changes");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>

      <button onClick={onShow}>{showing ? "hide" : "show"}</button>
      {showing ? <Hello /> : null}
    </div>
    // <div>
    //   <h1 className={styles.title}>welcome back!</h1>
    //   <Button text={"Continue"} />
    // </div>
  );
}

export default App;
