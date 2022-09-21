import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BiChevronLeft } from 'react-icons/bi';
import styled from 'styled-components';

const BackHome = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Link to='/'>
        <BiChevronLeft className='icon' /> {t('back')}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 25px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 20px;
    color: var(--dark-grey-color);
    text-decoration: none;
    line-height: 0;
    text-transform: uppercase;
    transition: all 0.4s ease;

    .icon {
      font-size: 25px;
      transition: all 0.4s ease;
    }

    &:hover {
      color: var(--black-color);

      .icon {
        transform: translateX(-10px);
      }
    }
  }
`;
export default BackHome;
