import React from 'react';
import { Link } from 'react-router-dom';
import namingAgencyList from './namingAgencyList';
import styles from './NamingAgency.module.sass';

function NamingAgency () {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.aboutAgency}>
        <h2 className={styles.titleAgency}>Like A Naming Agency, But Better</h2>
        <p className={styles.textAgency}>
          With Atom's managed contests, leverage our team's naming expertise and
          our pool of 300K+ naming experts. Our hybrid-solution partners you
          with a trained Atom branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.{' '}
        </p>
      </div>
      <ul className={styles.namingAgencyList}>
        {namingAgencyList.map((n, i) => (
          <li key={i} className={styles.liItem}>
            <div className={styles.imageContainer}>
              <img src={n.iconSrc} alt={n.title} width='48' height='35' />
            </div>
            <div className={styles.liText}>
              <h3>{n.title}</h3>
              <p className={styles.liItemParagraph}>{n.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link to='/' className={styles.linkButton}>
        Learn More
      </Link>
    </div>
  );
}

export default NamingAgency;
