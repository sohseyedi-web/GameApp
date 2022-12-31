import "./Home.scss";
import Container from "./../../../container/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <section className="home">
        <div className="home-container container">
          <div className="home-container__title">
            <h5>به وب گیم خوش اومدی</h5>
            <p>برای شروع یکی از بازی های زیر رو انتخاب کن و خوش بگذرون</p>
          </div>
          <div className="home-container__box">
            <Link to={"/spinner"}>spinner</Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
