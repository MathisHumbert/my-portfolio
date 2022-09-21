import { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { slideElemTop } from '../../utils/gsapActions';

const SkillsContent = ({ data }) => {
  const { t } = useTranslation();

  useEffect(() => {
    slideElemTop('#all-skills div', '#skills');
  }, [data]);

  return (
    <>
      {data.map((item) => {
        const { id, title, icon, color, time } = item;
        return (
          <Wrapper key={id} id='all-skills'>
            <div className='container'>
              <div className='logo'>
                <span style={{ color: `${color}` }}>{icon}</span>
              </div>
              <h3>{title}</h3>
              <p>
                {time} {t('months')}
              </p>
            </div>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  .container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .logo {
    width: 130px;
    height: 145px;
    display: grid;
    place-items: center;
    font-size: 60px;
    background-color: white;
    border-radius: 5px;
  }

  h3 {
    font-family: var(--font-bai);
    font-weight: 700;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    font-family: var(--font-bai);
  }

  @media (min-width: 1000px) {
    .container {
      gap: 14px;
    }

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
      font-family: var(--font-bai);
    }
  }
`;

export default SkillsContent;
