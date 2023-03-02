/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import MainButton from '../main-button';
import * as S from './styles';
import mockAvatarMen from '../../assets/static/mockAvatarMen.png';
import mockAvatarWomen from '../../assets/static/mockAvatarWomen.png';

function ProfileDataForm() {
  const formRef = useRef();
  const hiddenFileInput = useRef();
  const avatarRef = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  const [avatarSrc, setAvatarSrc] = useState(null);

  const [focused, setFocuesd] = useState();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = () => {
    const fileUploaded = hiddenFileInput.current.files[0];
    const obj = URL.createObjectURL(fileUploaded);
    setAvatarSrc(obj);

    // avatarRef.currentSrc(obj);
  };

  const handleSubmit = () => {};

  useEffect(() => {
    formRef.current.reset();
  }, []);

  return (
    <S.DataForm onSubmit={handleSubmit} ref={formRef}>
      <S.AvatarWrapper>
        <S.Avatar
          src={avatarSrc || mockAvatarMen}
          alt="profile avatar"
          ref={avatarRef}
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
      </S.AvatarWrapper>
      <S.TextData>
        <S.InputsNameBlock>
          <S.InputWrapper>
            <S.DataFormLabel
              htmlFor="first-name"
              // inputFocused={focused}
              ref={nameRef}
            >
              Имя
            </S.DataFormLabel>
            <S.DataFormInput
              defaultValue="Укажите имя"
              type="text"
              name="first-name"
              // onFocus={() => setFocuesd(true)}
              onFocus={() => nameRef.current.focus()}
              // onBlur={() => setFocuesd(false)}
              onBlur={() => nameRef.current.blur()}
              // onMouseEnter={() => setFocuesd(true)}
              // onMouseLeave={() => setFocuesd(false)}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.DataFormLabel
              htmlFor="last-name"
              // inputFocused={focused}
              ref={surnameRef}
            >
              Фамилия
            </S.DataFormLabel>
            <S.DataFormInput
              defaultValue="Укажите фамилию"
              type="text"
              name="last-name"
              // onFocus={() => setFocuesd(true)}
              onFocus={() => surnameRef.current.focus()}
              // onBlur={() => setFocuesd(false)}
              onBlur={() => surnameRef.current.blur()}
              // onMouseEnter={() => setFocuesd(true)}
              // onMouseLeave={() => setFocuesd(false)}
            />
          </S.InputWrapper>
        </S.InputsNameBlock>

        <S.InputWrapper>
          <S.DataFormLabel
            htmlFor="city"
            // inputFocused={focused}
            ref={cityRef}
          >
            Город
          </S.DataFormLabel>
          <S.DataFormInput
            defaultValue="Санкт-Петербург"
            type="text"
            name="city"
            // onFocus={() => setFocuesd(true)}
            onFocus={() => cityRef.current.focus()}
            // onBlur={() => setFocuesd(false)}
            onBlur={() => cityRef.current.blur()}
            // onMouseEnter={() => setFocuesd(true)}
            // onMouseLeave={() => setFocuesd(false)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.DataFormLabel
            htmlFor="phone"
            // inputFocused={focused}
            ref={phoneRef}
          >
            Телефон
          </S.DataFormLabel>
          <S.DataFormInput
            defaultValue="89123456677"
            type="tel"
            name="phone"
            // onFocus={() => setFocuesd(true)}
            onFocus={() => phoneRef.current.focus()}
            // onBlur={() => setFocuesd(false)}
            onBlur={() => phoneRef.current.blur()}
            onMouseEnter={() => phoneRef.current.focus()}
            onMouseLeave={() => phoneRef.current.blur()}
          />
        </S.InputWrapper>
        <div>
          <MainButton type="submit">Сохранить</MainButton>
        </div>
      </S.TextData>
    </S.DataForm>
  );
}

export default ProfileDataForm;
