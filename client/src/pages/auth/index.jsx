import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import LogoAuth from '../../assets/static/logo_auth.svg';
import { SIGNUP_ROUTE } from '../../utils/consts';
import * as S from './styles';
import MainButton from '../../components/main-button';
import { registerUser, userLogin } from '../../redux/slices/userActions';
import SubmitingForm from '../../components/submiting-form';
import { StyledContainer } from '../../global-styles';

function Auth() {
  const { pathname } = useLocation();

  const isSignUp = pathname === SIGNUP_ROUTE;

  const { loading, userToken, success, error, userInfo } = useSelector(
    (state) => state.user
  );

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate('/login');
    if (userToken) navigate(`/profile/${userInfo?.id}`);
  }, [navigate, userToken, success]);

  const onSubmit = (data) => {
    data.email = data.email.toLowerCase();

    if (isSignUp) {
      dispatch(registerUser(data));
    } else {
      dispatch(userLogin(data));
    }
  };

  const emailPattern = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,3}$/i;
  const emailReg = new RegExp(emailPattern);

  const namePattern = /^[A-ZА-Я][a-zA-ZА-Яа-яЁё]*/;
  const nameReg = new RegExp(namePattern);

  if (error) {
    return (
      <StyledContainer>
        <p>Упс, что-то пошло не так...</p>
      </StyledContainer>
    );
  }

  return (
    <S.Auth>
      <S.AuthBlock>
        <S.AuthLogo src={LogoAuth} alt="logo" />

        <S.AuthForm onSubmit={handleSubmit(onSubmit)}>
          <S.AuthFormInput
            placeholder="email"
            type="email"
            {...register('email', {
              required: 'Введите e-mail',
              pattern: {
                value: emailReg,
                message: 'Введите корректный e-mail',
              },
            })}
          />
          {errors.email && (
            <S.ErrorSubmitText>{errors.email.message}</S.ErrorSubmitText>
          )}
          <S.AuthFormInput
            placeholder="Пароль"
            type="password"
            {...register('password', { required: 'Введите пароль' })}
          />
          {errors.password && (
            <S.ErrorSubmitText>{errors.password.message}</S.ErrorSubmitText>
          )}
          {isSignUp && (
            <>
              <S.AuthFormInput
                placeholder="Повторите пароль"
                type="password"
                {...register('passwordRepeat', {
                  required: 'Повторите пароль',
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || `Пароли не совпадают`;
                    },
                  },
                })}
              />
              {errors.passwordRepeat && (
                <S.ErrorSubmitText>
                  {errors.passwordRepeat.message}
                </S.ErrorSubmitText>
              )}
              <S.AuthFormInput
                placeholder="Имя (необязательно)"
                type="text"
                {...register('name', {
                  pattern: {
                    value: nameReg,
                    message: 'Имя должно начинатся с заглавной буквы',
                  },
                })}
              />
              {errors.name && (
                <S.ErrorSubmitText>{errors.name.message}</S.ErrorSubmitText>
              )}
              <S.AuthFormInput
                placeholder="Фамилия (необязательно)"
                type="text"
                {...register('surname', {
                  pattern: {
                    value: nameReg,
                    message: 'Фамилия должна начинатся с заглавной буквы',
                  },
                })}
              />
              {errors.surname && (
                <S.ErrorSubmitText>{errors.surname.message}</S.ErrorSubmitText>
              )}
              <S.AuthFormInput
                placeholder="Город(необязательно)"
                type="text"
                {...register('city')}
              />
            </>
          )}

          {isSignUp ? (
            <>
              <MainButton type="submit" active={!loading}>
                Зарегистрироваться
              </MainButton>
              {error && (
                <S.ErrorSubmitText>
                  Такой пользователь уже зарегистрирован
                </S.ErrorSubmitText>
              )}
            </>
          ) : (
            <>
              <MainButton type="submit" active={!loading}>
                Войти
              </MainButton>
              <S.SignUpLink to="/signup">Зарегистрироваться</S.SignUpLink>
              {error && (
                <S.ErrorSubmitText>
                  {error.detail === 'Incorrect password'
                    ? 'Неверный пароль'
                    : error.detail === 'Incorrect email'
                    ? 'Неверный email'
                    : ''}
                </S.ErrorSubmitText>
              )}
            </>
          )}
          <SubmitingForm loading={loading} />
        </S.AuthForm>
      </S.AuthBlock>
    </S.Auth>
  );
}

export default Auth;
