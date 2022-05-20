/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
// @ts-ignore
import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import toggleImg from '../../assets/toggle.png';
import logoImg from '../../assets/logo.png';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../redux/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_EMAIL':
      return { value: action.payload, isValid: action.payload.includes('@') };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.includes('@') };
    default:
      return { value: '', isValid: false };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_PASSWORD':
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.trim().length > 6 };

    default:
      return { value: '', isValid: false };
  }
};

const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // @ts-ignore
    dispatchEmail({ type: 'USER_EMAIL', payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // @ts-ignore
    dispatchPassword({ type: 'USER_PASSWORD', payload: event.target.value });
  };

  const validateEmailHandler = () => {
    // @ts-ignore
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // @ts-ignore
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <>
      <div className={classes.innerContent}>
        <div className={classes.toggleSection}>
          <span className={classes.language}>EN</span>
          <img
            src={toggleImg}
            className={classes.toggleIcon}
            alt="toggle icon"
          />
          <span className={classes.language}>FR</span>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className={`${classes.faIcon} ${classes.anglesRight}`}
          />
        </div>
        <div className={classes['logo-image']}>
          <img src={logoImg} className={classes.logo} alt="Logo" />
        </div>
        <Card className={classes.login}>
          <h2 className={classes.loginHeader}>Enter your login details</h2>
          <form onSubmit={submitHandler}>
            <Input
              ref={emailInputRef}
              id="email"
              label="E-Mail"
              type="email"
              placeholder="Email"
              isValid={emailIsValid}
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <Input
              ref={passwordInputRef}
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              isValid={passwordIsValid}
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <div className={classes.actions}>
              <Button type="submit" className={classes.btn}>
                Login
              </Button>
            </div>
          </form>
        </Card>
        <a href="#" className={classes.passwordLink}>
          forgot email/password
        </a>
        <Button type="button" className={classes.twitterBtn}>
          Sign in with Twitter
        </Button>
      </div>
    </>
  );
};

export default Login;
