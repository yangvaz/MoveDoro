import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/yangvaz.png" alt="Yan Garcia" />
      <div>
        <strong> Yan Garcia </strong>
        <p>
          <img src="icons/level.svg" alt="level" />
           Level {level}
        </p>
      </div>
    </div>
  );
}