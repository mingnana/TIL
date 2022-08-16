import {memo} from 'react';
function ChildW ({name, tellMe}){
    console.log("자녀컴포넌트가 렌더링됨")

    return (
        <div style={{border:'2px solid powderblue', padding:'10px'}}>
            <h3>👶자녀</h3>
            <p>이름 : {name}</p>
            <button onClick={tellMe}>나 사랑해?</button>
        </div>
    )
}
export default memo(ChildW);