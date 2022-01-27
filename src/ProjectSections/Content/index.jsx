import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TextList from './TextList';
import ArticleHeader from '../../components/ArticleHeader';

const Content = ({ header, tech, challenges, codeExamples }) => {
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
      <article>
        <ArticleHeader title='chal' />
        <TextList text={challenges} />
      </article>
      <article>
        <ArticleHeader title='suc' />
        <TextList text={challenges} code={codeExamples} />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export default Content;
