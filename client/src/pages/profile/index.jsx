/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileDataForm from '../../components/profile-data-form';
import { StyledContainer } from '../../global-styles';
import Adv from '../../components/adv';
import * as S from './styles';
import formatSellsFrom from '../../utils/formateSellsFrom';
import { useGetAdvsQuery } from '../../redux/services/advs';
import PhoneButton from '../../components/phone-button';
import LoadingPage from '../../components/loading-page';

function Profile() {
  const { userInfo } = useSelector((state) => state.user);

  const { id } = useParams();

  const { data, isLoading, isError } = useGetAdvsQuery({ userId: Number(id) });

  const isEmptyList = !isLoading && !data?.length;

  const isMyProfile = userInfo?.id === Number(id);

  const [sellerInfo, setSellerInfo] = useState({});

  // В бэке нет ручки для получения пользователя по id, приходится так
  const fetchProfileSeller = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/all`
    );

    const seller = data.find((user) => user.id === Number(id));

    setSellerInfo(seller);
  };

  useEffect(() => {
    fetchProfileSeller();
  }, []);

  if (isLoading) {
    return <LoadingPage loading={isLoading} />;
  }

  if (isError) {
    return (
      <StyledContainer>
        <p>Упс, что-то пошло не так...</p>
      </StyledContainer>
    );
  }

  return (
    <S.Main>
      <StyledContainer>
        {isMyProfile ? (
          <>
            <h1>Здравствуйте, {userInfo?.name || userInfo?.email}!</h1>
            <h2>Настройки профиля</h2>
            <ProfileDataForm />
            <h2>Мои товары</h2>
            {isEmptyList ? (
              <p>Товары отсутствуют</p>
            ) : (
              <S.AdvList>
                {data && data.map((adv) => <Adv key={adv.id} {...adv} />)}
              </S.AdvList>
            )}
          </>
        ) : (
          <>
            <h1>Профиль продавца</h1>
            <S.SellerInfoBlock>
              <div>
                <img
                  src={`${process.env.REACT_APP_API_URL}/${sellerInfo?.avatar}`}
                  alt="seller avatar"
                  width={170}
                />
              </div>
              <div>
                <S.SellerName>{`${sellerInfo?.name} ${sellerInfo?.surname}`}</S.SellerName>
                <S.SellerLocation>{sellerInfo?.city}</S.SellerLocation>
                <S.SellerActivity>
                  Продает товары с{' '}
                  {sellerInfo?.sells_from &&
                    formatSellsFrom(sellerInfo?.sells_from)}
                </S.SellerActivity>
                <PhoneButton phone={sellerInfo?.phone} />
              </div>
            </S.SellerInfoBlock>
            <h2>Товары продавца</h2>
            {isEmptyList ? (
              <p>Товары отсутствуют</p>
            ) : (
              <S.AdvList>
                {data && data.map((adv) => <Adv key={adv.id} {...adv} />)}
              </S.AdvList>
            )}
          </>
        )}
      </StyledContainer>
    </S.Main>
  );
}

export default Profile;
