import { useTranslation } from 'react-i18next';

const ArticleHeader = ({ title }) => {
  const { t } = useTranslation();
  return <h2 className='article-header'>{t(title)}</h2>;
};

export default ArticleHeader;
