import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/page-not-found.jpg";

const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p data-testid="pnfText">Oops - Page Not Found!</p>
          <img src={PageNotFoundImage} alt="Page Not Found" />
          <Link to="/">
            <button data-testid="homeBtn">Go Back To Word Counter</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
