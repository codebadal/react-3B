import logo from './logo.svg';
import './App.css';
import GetPhotos from './components/Getphotos/Getphotos';
import Search from './components/search/Search';
import Photodex from './components/Photodex';
import Photos from './components/photos/photos';
import { Link } from 'react-router-dom';
import CustomRoutes from './Routes/CustomRoutes';



function App() {
  return (
    <div className="App">
      <Link to={'/'}>Photodex</Link>
      <CustomRoutes/>
    </div>
  );
}

export default App;
