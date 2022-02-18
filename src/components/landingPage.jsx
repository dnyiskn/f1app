import Karts from "../images/f1carts.png";
import HamHelm from "../images/hamhelm.png";

export default function Test() {
  return (
    <div className="homeContainer">
      {/* <img className="homeImage" src={Karts} alt="Cars" /> */}
      <img className="helmImage" src={HamHelm} alt="Ham Helm" />
      <h1>Formula 1</h1>
      <input
        className="homeInput"
        type="search"
        placeholder="Search..."
      ></input>
    </div>
  );
}
