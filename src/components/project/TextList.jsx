import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TextList = ({ text, code }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {text.map((item, index) => {
        return (
          <div key={index}>
            <li>{t(item)}</li>
            {code && code[index] && (
              <img src={code[index]} alt={`code${index}`} />
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    list-style-type: disc;
    margin-left: 28px;
    font-size: 16px;
    line-height: 20px;
  }

  @media (min-width: 1000px) {
    li {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
export default TextList;
