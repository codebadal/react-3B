import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhotoDetails({photoNumber}){
    const {id} = useParams()
    console.log(id);
    const [photo, setPhoto] = useState({})
    async function downloadPhoto(){
        try {
            let response;
        if (photoNumber) {
            response = await axios.get(`https://api.github.com/repos/octocat/Spoon-Knife/issues/${photoNumber}`)
        } else {
            response = await axios.get(`https://api.github.com/repos/octocat/Spoon-Knife/issues/${id}`)
        }
        
        console.log(response);

        setPhoto({
            img: response.data.user.avatar_url,
            ids: response.data.user.id,
            login: response.data.user.login
        })
        } catch (error) {
                console.log("somthing went worge");
        }
    
    }

    useEffect(()=>{downloadPhoto()}, [])

    return(
        <div>
            <img src={photo.img} alt="img" />
            <div>{photo.ids}</div>
            <div>{photo.login}</div>
        </div>
    )

}

export default PhotoDetails;