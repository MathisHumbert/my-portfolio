import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h1>
        développeur <br /> front end
      </h1>
      <ul>
        <li>
          <span>01 / </span>intro
        </li>
        <li>
          <span>02 / </span>about
        </li>
        <li>
          <span>03 / </span>projets
        </li>
        <li>
          <span>04 / </span>compétences
        </li>
        <li>
          <span>05 / </span>contact
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  text-transform: uppercase;
  /* padding-bottom: 195px; */
  min-height: calc(100vh - 70px);
  height: 100%;
  padding: 0 5vw;

  h1 {
    padding-top: 50px;
    font-family: var(--font-bai);
    font-size: 12vw;
    font-weight: 600;
    text-align: center;
  }

  ul {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    font-size: 16px;
    font-family: var(--font-synco);
    font-weight: 600;
    color: var(--dark-grey-color);

    span {
      font-family: var(--font-bai);
    }
  }

  @media (min-width: 1000px) {
    min-height: calc(100vh - 124px);

    li {
      font-size: 20px;
    }
  }
`;

export default Header;
