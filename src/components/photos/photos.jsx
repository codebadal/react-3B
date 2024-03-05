import { Link } from 'react-router-dom';
import './photos.css'
function Photos({name, image,id}) {
    return(

        <div className='photo-box'>
            <Link to={`github/${id}`}>
                <img className='img' src={image} alt=""/>
                <div className='name'>{name}</div>
                <div>{id}</div>
            </Link>
        </div>

    )
}
export default Photos;