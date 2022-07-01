/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  ) 
}
function App() {

  let post = '역남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집추천', '파이썬독학']);
  let [따봉,따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    return '123211'
  })
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목]
        글제목변경(copy.sort())
      }}>가나다순정렬</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy)
      }}>글수정</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{
          따봉변경(따봉+1)
        }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
 
        {
          글제목.map(function(a, i){
            return (
              <div className="list">
                <h4 onClick={()=>{
                  setModal(!modal)
                }}>{글제목[i]}
                <span onClick={()=>{
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span>{따봉[i]}
                </h4>
                <p>2월 17일 발행</p>
              </div>
            )
          })
        }
           {
            // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
            modal == true ? <Modal/> : ''
          }
    </div>
  );
}

export default App;
