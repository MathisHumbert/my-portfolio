import styled from 'styled-components';

const Skills = () => {
  return (
    <Wrapper>
      <div className='front-end'>
        <h5>
          <span>01 / </span>front end
        </h5>
      </div>
      <div className='back-end'>
        <h5>
          <span>02 / </span>back end
        </h5>
      </div>
      <div className='global'>
        <h5>
          <span>01 / </span>global
        </h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default Skills;
