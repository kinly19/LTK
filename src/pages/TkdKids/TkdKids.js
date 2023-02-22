import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import Img from '../../components/Img/Img';
import TextContainer from '../../components/Layout/Text/TextContainer';
import SubHeading from '../../components/Heading/SubHeading/SubHeading';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
// Assets
import img8 from '../../assets/img/img8.jpg';
import './TkdKids.scss';

const TkdKids = () => {
  return (
    <PageLayout heading={"Tkd Kids"} backgroundImage={img8}>
      <ContentContainer>
        <Img class={"image-border"} imgSrc={img8}/>
        <TextContainer>
          <p>
            Are you ready to witness a breathtaking transformation in your
            child's life? Enroll them in our kids Taekwondo classes, where
            they'll discover the unbeatable combination of self-respect,
            discipline, and confidence, all while experiencing the thrill of the
            exhilarating world of martial arts!.
          </p>

          <p>
            With classes available five days a week across all five levels, our
            team of dedicated instructors takes great pride in providing
            personalized attention to ensure your child's success. Give your
            child the head start they deserve and watch in awe as they soar to
            new heights, both on and off the mat!
          </p>
        </TextContainer>

        <div className="accordion-container">
          <SubHeading>Life Skills for Little Champions</SubHeading>
          <Accordion title={"The Road to Resilience"}>
            <TextContainer>
              <p>
                At Ly Taekwondo, we believe in the power of "Yes, I can!" Our
                classes are designed to boost your child's self-confidence and
                self-esteem while promoting a strong mind-body connection. By
                practicing Taekwondo, your child will enhance their
                concentration, increase their attention span, and sharpen their
                focus, all of which lead to improved school grades!.
              </p>

              <p>
                With Taekwondo, you're not just giving your child a hobby,
                you're investing in their future success. Give them the gift of
                a lifetime and watch as they excel in all aspects of their lives
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"The Power of Collaboration"}>
            <TextContainer>
              <p>
                Our exciting group classes incorporate traditional martial arts
                techniques and teach students the importance of social skills
                and teamwork. As a part of our team, you'll discover that the
                whole is greater than the sum of its parts, and that working
                together is the key to success.
              </p>

              <p>
                By joining our team, they'll discover the true meaning of
                collaboration and the power of working together to achieve
                success. Plus, they'll get to exercise their body and mind while
                learning self-defense techniques with their friends!
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"Self-Discipline"}>
            <TextContainer>
              <p>
                Unlock the power of self-discipline and watch as your child
                conquers negative peer pressure with ease! At Ly Taekwondo, we
                teach our students how to channel their energy into positive
                actions, empowering them to make the right choices in life.
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"Building Awareness"}>
            <TextContainer>
              <p>
                Give your child the gift of success with our dynamic Taekwondo
                programs at Ly Taekwondo. We will teach your child how to
                enhance their coordination and excel in other sports and
                activities. But that's not all! With our self-defense programs,
                your child will also learn how to protect themselves while
                developing better judgment and awareness to avoid conflict
                altogether.
              </p>
            </TextContainer>
          </Accordion>
        </div>

        <Button class="mt-5" redirectTo={"/booking"}>
          Book A Free Trial
        </Button>
      </ContentContainer>
    </PageLayout>
  );
};

export default TkdKids;