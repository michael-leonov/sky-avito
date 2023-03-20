/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';
import logo from '../../assets/static/logo.svg';
import MainButton from '../main-button';
import { StyledContainer, Overlay } from '../../global-styles';
import FoundAdv from './found-adv';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

function SearchBar({ advs, setAdvs }) {
  const InputWrapperRef = useRef();
  const InputRef = useRef();

  const filterSearchCount = 5;
  const maxCountAdvs = 10;

  const [isSearch, setIsSearch] = useState(false);
  const [seachValue, setSearchValue] = useState('');
  const [bufferSearchValue, setBufferSearchValue] = useState('');
  const [countSlice, setCountSlice] = useState(filterSearchCount);
  const [isClickShowMore, setIsClickShowMore] = useState(false);

  const filtredAdvs = advs?.filter((adv) =>
    adv?.title.toLowerCase().includes(seachValue.toLowerCase())
  );

  const onChangeHandler = (e) => {
    const { target } = e;
    setSearchValue(target.value);
    setBufferSearchValue(target.value);
    setCountSlice(filterSearchCount);
  };

  const onClickHandler = () => {
    setIsSearch(false);
    setSearchValue('');
    setBufferSearchValue('');
    setCountSlice(filterSearchCount);
  };

  const onFocusHanlder = (e) => {
    const { target } = e;
    target.value = bufferSearchValue;
    setSearchValue(target.value);
    setIsSearch(true);
  };

  const onClickFindHandler = () => {
    setIsSearch(false);
    setSearchValue('');
    InputRef.current.value = '';
    setCountSlice(filterSearchCount);
    setBufferSearchValue('');
    setIsClickShowMore(false);

    setAdvs(filtredAdvs);
  };

  useOnClickOutside(InputWrapperRef, () => {
    setIsSearch(false);
    setSearchValue('');
    InputRef.current.value = '';
  });

  useEffect(() => {
    // console.log(filtredAdvs);
    // setAdvs(filtredAdvs);
  }, [filtredAdvs]);

  return (
    <S.Search>
      <StyledContainer>
        <S.SearchWrapper>
          <S.LogoWrapper>
            <img src={logo} alt="logo" />
          </S.LogoWrapper>

          <S.SearchBlock>
            <S.SearchInputWrapper ref={InputWrapperRef}>
              <S.SearchInput
                placeholder="Поиск по объявлениям"
                onFocus={onFocusHanlder}
                onChange={onChangeHandler}
                ref={InputRef}
                isSearch={isSearch}
                seachValue={seachValue}
              />
              {seachValue !== '' && (
                <S.FoundAdvsWrapper isSearch={isSearch}>
                  <span>
                    {filtredAdvs.length
                      ? `Найдено: ${filtredAdvs.length}`
                      : 'Объявлений не найдено'}
                  </span>

                  {filtredAdvs &&
                    filtredAdvs
                      .slice(0, countSlice)
                      .slice(0, maxCountAdvs)
                      .map((adv) => (
                        <FoundAdv
                          key={adv.id}
                          {...adv}
                          onClick={onClickHandler}
                        />
                      ))}
                  {filtredAdvs.length > countSlice &&
                    filtredAdvs.length !== 0 && (
                      <S.ShowAllAdvs
                        onClick={() => {
                          setCountSlice(filtredAdvs.length);
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
            <S.ButtonWrapper>
              <MainButton
                onClick={onClickFindHandler}
                active={filtredAdvs?.length > 0}
              >
                Найти
              </MainButton>
            </S.ButtonWrapper>
          </S.SearchBlock>
        </S.SearchWrapper>
      </StyledContainer>

      {isSearch && <Overlay />}
    </S.Search>
  );
}

export default SearchBar;
