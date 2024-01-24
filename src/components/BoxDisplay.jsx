
import { useState } from "react";


const BoxDisplay = (props) => {
    const { boxes, setBoxes } = props;

    const onClickHandler = (e,item) => {
        e.preventDefault();
        console.log(item)
        const updatedBoxes = [...boxes]; 
        updatedBoxes.splice(item, 1); 
        setBoxes(updatedBoxes); 
    };
    
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", 
        gap: "3px", 
    };
    return (
        <>
            <div style={gridStyle}>

                {
                    boxes.map((item, index) => {
                        return (<div key={index}>
                            <div style={{ backgroundColor: item.colorState, width: item.sizeState, height: item.sizeState, margin: "5px" }}></div>
                            <button onClick={(e)=>onClickHandler(e, index)}>{item.colorState}</button>
                        </div>)
                    })
                }



            </div>

        </>
    )
}

export default BoxDisplay;