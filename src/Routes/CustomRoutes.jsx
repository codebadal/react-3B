import { Route, Routes } from "react-router-dom";
import Photodex from "../components/Photodex";
import PhotoDetails from "../components/Getphotos/PhotoDetails/PhotoDetails";

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Photodex/>}/>
            <Route path="github/:id" element={<PhotoDetails/>}/>
        </Routes>
    )
}

export default CustomRoutes;