import { Outlet, useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit=()=>{
    console.log('----------');
    // navigate('/');
    // navigate('/products');

    // return navigate('/products');
  }
    return (
      <>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Back To Home</button>
      <Outlet />
      </>
    )
  }
  