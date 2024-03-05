import { useEffect, useState } from "react";
import axios from 'axios';
import Photos from "../photos/photos";
import './Getphotos.css'
function GetPhotos() {
    const [photos, setPhotos] = useState([])
    async function downloadPhotos(){
         const response = await axios.get('https://api.github.com/repos/octocat/Spoon-Knife/issues')
         console.log(response);
        const data = response.data;
        console.log(data);

        const id = data.map((ids)=>ids.number);
        console.log(id);
        // const photosUrl = data.user.avatar_url;
        // console.log(photosUrl);
        const photosUrlData = data.map((urls)=> axios.get(urls.user.avatar_url))
        console.log(photosUrlData);
        const result = await axios.all(photosUrlData)
        console.log(result);

        setPhotos(data.map((i)=>{
            const img = i.user.avatar_url
            const id = i.number
            return {image: img,
                id:id,
                names: i.user.login

            }
        }))
    }
    useEffect(()=>{downloadPhotos()}, [])

    return(
        <div className="photo">
            {photos.map((i)=> <Photos name={i.names} image={i.image} id={i.id} key={i.id}/>)}
        </div>
    )
}
export default GetPhotos;