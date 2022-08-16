import { useCallback, useMemo, useState } from "react";
import ChildW from "./Child(with)";
function Memo3W(){
    const [parentAge, setParentAge] = useState(0);
    const incrementParentAge = ()=>{
        setParentAge(parentAge + 1);
    }
    console.log("부모컴포넌트가 렌더링됨")
    const name= useMemo(()=> {
        return {
            lastName : '홍',
            firstName : '길동',
        }
    },[]);
    const tellMe = useCallback(()=>{
        console.log('길동아 사랑해')
    }, []);
    return (
        <div style={{border:'2px solid navy', padding:'10px'}}>
            <h1>👩‍👩‍👦 부모</h1>
            <p>age : {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
            <ChildW name={'홍길동'} tellMe={tellMe}/>
        </div>
    )
}
export default Memo3W;