import styled from 'styled-components';

const index = () => {
  return (
    <Wrapper>
      <h4>fr / en</h4>
      <h4>mathis humbert</h4>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
  text-transform: uppercase;

  h4 {
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 20px;
    color: var(--dark-color-4);
  }

  @media (min-width: 1000px) {
    padding: 50px 5vw;

    h4 {
      font-size: 24px;
    }
  }
`;
export default index;
