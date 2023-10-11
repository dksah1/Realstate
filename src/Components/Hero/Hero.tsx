import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup"
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth hero-container flexcenter">
        {/* left side */}
        <div className="flexcolstart hero-left">
          <div className="hero-title">
            <h1>
              let's discover <br /> most suitable <br /> property
            </h1>
            <div className="orange-circle"></div>
            <div className="flexcolstart hero-des">
              <span>
                find a variety of properties that suit you very easily
              </span>
              <span>
                forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
          </div>
          <div className="flexcenter stats">
            <div className="flexcolcenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondarytext" style={{color:"orange",padding:"10px"}}>Premium Products</span>
            </div>
            <div className="flexcolcenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondarytext" style={{color:"orange",padding:"10px"}}>Happy customers</span>
            </div>
            <div className="flexcolcenter stat">
              <span>
                <CountUp end={200}/>
                <span>+</span>
              </span>
              <span className="secondarytext" style={{color:"orange",padding:"10px"}}>Award Winnings</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexcenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
