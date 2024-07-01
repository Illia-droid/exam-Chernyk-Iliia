import React from 'react';
import styles from './ContestContainer.module.sass';
import Spinner from '../Spinner/Spinner';

const 
ContestsContainer = (props) => {

  const { isFetching } = props;
  if (!isFetching && props.children.length === 0) {
    return <div className={styles.notFound}>Nothing not found</div>;
  }
  return (
    <div>
      {props.children}
      {isFetching && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ContestsContainer;
