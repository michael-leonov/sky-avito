/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles';
import MainButton from '../main-button';
import CloseFormButton from '../close-form-button';
import plug from '../../assets/static/add_adv_photo_plug.jpg';
import {
  useAddAdvMutation,
  useUpdateAdvMutation,
  useAddAdvPictureMutation,
  useDeleteAdvPictureMutation,
} from '../../redux/services/advs';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import SubmitingForm from '../submiting-form';

function AdvForm({ closeForm, isEditStatusForm, advInfo }) {
  const [addAdv, { isLoading: isAdding }] = useAddAdvMutation();
  const [updateAdv, { isLoading: isUpdate }] = useUpdateAdvMutation();
  const [addAdvPicture] = useAddAdvPictureMutation();
  const [deleteAdvPicture] = useDeleteAdvPictureMutation();

  const maxCountAdvImages = 5;
  const initPreviewImgArr = [];

  if (isEditStatusForm) {
    const imagesList = advInfo.images;

    imagesList.forEach((img) => {
      initPreviewImgArr.push(`${process.env.REACT_APP_API_URL}/${img.url}`);
    });
  }

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef();
  const hiddenFileInputRef = useRef();

  const [files, setFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState(
    isEditStatusForm ? initPreviewImgArr : []
  );
  const [isErrorFiles, setIsErrorFiles] = useState(false);
  const [isPlusFile, setIsPlusFile] = useState(true);
  const [isPrepareSubmit, setIsPrepareSubmit] = useState(false);
  const [removableFileArr, setRemovableFileArr] = useState([]);

  const fileInputHandleClick = (e) => {
    hiddenFileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { target } = e;
    if (target.files.length > maxCountAdvImages) {
      setIsErrorFiles(true);
    } else {
      setIsErrorFiles(false);
      setIsPrepareSubmit(true);

      if (files.length < maxCountAdvImages) {
        setFiles((prev) => prev.concat([...target.files]));
      } else {
        setFiles([...target.files]);
      }
    }

    if (files.length === maxCountAdvImages) {
      setIsPlusFile(false);
    }
  };

  // todo: как удалить добавленный файл из массива файлов при удалении из превью

  const previewImageHandleDelete = (e) => {
    const { target } = e;

    const filterPreviewImages = previewImages.filter(
      (img) => String(img) !== String(target.children[0].src)
    );

    if (isEditStatusForm) {
      const isTargetInPreviews = initPreviewImgArr.includes(
        target.children[0].src
      );

      if (isTargetInPreviews) {
        setRemovableFileArr((prev) => [...prev, target.children[0].src]);
      }
    }

    setPreviewImages(filterPreviewImages);

    if (filterPreviewImages.length < maxCountAdvImages) {
      setIsPlusFile(true);
    } else {
      setIsPlusFile(false);
    }

    const isEqual =
      JSON.stringify(initPreviewImgArr) === JSON.stringify(filterPreviewImages);

    if (isEqual) {
      setIsPrepareSubmit(false);
    } else {
      setIsPrepareSubmit(true);
    }
  };

  const onChangeTextHandler = (e) => {
    const { target } = e;
    if (target.value === target.defaultValue) {
      setIsPrepareSubmit(false);
    } else {
      setIsPrepareSubmit(true);
    }
  };

  useEffect(() => {
    const fileArr = files.map((file) => URL.createObjectURL(file));

    const concatArr = previewImages.concat(fileArr);

    if (concatArr.length > maxCountAdvImages) {
      setRemovableFileArr(previewImages);
      setPreviewImages(fileArr);
    } else {
      setPreviewImages(concatArr);
    }

    if (concatArr.length < maxCountAdvImages) {
      setIsPlusFile(true);
    } else {
      setIsPlusFile(false);
    }

    const isEqual =
      JSON.stringify(initPreviewImgArr) === JSON.stringify(concatArr);

    if (isEqual) {
      setIsPrepareSubmit(false);
    } else {
      setIsPrepareSubmit(true);
    }
  }, [files]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      if (!isEditStatusForm) {
        reset({ title: '', description: '', price: '' });
      }

      setIsPrepareSubmit(false);
    }
  }, [formState, reset]);

  const onSubmit = (data) => {
    if (!isEditStatusForm) {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });

      addAdv({
        title: data.title,
        description: data.description,
        price: data.price,
        files: formData,
      }).unwrap();
    } else {
      updateAdv({
        advId: advInfo.id,
        title: data.title,
        description: data.description,
        price: data.price,
      })
        .unwrap()
        .then(() => {
          if (files.length) {
            files.forEach((file) => {
              const formData = new FormData();
              formData.append('file', file);
              addAdvPicture({ advId: advInfo.id, file: formData });
            });
          }

          if (removableFileArr.length) {
            removableFileArr.forEach((file) => {
              deleteAdvPicture({ advId: advInfo.id, file });
            });
          }
        });
    }
  };

  useOnClickOutside(formRef, () => {
    closeForm();
  });

  return (
    <S.FormWrapper ref={formRef}>
      <S.TitleWrapper>
        {isEditStatusForm ? (
          <h2>Редактировать объявление</h2>
        ) : (
          <h2>Новое объявление</h2>
        )}
        <CloseFormButton onClick={closeForm} />
      </S.TitleWrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <label htmlFor="adv-name">Название</label>
          <S.FormInputName
            name="adv-name"
            placeholder="Введите название"
            type="text"
            defaultValue={isEditStatusForm ? advInfo.title : ''}
            {...register('title', {
              required: 'Введите название',
              onChange: (e) => {
                onChangeTextHandler(e);
              },
            })}
          />
        </S.InputWrapper>
        {errors.title && (
          <S.ErrorSubmitText>{errors.title.message}</S.ErrorSubmitText>
        )}
        <S.InputWrapper>
          <label htmlFor="adv-description">Описание</label>
          <S.FormInputDescription
            name="adv-description"
            placeholder="Введите описание"
            type="text"
            defaultValue={isEditStatusForm ? advInfo.description : ''}
            {...register('description', {
              onChange: (e) => {
                onChangeTextHandler(e);
              },
            })}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="adv-photo">
            Фотографии товара{' '}
            <span style={{ color: '#0000004D' }}>не более 5 фотографий</span>
          </label>
          <S.FormInputFile
            name="adv-photo"
            type="file"
            accept="image/*"
            ref={hiddenFileInputRef}
            onChange={handleChange}
            multiple
          />

          <S.AdvImagesWrapper>
            {previewImages &&
              previewImages.map((url, i) => (
                <S.PreviewAdvImageWrapper
                  key={i}
                  onClick={previewImageHandleDelete}
                >
                  <S.PreviewAdvImage src={url} alt="Фото объявления" />
                </S.PreviewAdvImageWrapper>
              ))}

            {isPlusFile && (
              <div onClick={fileInputHandleClick}>
                <S.PlusIcon src={plug} alt="Добавить изображение" />
              </div>
            )}
          </S.AdvImagesWrapper>
        </S.InputWrapper>
        {isErrorFiles && (
          <S.ErrorSubmitText>Загрузите до 5 фотографий</S.ErrorSubmitText>
        )}
        <S.InputWrapper>
          <label htmlFor="adv-price">Цена</label>
          <S.FormInputPriceWrapper>
            <S.FormInputPrice
              name="adv-price"
              type="number"
              defaultValue={isEditStatusForm ? advInfo.price : ''}
              {...register('price', {
                required: 'Укажите цену',
                onChange: (e) => {
                  onChangeTextHandler(e);
                },
              })}
            />
          </S.FormInputPriceWrapper>
        </S.InputWrapper>
        {errors.price && (
          <S.ErrorSubmitText>{errors.price.message}</S.ErrorSubmitText>
        )}
        <div>
          {isEditStatusForm ? (
            <MainButton active={isPrepareSubmit} type="submit">
              Сохранить
            </MainButton>
          ) : (
            <MainButton active type="submit">
              Опубликовать
            </MainButton>
          )}
        </div>
        <SubmitingForm loading={isAdding || isUpdate} />
      </S.Form>
    </S.FormWrapper>
  );
}

export default AdvForm;
