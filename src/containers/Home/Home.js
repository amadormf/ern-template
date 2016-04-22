import React from 'react';
import Helmet from 'react-helmet';

export default function Home() {
  const styles = require('./Home.styl');
  return (
    <div className={styles.home}>
      <Helmet title="Home" />
      <div>HOME</div>
    </div>
  );
}
