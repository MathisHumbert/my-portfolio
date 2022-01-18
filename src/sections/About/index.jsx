import styled from 'styled-components';
import img from '../../assets/mathis.png';

const About = () => {
  return (
    <Wrapper className='section'>
      <div className='left'>
        <h2>moi</h2>
        <img src={img} alt='mathis-img' />
      </div>
      <div className='right'>
        <h2>compétence</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5vw;
  border: 1px solid red;

  h2 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .left {
    display: grid;
    gap: 10px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .right {
    justify-self: flex-end;
  }
`;
export default About;
