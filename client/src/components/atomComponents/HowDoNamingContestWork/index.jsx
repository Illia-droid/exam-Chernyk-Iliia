import React from 'react';
import data from './data.json';
import StepItem from './StepItem';
import styles from './HowDoNamingContestWork.module.css';
const HowDoNamingContestWork = () => {
  const renderSteps = (step, i) => <StepItem key={i} step={step} />;
  return (
    <section className={styles.homeBlock}>
      <div className={styles.container}>
        <div className={styles.homeBlockCaption}>
          <img
            className={styles.workImage}
            src="http://localhost:5000/icon-27.svg"
            alt="SVG"
          />
          <h3>How Do Naming Contests Work?</h3>
        </div>
        <div className={styles.flexBox}>{data.map(renderSteps)}</div>
      </div>
    </section>
  );
};

export default HowDoNamingContestWork;
