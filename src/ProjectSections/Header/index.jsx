import { useTranslation } from 'react-i18next';
import { FaLink, FaGithub } from 'react-icons/fa';

const Header = ({ title, website, code }) => {
  const { t } = useTranslation();

  return (
    <header>
      <h1>{title}</h1>
      <a
        href={website}
        target='_blank'
        rel='noreferrer'
        className='website-link link'
      >
        {t('website')} <FaLink />
      </a>
      <a
        href={code}
        target='_blank'
        rel='noreferrer'
        className='code-link link'
      >
        {t('code')} <FaGithub />
      </a>
    </header>
  );
};

export default Header;
