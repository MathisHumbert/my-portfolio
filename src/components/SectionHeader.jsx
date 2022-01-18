import { useTranslation } from 'react-i18next';

const SectionHeader = ({ title, marginLeft }) => {
  const { t } = useTranslation();
  return (
    <h2
      className='section-header'
      style={marginLeft ? { marginLeft: '5vw' } : null}
    >
      {t(title)}
    </h2>
  );
};

export default SectionHeader;
