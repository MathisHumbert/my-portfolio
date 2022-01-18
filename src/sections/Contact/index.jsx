import styled from 'styled-components';
import SectionHeader from '../../components/SectionHeader';
import FooterInfo from './FooterInfo';

const Footer = () => {
  return (
    <Wrapper className='section'>
      <SectionHeader title='contact' />
      <h1>
        mathishumbert17 <br /> @gmail.com
      </h1>
      <FooterInfo />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding-bottom: 150px;

  h1 {
    font-family: var(--font-bai);
    font-size: 8vw;
    font-weight: 600;
    cursor: pointer;
    padding-bottom: 25px;
    text-transform: uppercase;
  }
`;
export default Footer;
