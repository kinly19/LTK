import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import Img from '../../components/Img/Img';
import TextContainer from '../../components/Layout/Text/TextContainer';
import SubHeading from '../../components/Heading/SubHeading/SubHeading';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
// Assets
import img3 from '../../assets/img/img3.jpg';
import './TkdPrivate.scss';

const TkdPrivate = () => {
  return (
    <PageLayout heading={"Tkd Private"} backgroundImage={img3}>
      <ContentContainer>
        <Img class={"image-border"} imgSrc={img3} />
        <TextContainer>
          <p>
            Are you looking for a way to take your martial arts skills to the
            next level? Private classes might be just what you need! With
            personalized attention and customized training plans, private
            classes can help you achieve your goals faster and effectively than
            traditional group classes.
          </p>

          <p>
            At Ly Taekwondo, we specialize in providing quality private
            Taekwondo instructions to students of all levels. Our experienced
            instructors will work with you to identify your strengths and
            weaknesses, and create a training program that is tailored
            specifically to your needs and abilities.
          </p>
        </TextContainer>

        <div className="accordion-container">
          <SubHeading>Accelerate Your Progress</SubHeading>
          <Accordion title={"Stress-Free Training"}>
            <TextContainer>
              <p>
                At Ly Taekwondo, we understand that life can be busy and
                unpredictable, which is why our private taekwondo classes offer
                unparalleled flexibility. With one-on-one training, you'll be
                able to schedule your classes around your own schedule, ensuring
                that you never miss a session and can stay on track to achieve
                your goals at your own pace
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"Personalized attention"}>
            <TextContainer>
              <p>
                Experience the thrill of having your very own taekwondo coach,
                providing you with exclusive personalized attention that will
                take your martial arts skills to the next level and make you
                feel like a true champion!
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"Tailored to You"}>
            <TextContainer>
              <p>
                Each and every session is custom-crafted to perfectly align with
                your unique abilities, goals, and learning style. With
                personalized attention from our expert instructors, we'll help
                you obliterate any weaknesses and turbocharge your strengths,
                empowering you to conquer your goals and become an unstoppable
                force in the martial arts world!
              </p>
            </TextContainer>
          </Accordion>
        </div>

        <Button class={"mt-5"} redirectTo={"/booking"}>Book A Free Trial</Button>
      </ContentContainer>
    </PageLayout>
  );
};

export default TkdPrivate;