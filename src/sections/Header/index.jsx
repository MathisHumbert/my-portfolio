import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper className='section'>
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
        dev <br /> front end
      </h1>
      <p>autodidact</p>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  text-transform: uppercase;
  border: 1px solid red;
  padding-bottom: 195px;

  ul {
    position: absolute;
    left: 0;
    top: calc(100px + 24vw);
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font-size: 14px;
      font-family: var(--font-synco);
      font-weight: 600;
      color: var(--dark-grey-color);

      span {
        font-family: var(--font-bai);
      }
    }
  }

  p {
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(-90deg);
    transform-origin: right bottom;
    font-size: 14px;
    font-family: var(--font-synco);
    font-weight: 600;
    color: var(--dark-grey-color);
  }

  h1 {
    font-family: var(--font-bai);
    text-align: center;
    font-size: 13vw;
    font-weight: 600;
  }
`;

export default Header;
