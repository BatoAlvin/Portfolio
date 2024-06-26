import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const myStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    
                        <Carousel responsive={responsive}  className="owl-carouselcv owl-theme skill-slider">
                            
                            
                            <div className="item">
                            <h3>Specialities</h3>
                                <h5>Php laravel</h5>
                                <h5>WordPress</h5>
                                <h5>Java (Mobile)</h5>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                            <h3>Achievements</h3>
                           
                                <h5>Website Development</h5>
                                <h5>System Development</h5>
                                <h5>Mobile Development</h5>
                            </div>

                            <div className="item">
                            <h3>Databases</h3>
                           
                                <h5>MySQL</h5>
                                <h5>Postgres</h5>
                                <h5>Mongodb</h5>
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
