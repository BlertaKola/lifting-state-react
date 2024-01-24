import { useState } from "react";

const ColorForm = (props) => {
    const [colorState, setColorState] = useState();
    const [sizeState, setSizeState] = useState(50);
    const {boxes, setBoxes} = props
    const handleSubmit = (e) => {
        e.preventDefault();
        const newSquare = {colorState, sizeState};
        console.log(colorState);
        console.log(sizeState);
        setBoxes([...boxes,{colorState: colorState, sizeState: sizeState + "px"}]);
        setColorState(""); 
        setSizeState(50)
    }


    return (
        <>
        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Color</label>
                    <input type="text" value={colorState} onChange={ (e) => setColorState(e.target.value) }  />
                    <input type="text" value={sizeState} onChange={ (e) => setSizeState(e.target.value) }  />
                    <input type="submit" value="Add Square" />
                </div>
            </form>
        
        </>
    )
}
export default ColorForm;