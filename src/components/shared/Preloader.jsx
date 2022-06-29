import React, { useEffect } from 'react';

import { split } from '../../utils/text';
import { slideInPreloader } from '../../utils/gsapActions';

const Preloader = ({ title, text }) => {
  useEffect(() => {
    const title = document.querySelector('.preloader-title');
    const text = document.querySelector('.preloader-text h2');

    split({
      element: title,
    });

    split({
      element: title,
    });

    const elementTitleSpans = title.querySelectorAll('span span');

    slideInPreloader(elementTitleSpans, text);
  }, []);

  return (
    <div className='preloader'>
      <h1 className='preloader-title'>{title}</h1>
      <div className='preloader-text'>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Preloader;
