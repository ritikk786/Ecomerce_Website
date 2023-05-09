import { useParams } from "react-router-dom";
const Productdetail = ()=>{
    const param=useParams()
    console.log(param)
    return(
        <div>
            <h1>{param.productId}</h1>
            <p>This is amazing product you should buy it.</p>
            </div>
    )
}
export default Productdetail;