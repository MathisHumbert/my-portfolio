import { useState, useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import SectionHeader from '../../components/SectionHeader';
import FooterInfo from './FooterInfo';

const Footer = () => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <Wrapper className='section'>
      <SectionHeader title='contact' />
      <h1
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText('mathishumbert17@gmail.com');
        }}
      >
        mathishumbert17 <br /> @gmail.com
      </h1>
      {alert && <span>copié</span>}
      <FooterInfo />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding-bottom: 150px;
  position: relative;

  h1 {
    font-family: var(--font-bai);
    font-size: 8vw;
    font-weight: 600;
    cursor: pointer;
    padding-bottom: 25px;
    text-transform: uppercase;
  }

  span {
    position: absolute;
    top: 40px;
    right: 10vw;
    background: white;
    border-radius: 10px;
    text-transform: uppercase;
    padding: 10px;
  }

  @media (min-width: 1000px) {
    h1 {
      padding-bottom: 75px;
    }

    span {
      position: absolute;
      top: 100px;
      font-size: 20px;
    }
  }
`;
export default Footer;
