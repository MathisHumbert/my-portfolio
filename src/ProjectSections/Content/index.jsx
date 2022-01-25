import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TextList from './TextList';
import ArticleHeader from '../../components/ArticleHeader';

const Content = ({ header, tech }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <article>
        <p>{t(header)}</p>
      </article>
      <article>
        <ArticleHeader title='technologies' />
        <TextList text={tech} />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default Content;
