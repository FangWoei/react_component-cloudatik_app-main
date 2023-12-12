import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/basic-button.module.scss';

export const BasicButton = ({ label }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClickButton = () => {
    setIsTextVisible(prevState => !prevState);
  };

  return (
    <section className={styles.section}>
      <button
        type="button"
        onClick={handleClickButton}
      >
        {label}
      </button>
      {isTextVisible && <p>Click again to hide this text.</p>}
    </section>
  );
};

BasicButton.propTypes = {
  label: PropTypes.string.isRequired
};
