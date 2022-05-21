import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import vaccineImg from '../../assets/vaccine.png';
import classes from './CountryCard.module.css';

const CountryCard = ({ country }) => {
  const URL = `/countries/${country.name}`;
  return (
    <>
      <Card.Link href={URL} className={classes.cardLink}>
        <div className={classes.countryStatsContent}>
          <div className={classes.countryStatsImg}>
            <img
              src={vaccineImg}
              className={classes.vaccineImg}
              alt="Corona Virus"
            />
          </div>
          <div className={classes.countryStatsData}>
            <div className={classes.countryStats}>
              {' '}
              <h3>{country.name}</h3>
              <span>{country.total.toLocaleString()}</span>
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={`${classes.faIcon} ${classes.rightArrow}`}
            />
          </div>
        </div>
      </Card.Link>
    </>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryCard;
