import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/detail";
import Card from "../components/Card";

function AppRouter(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Card />} />
        <Route path="detail" element={<Detail />} />
    </Routes>
    </BrowserRouter>)
}
export default AppRouter;