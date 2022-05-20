/* eslint-disable jsx-quotes */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import coronaImg from '../../assets/corona.png';
import classes from './CountryCard.module.css';

const CountryCard = ({ country }) => {
  const URL = `/countries/${country.All.country}`;

  return (
    <>
      <article className={classes.countryCard} key={country.All.country}>
        <Card.Link href={URL} className={classes.cardLink}>
          <div className={classes.countryStatsContent}>
            <div className={classes.countryStatsImg}>
              <img
                src={coronaImg}
                className={classes.coronaImage}
                alt='Corona Virus'
              />
            </div>
            <div className={classes.countryStatsData}>
              <div className={classes.countryStats}>
                {' '}
                <h3>{country.All.country}</h3>
                <span>{country.All.administered.toLocaleString()}</span>
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className={`${classes.faIcon} ${classes.rightArrow}`}
              />
            </div>
          </div>
        </Card.Link>
      </article>
    </>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    All: PropTypes.shape({
      country: PropTypes.string,
      administered: PropTypes.number,
      people_vaccinated: PropTypes.number,
      people_partially_vaccinated: PropTypes.number,
    }),
  }).isRequired,
};

export default CountryCard;
