/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EffectFade, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Overlay, StyledContainer } from '../../global-styles';
import * as S from './styles';
import AdvReviews from '../../components/adv-reviews';
import MainButton from '../../components/main-button';
import AdvForm from '../../components/adv-form';
import AvatarUserPlug from '../../assets/static/user_plug.png';
import formatSellsFrom from '../../utils/formateSellsFrom';
import formateAdvDate from '../../utils/formateAdvDate';
import formatePrice from '../../utils/formatePrice';
import noImagePic from '../../assets/static/no_image.jpg';
import {
  useGetAdvByIdQuery,
  useGetCommentsByAdvIdQuery,
  useDeleteAdvMutation,
} from '../../redux/services/advs';
import PhoneButton from '../../components/phone-button';
import LoadingPage from '../../components/loading-page';
import arrowBack from '../../assets/static/arrow_back.svg';
import { useShowAdvFormContext } from '../../context/showAdvForm';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function AdvPage() {
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess } = useGetAdvByIdQuery(
    Number(id)
  );

  const getCommentsByAdvId = useGetCommentsByAdvIdQuery(Number(id));

  const { userInfo } = useSelector((state) => state.user);

  const isMyAdv = Number(data?.user_id) === Number(userInfo?.id);

  const { ShowAdvFormContext, toggleShowAdvForm } = useShowAdvFormContext();

  const [visibleReviews, setVisibleReviews] = useState(false);
  const [visibleEditAdvForm, setVisibleEditAdvForm] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const [deleteAdv] = useDeleteAdvMutation();

  const navigate = useNavigate();

  const deleteAdvHandler = () => {
    deleteAdv(id)
      .unwrap()
      .then(() => {
        navigate('/');
      });
  };

  const openFormAdv = () => {
    setVisibleEditAdvForm(true);
    toggleShowAdvForm();
  };

  const closeFormAdv = () => {
    setVisibleEditAdvForm(false);
    toggleShowAdvForm();
  };

  const openFormReviews = () => {
    setVisibleReviews(true);
    toggleShowAdvForm();
  };

  const closeFormReviews = () => {
    setVisibleReviews(false);
    toggleShowAdvForm();
  };

  if (isError) {
    return (
      <StyledContainer>
        <p>Упс, что-то пошло не так...</p>
      </StyledContainer>
    );
  }

  if (isLoading) {
    return <LoadingPage loading={isLoading} />;
  }

  return (
    <S.Main>
      <S.MobAdvImagesBlock>
        <S.ArrowBackBtn
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          isFormVisible={ShowAdvFormContext}
        >
          <img src={arrowBack} alt="arrow back" />
        </S.ArrowBackBtn>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop
          effect="fade"
          modules={[EffectFade, Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {isSuccess &&
            data?.images.map((slide) => (
              <SwiperSlide key={slide.id}>
                <S.AdvSlideImgWrapper>
                  <S.AdvSlideImg
                    src={`${process.env.REACT_APP_API_URL}/${slide?.url}`}
                    alt={data?.title}
                  />
                </S.AdvSlideImgWrapper>
              </SwiperSlide>
            ))}
        </Swiper>
      </S.MobAdvImagesBlock>
      <StyledContainer>
        <S.AdvInfo>
          <S.AdvImagesBlock>
            <S.CurrentAdvImageWrapper>
              <S.CurrentAdvImage
                src={
                  data?.images?.length
                    ? `${process.env.REACT_APP_API_URL}/${data?.images[activeImg]?.url}`
                    : noImagePic
                }
                alt={data?.title}
              />
            </S.CurrentAdvImageWrapper>

            {data?.images?.length > 1 && (
              <S.AdvImagesList>
                {data?.images?.map((img, i) => (
                  <S.AdvImageWrapper
                    key={img?.id}
                    onClick={() => setActiveImg(i)}
                    active={i === activeImg}
                  >
                    <S.AdvImage
                      src={`${process.env.REACT_APP_API_URL}/${img?.url}`}
                      alt={data?.title}
                    />
                  </S.AdvImageWrapper>
                ))}
              </S.AdvImagesList>
            )}
          </S.AdvImagesBlock>
          <div>
            <S.AdvTitle>{data?.title}</S.AdvTitle>
            <S.AdvDataRelease>
              {formateAdvDate(data?.created_on)}
            </S.AdvDataRelease>
            <S.AdvLocation>{data?.user?.city}</S.AdvLocation>

            <S.AdvReviews onClick={openFormReviews}>
              {getCommentsByAdvId?.data?.length ? (
                `Отзывов: ${getCommentsByAdvId?.data?.length}`
              ) : (
                <span>Оставить отзыв</span>
              )}
            </S.AdvReviews>

            <S.AdvPrice>{formatePrice(data?.price)} ₽</S.AdvPrice>
            {isMyAdv ? (
              <S.AdvSettingsButtons>
                <MainButton type="button" onClick={openFormAdv}>
                  Редактировать
                </MainButton>
                <MainButton type="button" onClick={deleteAdvHandler}>
                  Снять с публикации
                </MainButton>
              </S.AdvSettingsButtons>
            ) : (
              <PhoneButton phone={data?.user?.phone} />
            )}

            <S.SellerInfo>
              <S.SellerAvatar
                src={
                  `${process.env.REACT_APP_API_URL}/${data?.user?.avatar}` ||
                  AvatarUserPlug
                }
                alt="seller avatar"
              />
              <div>
                <S.SellerName to={`/profile/${data?.user_id}`}>
                  {data?.user?.name}
                </S.SellerName>
                <S.SellerActivity>
                  Продает товары с{' '}
                  {data?.user?.sells_from &&
                    formatSellsFrom(data?.user?.sells_from)}
                </S.SellerActivity>
              </div>
            </S.SellerInfo>
          </div>
        </S.AdvInfo>
        <div>
          <h2>Описание товара</h2>
          <S.AdvDescription>
            {data?.description || 'У данного товара нет описания'}
          </S.AdvDescription>
        </div>
      </StyledContainer>
      {visibleReviews && (
        <Overlay>
          <AdvReviews
            closeForm={closeFormReviews}
            advId={id}
            getCommentsByAdvId={getCommentsByAdvId}
          />
        </Overlay>
      )}

      {visibleEditAdvForm && (
        <Overlay>
          <AdvForm closeForm={closeFormAdv} advInfo={data} isEditStatusForm />
        </Overlay>
      )}
    </S.Main>
  );
}

export default AdvPage;
