import styled from 'styled-components';

const SingleSkill = ({ data, active, index }) => {
  return (
    <Wrapper className={active === index ? 'show' : null}>
      {data.map((item) => {
        const { id, title, icon, color } = item;
        return (
          <li key={id}>
            <span className={title} style={{ color: `${color}` }}>
              {icon}
            </span>
            <h4>{title}</h4>
            {id < data.length && <div className='list-line'></div>}
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  &.show {
    display: flex;
  }

  display: none;
  flex-direction: column;
  gap: 56px;
  padding-top: 30px;

  li {
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    text-transform: uppercase;

    span {
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #fff;
      font-size: 24px;
    }

    h4 {
      font-family: var(--font-pop);
      font-size: 14px;
    }
  }

  .list-line {
    position: absolute;
    left: 28px;
    top: 0;
    right: auto;
    width: 1px;
    border-left: 1px dashed var(--dark-grey-color);
    margin-top: 59px;
    height: 56px;
  }
`;
export default SingleSkill;
