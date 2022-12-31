import "./Spinner.scss";
import * as RiIcon from "react-icons/ri";
import Container from "./../../../container/Container";
import { useState } from "react";

const Spinner = () => {
  const numberSpinner = [25, 50, 75, 100, 125, 150, 175, 200];

  const [spinner, setSpinner] = useState(false);

  const startSpinner = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, Math.floor(Math.random() * 3000) + 1);
  };

  return (
    <Container>
      <section className="spinner">
        <div className="spinner-container container">
          <div className="spinner-container__arrow">
            <RiIcon.RiArrowDownLine size={35} />
          </div>
          <div
            className={
              spinner === true
                ? "spinner-container__wheel start"
                : "spinner-container__wheel start end"
            }
          >
            {numberSpinner.map((number, index) => (
              <div className="spinner-container__wheel-box" key={index}>
                {number}
              </div>
            ))}
          </div>
          <button className="spinner-container__btn" onClick={startSpinner}>
            بگردون
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Spinner;
