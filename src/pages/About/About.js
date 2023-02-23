import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import TextContainer from '../../components/Layout/Text/TextContainer';
import Button from '../../components/Button/Button';
import Img from '../../components/Img/Img';
import img1 from '../../assets/img/img1.jpg';
import './About.scss';

const About = () => {
  return (
    <PageLayout backgroundImage={img1} heading={"About Me"}>
      <ContentContainer>
        <Img class="image-border" imgSrc={img1} alt="img1" />
        <TextContainer>
          <p>
            Trained in wt style Taekwondo since 2009 and teaching From 2017,
            with a life experience in both sport and traditional Aspects of
            Martial Arts, I've had the honor of competing in a number of
            exhilarating UK competitions, where I've put my skills in sparring
            and Poomsae to the test.
          </p>

          <p>
            I am a firm believer that it is never too late to start learning a
            new profound skill, Martial arts is a lifelong journey that can be
            started at any age, regardless of what others may think. It's not
            just physical development, but also mental growth both inside and
            outside of training.
          </p>

          <p>
            Visit our workshop programs to discover how we offer a safe and
            respectful training environment for individuals of all ages,
            backgrounds, and physical fitness levels. Our classes are tailored
            to suit each person's goals and abilities, whether in private or
            group sessions for both children and adults.
          </p>
        </TextContainer>
        <Button class={"mt-5"} redirectTo={"/#workshops"}>Workshops</Button>
      </ContentContainer>
    </PageLayout>
  );
};

export default About;