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
        <li>
          <span>01 / </span>intro
        </li>
        <li>
          <span>02 / </span>about
        </li>
        <li>
          <span>03 / </span>projects
        </li>
        <li>
          <span>04 / </span>skills
        </li>
        <li>
          <span>05 / </span>contact
        </li>
      </ul>
      <h1>
        développeur <br /> front end <br />
        react
      </h1>
      <p>autodidact</p>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  min-height: 50vh;
  height: 100%;
  position: relative;
  border: 1px solid red;
  text-transform: uppercase;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
  }

  h4 {
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 4vw;
    text-align: center;
  }

  ul {
    position: absolute;
    top: calc(250px + 10vw);

    li {
      font-size: 16px;
      font-family: var(--font-synco);
      font-weight: 700;
      margin: 10px 0;

      span {
        font-family: var(--font-bai);
      }
    }
  }

  p {
    position: absolute;
    top: calc(234px + 10vw);
    right: 0;
    transform: rotate(-90deg);
    transform-origin: right bottom;
    font-size: 16px;
    font-family: var(--font-synco);
    font-weight: 700;
    margin: 10px 0;
  }

  h1 {
    font-family: var(--font-bai);
    text-align: center;
    font-size: 10vw;
    line-height: 10vw;
    margin-top: 50px;
    font-weight: 600;
  }
`;

export default Header;
