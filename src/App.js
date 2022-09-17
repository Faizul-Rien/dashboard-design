import './App.css';
import AlertPart from './Component/AlertPart/AlertPart';
import Navbar from './Component/Navbar/Navbar';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='component-flex'>
      <SideBar></SideBar>
      <AlertPart></AlertPart>
      </div>
     
    </div>
  );
}

export default App;
