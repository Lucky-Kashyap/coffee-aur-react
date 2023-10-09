import { useState } from "react";
import './boxCard.css';

const BoxCard = ({res,children})=>{
    const [close,setClose]= useState(true);
    return (
        <div className={close ? "" : "hidden"}>
        <div className={`box ${res}`}>
            {children}
            <button onClick={() => setClose(!close)} className="trigger">Close</button>
        </div>
    </div>
    //     <>
    //     <div className={`box ${res}`}>
    //         {children}
    //     {/* <p className="title">Lorem ipsum dolor sit amet consectetur </p> */}
    //     {/* <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p> */}

    //   </div>
    //   <button className="trigger" onClick={()=>setClose(!close)}>Close</button>
    //   </>
    )
}

export default BoxCard;