import styled from 'styled-components';

const index = () => {
  return (
    <Wrapper>
      <h4>fr / en</h4>
      <h4>mathis humbert</h4>
      <h4>projects</h4>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  text-transform: uppercase;

  h4 {
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 14px;
    color: var(--dark-color-4);
  }
`;
export default index;
