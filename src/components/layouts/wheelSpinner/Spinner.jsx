import "./Spinner.scss";
import * as RiIcon from "react-icons/ri";
import Container from "./../../../container/Container";
import { useState } from "react";

const Spinner = () => {
  const numberSpinner = [25, 50, 50, 75, 75, 100, 100, 125, 125, 150, 150, 25];

  const [spinner, setSpinner] = useState(false);

  const startSpinner = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, Math.floor(Math.random() * 1000) + 1);
  };

  return (
    <Container>
      <section className="spinner">
        <div className="spinner-container container">
          <div className="spinner-container__arrow">
            <RiIcon.RiArrowDownLine size={35} />
          </div>
          <ul
            className={
              spinner === true
                ? "spinner-container__wheel start"
                : "spinner-container__wheel end"
            }
          >
            {numberSpinner.map((number, index) => (
              <li className="spinner-container__wheel-box" key={index}>
                <div
                  className="spinner-container__wheel-box__text"
                  spellCheck="false"
                >
                  {number}
                </div>
              </li>
            ))}
          </ul>
          <button className="spinner-container__btn" onClick={startSpinner}>
            بگردون
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Spinner;
