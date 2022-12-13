import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import SubHeading from '../../components/Heading/SubHeading/SubHeading';
import TextContainer from '../../components/Layout/Text/TextContainer';
import Card from '../../components/Card/Card';
import img2 from '../../assets/img/img2.jpg';
import './Taekwondo.scss';

const Taekwondo = () => {

  const BENEFITSDATA = {
    content: [
      "Improved muscle tone",
      "Increased strength and stamina",
      "Improved agility and reflexes",
      "Improved flexibility",
      "Confidence and self-esteem",
      "Improved concentration",
      "Improved leadership skills",
      "Greater self-discipline",
    ],
  };

  const listContent = BENEFITSDATA.content.map((item, index) => {
    return (
      <li className="taekwondo__item" key={index}>
        <Card 
          heading={index + 1} 
          headingFontsize={"8rem"} 
          content={item} 
        />
      </li>
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