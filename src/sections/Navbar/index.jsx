import styled from 'styled-components';

const index = () => {
  return (
    <Wrapper>
      <h4>fr / en</h4>
      <a
        href='https://twitter.com/Mathis1Humbert'
        target='_blank'
        rel='noreferrer'
      >
        <h4>mathis humbert</h4>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
  text-transform: uppercase;

  h4,
  a {
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 20px;
    color: var(--dark-color-4);
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    padding: 50px 5vw;

    h4 {
      font-size: 24px;
    }
  }
`;
export default index;
