import styled from 'styled-components';
import img from '../../assets/mathis.png';
import Skills from './Skills';

const About = () => {
  return (
    <Wrapper className='section'>
      <div className='left'>
        <h4>moi</h4>
        <img src={img} alt='mathis-img' />
      </div>
      <div className='right'>
        <h4>compétence</h4>
        <Skills />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 5vw;

  h4 {
    font-size: 16px;
    font-family: var(--font-synco);
    font-weight: 600;
    text-transform: uppercase;
  }

  h5 {
    font-size: 14px;
    font-family: var(--font-synco);
    font-weight: 600;
    text-transform: uppercase;

    span {
      font-family: var(--font-bai);
    }
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
    border: 1px solid blue;
    height: 1000px;
  }
`;
export default About;
