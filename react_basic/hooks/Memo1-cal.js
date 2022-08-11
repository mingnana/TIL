import { useMemo, useState } from "react";

const hardCalculate = (number) => {
    for (let i = 0; i< 999999; i++){
        return number + 10000;
    }
}
const easyCalculate = (number)=>{
    return number + 1;
}
function Memo() {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);
    // const hardSum = hardCalculate(hardNumber);
    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber) // memoiz 할 값
    }, [hardNumber]); // 의존성배열 내 값이 바뀔때만 콜백안에 있는 값을 호출해서 할당함
    const easySum = easyCalculate(easyNumber);
    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number"
            value={hardNumber}
            onChange={(e)=>setHardNumber(parseInt(e.target.value))}></input>
            <span>+10000 = {hardSum}</span>
            <h3>쉬운 계산기</h3>
            <input type="number"
            value={easyNumber}
            onChange={(e)=>setEasyNumber(parseInt(e.target.value))}></input>
            <span>+ 1 = {easySum}</span>
        </div>
    );
}

export default Memo;
