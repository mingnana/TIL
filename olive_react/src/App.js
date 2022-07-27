import './styles/reset.css';
import './styles/header.css';
import { useState } from 'react';

function App() {
  return (
    <Header></Header>
  );
}

function Header(){
  let topNav =(['회원가입', '로그인', '장바구니', '주문배송', '고객센터', '매장안내', 'Global'])
  let mymenu = (['오늘드림', '관심 매장소식', '최근 본 상품'])
  let [box, setBox] = useState(false);
  let [search, setSearch] = useState(false);

  return (
    <header>
      <div className="top-nav">
        <ul>
          {
            topNav.map((e, i) => {
              return (
                <li><a href="#none">{topNav[i]}</a></li>
              )
            })
          }
        </ul>
      </div>
      <div className="header-inn">
        <h1><img src="https://image.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" alt="로고이미지" /></h1>
        <div className="search-box">
          <div className="search-box-inn">
            <input type="text" placeholder="상큼함이 팡팡! 100% 착즙주스💖" title="상큼함이 팡팡! 100% 착즙주스💖" onClick={()=>{
              setSearch(!search);
              // input.style.border = "20px 20px 0 0";
            }}>
            </input>
            {
              search == true ? <Search></Search> : ''
            }
            <button className="search-btn"></button>
          </div>
        </div>
        <div className="mymenu">
          <ul>
            {
              mymenu.map((e, i) => {
                return (
                  <>
                    <li className="todayDel" onMouseUp={() => {
                      setBox(!box);
                  }} >
                    {/* onMouseOut={()=>{setBox(!box)}} */}
                      <a>{mymenu[i]}</a>
                    </li>
                  </>
                )
              })
            }
            {
              box == true ? <Box></Box> : ''
            }
            {/* <li className="store">
              <a>관심 매장소식</a>
              <div className="alim-box">
                <p className="alim-desc">
                  <span>로그인</span>하시면 자주가는 매장을<br/>관심 매장으로 설정 할 수 있습니다.
                </p>
                <button>로그인</button>
              </div>
            </li>
            <li className="recent">
              <a>최근 본 상품</a>
              <div className="recent-box">
                <p className="recent-tit">전체 <span>0</span>개</p>
                <p className="no-data">최근 본 상품이 없습니다.</p>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  )
}
function Search(){
  return (
    <div className="search-layer">
      <div className="search-inn">
        <a>최근 검색어</a>
        <a>급상승 검색어</a>
        <div className="search-inn-recent">
          <p>최근 검색한 기록이 없습니다.</p>
          <div className="search-set-area">
            <a>전체 삭제</a>
            <a>검색어 저장 끄기</a>
          </div>
        </div>
      </div>
      <div className="search-cont">
        <h3>주간 특가 상품</h3>
        <div className="search-slide">
          <img src="https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0016/A00000016982616ko.jpg?l=ko"></img>
          <div className="search-slide-desc">
            <span className="brand">달리프</span>
            <span className="tit">달리프 베러 루트 샴푸 미니 듀오 기획세트 (릴렉싱 샴푸150ml+쿨링 샴푸150ml)</span>
            <span className="price">
              <span className="sale_pr">16,000</span>원<strong>6,400</strong>원
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
function Box(props){
  return (
    <div className="todayDel-box">
      <p>배송지를 등록하고 오늘드림으로 구매 가능한 상품을 확인하세요!</p>
  </div>
  )
}
export default App;
