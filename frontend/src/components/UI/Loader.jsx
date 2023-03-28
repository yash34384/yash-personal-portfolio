import React from 'react';
import '../../styles/UIStyle/Loader.scss';

const Loader = () => {
  return (
    <section className="loader-main">
      <i class="fa-solid fa-rotate loader"></i>
      <p className="loader-text">Please Wait</p>
    </section>
  );
};

export default Loader;
