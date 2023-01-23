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
        <Img class="about__img" imgSrc={img1} alt="img1"/>
        <TextContainer>
          <p>
            Trained in wt style Taekwondo since 2009 and teaching From 2017,
            with A life experience in both sport and traditional Aspects of
            Martial Arts. During my training I have competed in a few, small UK
            Competitions in sparring and Poomsae in the past.
          </p>

          <p>
            I am a firm believer that it is never too late to start learning a
            new profound skill, no matter how big or small or what others have
            to say. To me a martial art is a lifelong journey. not only
            developing myself pysically but mentally too, inside and outside of
            training.
          </p>

          <p>
            No matter what age, background or physical fitness level, everyone
            is treated equally in a safe environment with respect. Classes are
            tailored to meet individual goals and abilities, whether private or
            group sessions (children and adults). Visit the workshop programmes
            to find out more.
          </p>
        </TextContainer>
        <Button redirectTo={"/classes"}>Classes</Button>
      </ContentContainer>
    </PageLayout>
  );
};

export default About;