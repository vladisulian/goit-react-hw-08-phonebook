import './Homepage.css';
import mobileIMG from '../../images/mobile.jpg';
import backgroundIMG from '../../images/bg-image.jpg';
const Homepage = () => {
  return (
    <main className="Homepage__hero">
      <section className="section title-section">
        <p>
          <span>Go</span>
          <span>IT</span> React phonebook
        </p>
        <p>-</p>
        <p>Modern phonebook!</p>
      </section>

      {/* <div className="Homepage-content">
        <div>
          <img src={mobileIMG} alt="phone" />
        </div>
        <div>
          <img src={mobileIMG} alt="phone" />
        </div>
        <div>
          <img src={mobileIMG} alt="phone" />
        </div>
      </div> */}

      <section className="section reasons-section">
        <h2>Why we?</h2>
        <div className="reasons__container">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            molestias?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            molestias?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, eos.
          </div>
        </div>
      </section>
    </main>
  );
};
export default Homepage;
