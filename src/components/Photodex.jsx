import { useState } from "react";
import Search from "./search/Search";
import GetPhotos from "./Getphotos/Getphotos";
import PhotoDetails from "./Getphotos/PhotoDetails/PhotoDetails";

function Photodex() {
    const [searchTerm, setSearchTerm] = useState('')

    return(
        <div>
            <Search updateSearchTerm={setSearchTerm}/>
            {searchTerm}
            {(!searchTerm) ? <GetPhotos/> : <PhotoDetails key={searchTerm}
            photoNumber={searchTerm}/>}
        </div>
    )
}

export default Photodex;