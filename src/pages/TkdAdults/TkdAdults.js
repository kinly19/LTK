import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import Img from '../../components/Img/Img';
import TextContainer from '../../components/Layout/Text/TextContainer';
import SubHeading from '../../components/Heading/SubHeading/SubHeading';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
//Assets
import img6 from '../../assets/img/img6.jpg';
import './TkdAdults.scss';

const TkdAdults = () => {
  return (
    <PageLayout heading={"TKD Adults"} backgroundImage={img6}>
      <ContentContainer>
        <Img class={"image-border"} imgSrc={img6} />
        <TextContainer>
          <p>
            Say goodbye to mundane health club routines and hello to a world of
            excitement at Ly Taekwondo! Our workouts are never the same twice,
            making every session a unique and thrilling experience.
          </p>

          <p>
            Taekwondo is not something just for kids! With millions of
            practitioners worldwide, Taekwondo is a discipline that teaches ways
            of enhancing your spirit and life through training your body and
            mind.
          </p>

          <p>
            Our adult classes are held five days a week and each unique workout
            at Ly Taekwondo consists of total body cardio and strength training,
            balancing mental fitness with physical fitness for an overall
            complete workout. Anyone can do it... so don't wait any longer, join
            us at Ly Taekwondo and unlock your true potential!.
          </p>
        </TextContainer>

        <div className="accordion-container">
          <SubHeading>Empower Yourself By</SubHeading>
          <Accordion title={"Letting Go of Stress"}>
            <TextContainer>
              <p>
                Prepare yourself for an exhilarating journey with Taekwondo! The
                training is not only challenging, but also bursting with
                excitement.
              </p>

              <p>
                Your body and mind will be fully immersed in the lesson's
                objectives, leaving no space for dull or tedious thoughts. With
                each class, you'll encounter a myriad of obstacles that will
                transport you away from the stresses and worries of daily life,
                giving you a refreshing sense of detachment.
              </p>

              <p>
                At Ly Taekwondo, students will discover that the traditional
                drills and exercises of Taekwondo have a meditative effect,
                allowing them to achieve greater peace and focus.
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"Unleashing Your Inner Warrior"}>
            <TextContainer>
              <p>
                Discover the ultimate self-defense system with Taekwondo,
                developed by the Korean army and now practiced worldwide! Master
                kicks, blocks and hand techniques that will empower you with
                real-world self-defense skills, no matter your age or experience
                level.
              </p>

              <p>
                For those who wish to test their skills, take your skills to the
                next level with Taekwondo as an Olympic sport! Whether you're
                looking to compete locally, nationally, or even globally, we
                offer tournament options that could take you all the way to the
                top!.
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"Shedding Pounds"}>
            <TextContainer>
              <p>
                Our classes begin with invigorating warm-up exercises, followed
                by an array of heart-pumping kicking and punching drills,
                blocks, footwork and traditional forms that work every major
                muscle group in your body.
              </p>

              <p>
                You'll not only improve your aerobic and anaerobic capabilities,
                but also sculpt a leaner, toned physique with reduced body fat.
                And the benefits don't stop there, Taekwondo promotes discipline
                and self-control, often leading to a well-balanced and healthy
                diet.
              </p>
            </TextContainer>
          </Accordion>

          <Accordion title={"Sweating with a Smile"}>
            <TextContainer>
              <p>
                Our classes offer an enjoyable and safe atmosphere that combines
                cardio, whole-body fitness, strength training, and more. With
                each session, you'll boost your stamina, strength, flexibility,
                coordination, and balance. Join our community today and take the
                first step towards a healthier, fitter, and more confident you!
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

export default TkdAdults;