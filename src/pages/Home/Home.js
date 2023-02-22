import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Landing from '../../components/Landing/Landing';
import InfoSec from '../../components/InfoSec/InfoSec';
import TextContainer from '../../components/Layout/Text/TextContainer';
import Accordion from '../../components/Accordion/Accordion';
import Testimonial from '../../components/Testimonial/Testimonial';
import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel'
import Heading from '../../components/Heading/Heading';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
// Assets
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
import img6 from '../../assets/img/img6.jpg';
import img8 from '../../assets/img/img8.jpg';
import './Home.scss';

const Home = () => {

  // Handle scroll into view of workshops section
  const workshopRef = useRef();
  const currentUrl = useLocation();
  useEffect(() => {
    if (currentUrl.hash === "#workshops") {
      workshopRef.current.scrollIntoView();
    }
  }, [currentUrl]);

  return (
    <main className="home">
      <Landing />
      {/* About us section */}
      <InfoSec backgroundImage={img1}>
        <Heading>About us</Heading>
        <ContentContainer>
          <TextContainer>
            <p>
              Experience the ultimate mind-body workout at Ly Taekwondo! Our
              dynamic blend of Taekwondo and mindfulness classes is the perfect
              stress-busting solution for busy professionals and business
              owners.
            </p>
            <p>
              Our program helps you develop physical and mental resilience while
              deepening your mind-body connection, empowering you to cultivate a
              healthier and more balanced lifestyle.
            </p>
          </TextContainer>
          <Button class={"mt-3"} redirectTo={"/about"}>Read More</Button>
        </ContentContainer>
      </InfoSec>

      {/* Workshop section */}
      <InfoSec ref={workshopRef}>
        <Heading>Workshops</Heading>
        <ContentContainer>
          <Accordion title={"TKD Adults "} img={img2}>
            <TextContainer>
              <p>
                Discover the thrilling world of Taekwondo and unlock your inner
                champion as you learn traditional patterns, powerful strikes and
                blocks, expert sparring techniques, life-saving self-defense
                moves, and much more!
              </p>
            </TextContainer>
            <Button class={"mt-3"} redirectTo={"/adults"}>Read More</Button>
          </Accordion>

          <Accordion title={"TKD Kids"} img={img8}>
            <TextContainer>
              <p>
                Nurture your child's inner warrior with Taekwondo, where they
                will gain valuable life skills, discover their full potential,
                and ignite a passion for personal growth and excellence that
                will carry them through life with self-respect, discipline, and
                unstoppable confidence!
              </p>
            </TextContainer>
            <Button class={"mt-3"} redirectTo={"/kids"}>Read More</Button>
          </Accordion>

          <Accordion title={"Private classes"} img={img3}>
            <TextContainer>
              <p>
                Unlock your full potential and take your Taekwondo skills to the
                next level with exhilarating private lessons that are
                custom-tailored to your individual goals and needs, led by a
                skilled instructor who will guide you every step of the way.
              </p>
            </TextContainer>
            <Button class={"mt-3"} redirectTo={"/private"}>Read More</Button>
          </Accordion>
        </ContentContainer>
      </InfoSec>

      {/* Testimonial section */}
      <InfoSec backgroundImage={img6}>
        <Heading>Others said</Heading>
        <ContentContainer>
          <Testimonial />
        </ContentContainer>
      </InfoSec>

      {/* Gallery section */}
      <InfoSec>
        <Heading textAlign={"center"}>Take a look</Heading>
        <ContentContainer containerWidth={"100%"}>
          <Carousel imgData={[img1, img2, img3, img4, img6, img8]} />
        </ContentContainer>
      </InfoSec>

      {/* More info section */}
      <InfoSec heading={"What is Taekwondo"} backgroundImage={img3}>
        <Heading>What is Taekwondo</Heading>
        <ContentContainer>
          <TextContainer>
            <p>
              The word Taekwondo translates as the way of the foot and the fist.
              'Tae' means to break or attack with the foot, 'kwon' means to
              break with the fist and 'do' translate as the art or way Although
              the name has only officially been used since 1955, it has roots
              from a range of Korean martial arts that began more than 2,000
              years ago
            </p>
          </TextContainer>
          <Button class={"mt-3"} redirectTo={"/taekwondo"}>Read More</Button>
        </ContentContainer>
      </InfoSec>
    </main>
  );
};

export default Home;