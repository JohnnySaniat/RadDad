import React from 'react';
import Slider from 'react-slick';
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>

      <div>
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '1111px',
            margin: '0 auto',
          }}
        >
          <h1 className="section-title-auth">RAD DAD</h1>
          <h1 className="section-description">Welcome {user.displayName}</h1>
        </div>
      </div>
      <div>
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '888px',
            margin: '0 auto',
          }}
        >
          <h1 className="section-title-auth">Learn</h1>
          <h1 className="section-description">to Tailor Support</h1>
        </div>
      </div>

      <div>
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '888px',
            margin: '0 auto',
          }}
        >
          <h1 className="section-title-auth">Sustain</h1>
          <h1 className="section-description">a Healthy Lifestyle</h1>
        </div>
      </div>

      <div>
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '888px',
            margin: '0 auto',
          }}
        >
          <h1 className="section-title-auth">Experience</h1>
          <h1 className="section-description">the Journey Together</h1>
        </div>
      </div>

      <div>
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '888px',
            margin: '0 auto',
          }}
        >
          <h1 className="section-title-auth">Schedule</h1>
          <h1 className="section-description">the Moments that Matter</h1>
        </div>
      </div>

    </Slider>
  );
}

export default Home;
