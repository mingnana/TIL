/* eslint-disable */

import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
// state는 변수대신 쓰는 데이터 저장공간
// state에 데이터 저장해놓는 이유 : 웹이 App처럼 동작하게 만들고 싶어서!
// state는 변경되면 html이 자동으로 재렌더링 됨
// 자주바뀌는 중요한 데이터는 변수말고 state로 저장해서 쓰기
function Modal(){
  return <div className="modal">
  <h2>제목</h2>
  <p>날짜</p>
  <p>상세 내용</p>
</div>
}
function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [글제목2, 글제목변경2] = useState('남자 코트 추천2');
  let [따봉, 따봉변경] = useState(0);
  // 따봉변경 == 대체할 데이터
  let post = '강남 고기 맛집';
  
  // 하드코딩ver
  // function 제목바꾸기(){
  //   글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  // }

  function 제목바꾸기(){
    var newArray = [...글제목];
    // 괄호+... 없이 쓰게되면 서로 참조하겠다는 참조형 자료 표시이고, 복수를 하려면 반드시 newArray = [...글제목]으로 작성해야함 
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>  {/*제목은 자주 바뀌는데이터기 때문에 변수나 하드코딩으로 작성해도 됨*/}
      </div>
      <button onClick={제목바꾸기}>변경하기</button>
      {/* 제목바꾸기()로 작성하면 함수가 바로 실행됨, 버튼을 눌렀을때 실행되게끔 하려면 소괄호 제거해야함 */}
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=> {따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
        {/* state 변경함수로 변경해야 재렌더링이 일어남 */}
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default App;
