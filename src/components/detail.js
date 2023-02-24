import { useLocation } from "react-router-dom";

function Detail(){
    const location = useLocation()
    console.log(location.data)
}
export default Detail;