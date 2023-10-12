import './App.css';
import { data } from './data';
function App() {
  return (
    <div className="w-3/4 m-auto">
      <div className='mt-20'>
        {
          data.map(item=>(
            <div>
<div>
  <img src={item.img}/>
  </div>
  <div>
    <p>{item.name}</p>
    <p>{item.review}</p>
    <button>Read More</button>
    </div>
            </div>
          ))
        }
      </div>
     
    </div>
  );
}

export default App;
