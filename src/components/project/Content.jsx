import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import TextList from './TextList';
import ArticleHeader from '../shared/ArticleHeader';

const Content = ({
  header,
  tech,
  challenges,
  success,
  codeExamples,
  learn,
  isReady,
}) => {
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
      {isReady && (
        <>
          <article>
            <ArticleHeader title='chal' />
            <TextList text={challenges} />
          </article>
          <article>
            <ArticleHeader title='suc' />
            <TextList text={success} code={codeExamples} />
          </article>
          <article>
            <ArticleHeader title='learning' />
            <p>{t(learn)}</p>
          </article>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 16px;
    line-height: 20px;
  }

  @media (min-width: 1000px) {
    p {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
export default Content;
