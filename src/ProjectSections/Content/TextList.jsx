import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TextList = ({ text }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {text.map((item, index) => {
        return <li key={index}>{t(item)}</li>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    list-style-type: disc;
    margin-left: 5vw;
  }
`;
export default TextList;
