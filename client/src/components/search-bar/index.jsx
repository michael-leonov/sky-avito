/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as S from './styles';
import logo from '../../assets/static/logo.svg';
import MainButton from '../main-button';
import { Overlay } from '../../global-styles';
import FoundAdv from './found-adv';
import { filterAdv } from '../../redux/slices/filterAdvAction';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import mobLogo from '../../assets/static/mob_logo_header.svg';
import useMediaQuery from '../../hooks/useMediaQuery';
import { HOME_ROUTE, device } from '../../utils/consts';
import { useShowAdvFormContext } from '../../context/showAdvForm';

function SearchBar({ advs, setIsSearch }) {
  const isNoMobile = useMediaQuery(device.tablet);

  const location = useLocation();

  const InputWrapperRef = useRef();
  const InputRef = useRef();

  const filterSearchCount = 5;
  const maxCountAdvs = 10;

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [bufferSearchValue, setBufferSearchValue] = useState('');
  const [countSlice, setCountSlice] = useState(filterSearchCount);
  const [isClickShowMore, setIsClickShowMore] = useState(false);

  const { ShowAdvFormContext } = useShowAdvFormContext();

  const filteredAdvs = advs?.filter((adv) =>
    adv?.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { target } = e;
    setSearchValue(target.value);
    setBufferSearchValue(target.value);
    setCountSlice(filterSearchCount);
  };

  const onClickHandler = () => {
    setIsSearchActive(false);
    setSearchValue('');
    setBufferSearchValue('');
    setCountSlice(filterSearchCount);
  };

  const onFocusHanlder = (e) => {
    const { target } = e;
    target.value = bufferSearchValue;
    setSearchValue(target.value);
    setIsSearchActive(true);
  };

  const onClickFindHandler = () => {
    dispatch(filterAdv(searchValue, advs));

    setIsSearchActive(false);
    setSearchValue('');
    InputRef.current.value = '';
    setCountSlice(filterSearchCount);
    setBufferSearchValue('');
    setIsClickShowMore(false);

    setIsSearch(true);
  };

  useOnClickOutside(InputWrapperRef, () => {
    setIsSearchActive(false);
  });

  return (
    <S.Search>
      <S.SearchWrapper>
        <S.LogoWrapper isFormVisible={ShowAdvFormContext}>
          <S.MobileLogo src={mobLogo} alt="mobile logo" />
          <S.Logo src={logo} alt="logo" />
        </S.LogoWrapper>

        {location.pathname === HOME_ROUTE && (
          <S.SearchBlock>
            <S.SearchInputWrapper
              ref={InputWrapperRef}
              isFormVisible={ShowAdvFormContext}
            >
              <S.SearchInput
                placeholder={!isNoMobile ? 'Поиск' : 'Поиск по объявлениям'}
                onFocus={onFocusHanlder}
                onChange={onChangeHandler}
                ref={InputRef}
                isSearch={isSearchActive}
                seachValue={searchValue}
              />
              {isSearchActive && (
                <S.FoundAdvsWrapper
                  isSearch={isSearchActive}
                  isFormVisible={ShowAdvFormContext}
                >
                  <span>
                    {filteredAdvs.length
                      ? `Найдено: ${filteredAdvs.length}`
                      : 'Объявлений не найдено'}
                  </span>

                  {filteredAdvs &&
                    filteredAdvs
                      .slice(0, countSlice)
                      .slice(0, maxCountAdvs)
                      .map((adv) => (
                        <FoundAdv
                          key={adv.id}
                          {...adv}
                          onClick={onClickHandler}
                        />
                      ))}
                  {filteredAdvs.length > countSlice &&
                    filteredAdvs.length !== 0 && (
                      <S.ShowAllAdvs
                        onClick={() => {
                          setCountSlice(filteredAdvs.length);
                          setIsClickShowMore(true);
                        }}
                      >
                        Показать еще (будет показано {maxCountAdvs} первых
                        найденных объявлений)
                      </S.ShowAllAdvs>
                    )}

                  {isClickShowMore && countSlice > maxCountAdvs && (
                    <span>
                      Чтобы посмотреть все найденные объявления - нажмите
                      &quot;Найти&quot;
                    </span>
                  )}
                </S.FoundAdvsWrapper>
              )}
            </S.SearchInputWrapper>
            <S.ButtonWrapper isFormVisible={ShowAdvFormContext}>
              <MainButton
                onClick={onClickFindHandler}
                active={filteredAdvs?.length > 0}
              >
                Найти
              </MainButton>
            </S.ButtonWrapper>
          </S.SearchBlock>
        )}
      </S.SearchWrapper>

      {isSearchActive && <Overlay />}
    </S.Search>
  );
}

export default SearchBar;
