import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/mui-button.module.scss';

export const MuiButton = ({ label }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClickButton = () => {
    setIsTextVisible(prevState => !prevState);
  };

  return (
    <section className={styles.section}>
      <p>Original button from Material UI:</p>
      <Button
        variant="contained"
        onClick={handleClickButton}
      >
        {label}
      </Button>
      <p>Customized with SCSS module:</p>
      <Button
        variant="contained"
        onClick={handleClickButton}
        className={styles.button}
      >
        {label}
      </Button>
      {isTextVisible && <p>Click again to hide this text.</p>}
    </section>
  );
};

MuiButton.propTypes = {
  label: PropTypes.string.isRequired
};
