import Header from "../components/Header";
import SliderVideo from "../components/SliderVideo";
import ReactDOM from 'react-dom'
import { ModalPortal } from "../components/ModalPortal";


const Home = () => {
  return ( 
    <>
      <Header />
      <main>
        <SliderVideo />
      </main>
      
    </>
  );
}

export default Home
