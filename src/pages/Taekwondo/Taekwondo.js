import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import SubHeading from '../../components/Heading/SubHeading/SubHeading';
import TextContainer from '../../components/Layout/Text/TextContainer';
import Accordion from '../../components/Accordion/Accordion';
import img2 from '../../assets/img/img2.jpg';
import './Taekwondo.scss';

const Taekwondo = () => {

  const BENEFITSDATA = [
      {
        title: "Improved Muscle Tone",
        description: `Taekwondo is all about unleashing your power through a variety of awe-inspiring kicks and strikes that will 
        leave you feeling empowered from the very start. As you perfect each move through endless drills and repetition, prepare 
        to be amazed at the physical transformation taking place within you, with excess weight melting away and toned muscle 
        taking its place. Keep pushing yourself to new limits, and revel in the incredible progress you're making. You've got this!`,
      },
      {
        title: "Increased Stamina",
        description: `In addition to physical transformations, intensive Taekwondo training can enhance your endurance levels. 
        While engaging in Taekwondo practice, it's essential to keep in mind the duration for which you can sustain various kicks, 
        blocks, strikes, and other maneuvers. Initially, you may feel out of breath after only a few movements or a brief sparring session, 
        but with sufficient practice, you'll gradually improve your stamina and overcome this challenge.`,
      },
      {
        title: "Greater Flexibility",
        description: `You may have already observed that kicks are frequently referenced in Taekwondo. They play a significant role in this 
        martial art and their proper and frequent execution contributes to increased flexibility. Greater flexibility is a distinguishing 
        characteristic of Taekwondo, as some other martial arts emphasize strength or endurance over flexibility. 
        However flexibility is equally essential in Taekwondo`,
      },
      {
        title: "Greater Agility And Reflexes",
        description: `Have you ever encountered the sensation of time appearing to slow down around you. The ability to swiftly manage something that 
        would otherwise be too rapid for you to handle is a skill that you can train yourself to develop and utilize. While this is a common 
        occurrence in many martial arts and competitive sports, Taekwondo provides an additional technique for achieving that level of reflexes.`,
      },
      {
        title: "Greater Self-discipline",
        description: `Learning and becoming proficient in Taekwondo requires dedication and time. As a new student enters a class for the first time, 
        they are embarking on a long-term journey towards attaining new skills and practicing this discipline. Each step of the way involves specific, 
        measurable, achievable, realistic, and time-bound (SMART) goals that can be evaluated over time. Through Taekwondo, you not only learn about 
        SMART goals but also gain skills in setting and achieving them.`,
      },
      {
        title: "Improved Concentration",
        description: `The primary objective of practicing martial arts, such as Taekwondo, is to cultivate discipline. Whether it's mastering a new 
        technique, engaging in sparring with a classmate, or finding yourself in a self-defense scenario, a significant level of concentration is 
        necessary to succeed. People who have practiced Taekwondo for many years are frequently taken aback by how much their focus has improved from 
        when they first started.`,
      },
      {
        title: "Improved Leadership Skills",
        description: `Taekwondo instills many qualities that can lead to strong leadership skills, such as effective communication, mental resilience, 
        integrity, and the ability to work collaboratively towards shared objectives.`,
      },
      {
        title: "Confidence And Self-esteem",
        description: `It's often said that having a positive attitude and self-perception is crucial to achieving your goals. 
        The same principle applies to Taekwondo. Confidence is key when it comes to executing complex maneuvers, like advanced kicks, 
        since it helps you maintain balance and prevent falling. With time and practice, your self-esteem will also improve, making you more motivated 
        to stick with Taekwondo even when faced with difficulties.`,
      },
    ];

  const listContent = BENEFITSDATA.map((item, index) => {
    return (
      <Accordion title={item.title} key={index}>
        <TextContainer>
          <p>{item.description}</p>
        </TextContainer>
      </Accordion>
    );
  });

  return (
    <PageLayout backgroundImage={img2} heading={"What is Taekwondo"}>
      <ContentContainer class={"taekwondo__content"}>
        <SubHeading>The way of the foot and fist</SubHeading>
        <TextContainer>
          <p>
            The word taekwondo translates as the way of the foot and the fist.
            'Tae' means to break or attack with the foot, 'Kwon' means to break
            with the fist and 'Do' translate as the art or way. Although the
            name has only officially been used since 1955, it has roots from a
            range of Korean martial arts that began more than 2,000 years ago
          </p>

          <p>
            Taekwondo originates from South Korea. This has been an Olympic
            sport since the 2000 Olympic Games in Sydney. Taekwondo is a popular
            activity for adults and children, with approximately 70 million
            people practicing worldwide.
          </p>

          <p>
            The difference between Taekwondo as a sport, and Taekwondo as an
            art, is that the art has no rules for combat unlike the sport
            which is highly regulated for the safety of its participants
          </p>
        </TextContainer>
      </ContentContainer>

      <ContentContainer>
        <SubHeading>Benefits of Taekwondo</SubHeading>
        <ul className="taekwondo__list">{listContent}</ul>
      </ContentContainer>
    </PageLayout>
  );
};

export default Taekwondo;