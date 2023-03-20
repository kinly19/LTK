import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import Form from '../../components/Form/Form';
import ContentContainer from '../../components/Layout/Content/ContentContainer';
import img6 from '../../assets/img/img6.jpg';
import './Booking.scss';

const Booking = () => {
  return (
    <div>
      <PageLayout heading={"Book your free trial"} backgroundImage={img6}>
        <ContentContainer>
          <Form />
        </ContentContainer>
      </PageLayout>
    </div>
  );
};

export default Booking;