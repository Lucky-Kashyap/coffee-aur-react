import { useParams } from "react-router-dom"

export const ProductDetail = () => {
  const {id} = useParams();
      return (
      <div className="component">ProductDetail : {id}</div>
    )
  }
  