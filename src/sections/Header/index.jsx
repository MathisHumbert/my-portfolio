import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <nav>
        <h4>fr / en</h4>
        <h4>mathis humbert</h4>
        <h4>projects</h4>
      </nav>
      <ul>
        <li>intro</li>
        <li>about</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
      </ul>
      <h1>développeur front end</h1>
      <p>autodidact</p>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  min-height: 100vh;
  height: 100%;
  position: relative;
  border: 1px solid red;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
  }

  h4 {
    text-transform: uppercase;
  }
`;

export default Header;
