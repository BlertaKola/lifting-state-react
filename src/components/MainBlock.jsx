import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";


const MainBlock = () => {
    return (
        <>

            <div style={{ backgroundColor: "red", width: "700px", height: "400px", float: "right", position: "relative", paddingLeft: "20px", paddingTop: "20px" }}>
                
                    <Subcontent></Subcontent>
                    <Subcontent></Subcontent>
                    <Subcontent></Subcontent>
                    <Advertisement></Advertisement>
                

            </div>

        </>
    )

}
export default MainBlock;