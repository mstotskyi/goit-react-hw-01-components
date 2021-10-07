import PropTypes from 'prop-types';
import styles from 'components/Statistics/Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title ? (
        <h2 className={styles.title}>{title}</h2>
      ) : (
        <h2 className={styles.title} style={{ display: 'none' }}>
          {title}
        </h2>
      )}

      <ul className={styles.stat__list}>
        {stats.map(statsItem => (
          <li
            className={styles.item}
            key={statsItem.id}
            style={{
              backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                0,
                255,
              )}, ${getRandom(0, 255)})`,
            }}
          >
            <span className={styles.label}>{statsItem.label}</span>
            <span className={styles.percentage}>{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
