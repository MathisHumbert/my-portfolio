import styled from 'styled-components';
import img from '../../assets/mathis.png';
import SectionHeader from '../../components/SectionHeader';

const About = () => {
  return (
    <Wrapper className='section' id='about'>
      <SectionHeader title='à propos' />
      <div className='content'>
        <div className='left'>
          <h3>moi</h3>
          <img src={img} alt='mathis-img' />
        </div>
        <div className='right'>
          <p>
            Le codage étant ma passion, l'apprendre était quelque chose que je
            voulais faire. J'ai choisi de m'éduquer sur quelque chose qui
            m'intéressait vraiment. Cela a été un déclencheur pour moi dans la
            vie et c'est à ce moment-là que je suis tombé amoureux du codage,
            mais surtout de l'apprentissage.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    display: grid;
    gap: 5vw;
  }

  .left {
    display: grid;
    gap: 10px;
  }

  h3 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: 'Syncopate', sans-serif;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-width: 500px;
  }

  p {
    font-size: 24px;
    line-height: 1.2;
  }

  @media (min-width: 1000px) {
    .content {
      grid-template-columns: 1fr 3fr;
      align-items: center;
    }

    p {
      font-size: 48px;
    }

    h3 {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      font-family: 'Syncopate', sans-serif;
    }
  }
`;
export default About;
