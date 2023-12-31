import { data } from './data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="w-3/4 m-auto">
      <div className='mt-20'>
        <Slider {...settings}>
        {
          data.map(item=>(
            <div  className="bg-white h-[450px] text-black rounded-xl">
<div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
  <img className='h-44 w-44 rounded-full' src={item.img}/>
  </div>
  <div className='flex flex-col justify-center items-center gap-4 p-4'>
    <p className='text-xl font-semibold'>{item.name}</p>
    <p>{item.review}</p>
    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
    </div>
            </div>
          ))
        }
        </Slider>
      </div>
     
    </div>
  );
}

export default App;
