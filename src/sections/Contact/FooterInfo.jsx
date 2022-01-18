import styled from 'styled-components';

const FooterInfo = () => {
  return (
    <Wrapper>
      <ul>icons</ul>
      <div>
        <h4>made by</h4>
        <h3>mathis humbert</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  border-top: 1px solid var(--dark-color-1);
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: 'Syncopate', sans-serif;
    color: #626262;
  }
  h3 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: var(--font-bai);
    font-weight: 600;
  }
`;

export default FooterInfo;
