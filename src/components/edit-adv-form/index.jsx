/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import * as S from './styles';
import CloseFormButton from '../close-form-button';
import plug from '../../assets/static/add_adv_photo_plug.jpg';
import MainButton from '../main-button';

function EditAdvForm({ closeForm }) {
  const hiddenFileInput = useRef();

  const [advImage, setAdvImage] = useState();

  const handleClick = (e) => {
    const { target } = e;
    // hiddenFileInput.current.click();

    console.log(target);
  };

  const handleChange = () => {
    const fileUploaded = hiddenFileInput.current.files[0];
    const obj = URL.createObjectURL(fileUploaded);
    setAdvImage(obj);
  };

  return (
    <S.FormWrapper>
      <S.TitleWrapper>
        <h2>Редактировать объявление</h2>
        <CloseFormButton onClick={closeForm} />
      </S.TitleWrapper>
      <S.Form>
        <S.InputWrapper>
          <label htmlFor="adv-name">Название</label>
          <S.FormInputName
            name="adv-name"
            placeholder="Введите название"
            type="text"
            defaultValue="Ракетка для большого тенниса Triumph Pro ST"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-description">Описание</label>
          <S.FormInputDescription
            name="adv-description"
            placeholder="Введите описание"
            type="text"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-photo">
            Фотографии товара <span>не более 5 фотографий</span>
          </label>
          <S.FormInputFile
            name="adv-photo"
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={handleChange}
          />

          <S.FormAdvImages>
            {Array.from({ length: 5 }, (_v, k) => (
              <div key={k} onClick={handleClick}>
                <img src={advImage || plug} alt="название" />
              </div>
            ))}
          </S.FormAdvImages>
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-price">Цена</label>
          <S.FormInputPriceWrapper>
            <S.FormInputPrice name="adv-price" defaultValue="2 200" />
          </S.FormInputPriceWrapper>
        </S.InputWrapper>
        <div>
          <MainButton active={false}>Сохранить</MainButton>
        </div>
      </S.Form>
    </S.FormWrapper>
  );
}

export default EditAdvForm;
