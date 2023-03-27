/* eslint-disable consistent-return */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ThreeDots } from 'react-loader-spinner';
import MainButton from '../main-button';
import * as S from './styles';
import MyAvatarPlug from '../../assets/static/my_avatar_plug.png';
import {
  uploadAvatarUser,
  updateUserInfo,
} from '../../redux/slices/userActions';
import SubmitingForm from '../submiting-form';

function ProfileDataForm() {
  const hiddenFileInput = useRef();

  const dispatch = useDispatch();

  const { userInfo, loading } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userInfo.name,
      surname: userInfo.surname,
      city: userInfo.city,
      phone: userInfo.phone,
    },
  });

  const [defaultInfo, setDefaultInfo] = useState({});
  const [isErrorSubmit, setErrorSubmit] = useState(false);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = () => {
    const fileUploaded = hiddenFileInput.current.files[0];

    dispatch(uploadAvatarUser(fileUploaded));
  };

  function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  const onSubmit = (data) => {
    if (deepEqual(data, defaultInfo)) {
      setErrorSubmit(true);
      setTimeout(() => {
        setErrorSubmit(false);
      }, 3000);
    } else {
      dispatch(updateUserInfo(data));
      setErrorSubmit(false);
    }
  };

  useEffect(() => {
    setDefaultInfo(getValues());
  }, []);

  return (
    <S.DataForm onSubmit={handleSubmit(onSubmit)}>
      <S.AvatarWrapper>
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#009EE4"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible
          />
        ) : (
          <>
            <S.Avatar
              src={
                (userInfo.avatar &&
                  `${process.env.REACT_APP_API_URL}/${userInfo.avatar}`) ||
                MyAvatarPlug
              }
              alt="profile avatar"
              onClick={handleClick}
            />
            <S.ChangeAvatarBtn type="button" onClick={handleClick}>
              Заменить
            </S.ChangeAvatarBtn>
            <S.DataFormInputFile
              type="file"
              name="avatar"
              accept="image/*"
              ref={hiddenFileInput}
              onChange={handleChange}
            />
          </>
        )}
      </S.AvatarWrapper>
      <S.TextData>
        <S.InputsNameBlock>
          <S.InputWrapper>
            <S.DataFormInput
              type="text"
              name="first-name"
              placeholder="Укажите имя"
              {...register('name')}
            />
            <S.DataFormLabel htmlFor="first-name">Имя</S.DataFormLabel>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.DataFormInput
              type="text"
              name="last-name"
              placeholder="Укажите фамилию"
              {...register('surname')}
            />
            <S.DataFormLabel htmlFor="last-name">Фамилия</S.DataFormLabel>
          </S.InputWrapper>
        </S.InputsNameBlock>

        <S.InputWrapper>
          <S.DataFormInput
            type="text"
            name="city"
            placeholder="Укажите город"
            {...register('city')}
          />
          <S.DataFormLabel htmlFor="city">Город</S.DataFormLabel>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.DataFormInput
            type="tel"
            name="phone"
            placeholder="Укажите телефон"
            {...register('phone', {
              pattern: {
                value: /^[0-9+-]+$/,
                message: 'Не вылидный номер, попробуйте снова!',
              },
              minLength: {
                value: 6,
                message: 'Слишком короткий номер, попробуйте снова!',
              },
              maxLength: {
                value: 12,
                message: 'Cлишком длинный, попробуйте снова!',
              },
            })}
          />
          <S.DataFormLabel htmlFor="phone">Телефон</S.DataFormLabel>
          {errors.phone && (
            <S.ErrorSubmitText>{errors.phone.message}</S.ErrorSubmitText>
          )}
        </S.InputWrapper>

        <div>
          <MainButton type="submit" active={!loading}>
            Сохранить
          </MainButton>
          {isErrorSubmit && (
            <S.ErrorSubmitText>Нечего менять</S.ErrorSubmitText>
          )}
        </div>
        <SubmitingForm loading={loading} />
      </S.TextData>
    </S.DataForm>
  );
}

export default ProfileDataForm;
