import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import SubHeading from '../../components/Heading/SubHeading/SubHeading';
import TextContainer from '../../components/Layout/Text/TextContainer';
import Card from '../../components/Card/Card';
import img3 from '../../assets/img/img3.jpg';
import './Ranks.scss';

/*
Todo
Create as separate component to resuse in Taekwondo page
 - <ul className="ranks__list">{listContent}</ul>
*/

const Ranks = () => {
  const RANKDATA = [
    {
      title: "10th Kup",
      subTitle: "The white belt",
      description:
        "White signifies the innocence of the beginner and their ignorance of Taekwondo.",
    },
    {
      title: "9th Kup",
      subTitle: "The yellow stripe",
      description:
        "Each stripe represents an intermediate step towards the next rank.",
    },
    {
      title: "8th Kup",
      subTitle: "The yellow belt",
      description:
        "Yellow represents the earth, from where a plant takes root and sprouts as the foundations of Taekwondo are laid.",
    },
    {
      title: "7th Kup",
      subTitle: "The green stripe",
      description:
        "Each stripe represents an intermediate step towards the next rank.",
    },
    {
      title: "6th Kup",
      subTitle: "The green belt",
      description:
        "Green signifies the plant itself as like a plant, the student's Taekwondo skills continue to grow.",
    },
    {
      title: "5th Kup",
      subTitle: "The blue stripe",
      description:
        "Each stripe represents an intermediate step towards the next rank.",
    },
    {
      title: "4th Kup",
      subTitle: "The blue belt",
      description:
        "Blue represents the heavens above, the divine direction in which the plant is growing.",
    },
    {
      title: "3rd Kup",
      subTitle: "The red stripe",
      description:
        "Each stripe represents an intermediate step towards the next rank.",
    },
    {
      title: "2nd Kup",
      subTitle: "The red belt",
      description:
        "Red signifies danger, warning the student of his own capability for damage and other students of his/her skill.",
    },
    {
      title: "1st Kup",
      subTitle: "The black stripe",
      description: "The final stripe towards the black belt.",
    },
  ];

  const listContent = RANKDATA.map((rank) => {
    return (
      <li className="ranks__item">
        <Card
          heading={rank.title}
          headingFontsize={"4.2rem"}
          subHeading={rank.subTitle}
          subHeadingFontsize={"1.8rem"}
          content={rank.description}
        />
      </li>
    );
  });

  return (
    <PageLayout backgroundImage={img3} heading={"Belts and promotions"}>
      <ContentContainer class={"ranks__content"}>
        <SubHeading>Kup Ranks</SubHeading>
        <TextContainer>
          <p>
            Taekwondo has ranks referred to as 'Kup Ranks'. The grading in
            Taekwondo consists mainly of patterns, 'Poomsae' and demonstrating
            techniques that involve strikes, blocks, self-defence and sparring.
          </p>

          <p>
            Every new student starts at the 10th Kup (white belt) and goes down
            in numbers to the 1st kup. From the innocence of a beginner to the
            maturity of a black belt. The coloured belt sequence from white to
            black are as follows.
          </p>
        </TextContainer>
        <ul className="ranks__list">{listContent}</ul>
      </ContentContainer>

      <ContentContainer>
        <SubHeading>Dan Ranks (Black belts)</SubHeading>
        <TextContainer>
          <p>
            Dan ranks increase from 1st Dan to the 10th Dan. Taekwondo teaches
            more than just physical fighting skills and defensive techniques. It
            is a discipline that enhances our spirit and life through our mind
            and body.
          </p>
        </TextContainer>
      </ContentContainer>
    </PageLayout>
  );
};

export default Ranks;