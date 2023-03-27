/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import logo from '../../assets/static/logo.svg';
import MainButton from '../main-button';
import { StyledContainer, Overlay } from '../../global-styles';
import FoundAdv from './found-adv';
import { filterAdv } from '../../redux/slices/filterAdvAction';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

function SearchBar({ advs, setIsSearch }) {
  const InputWrapperRef = useRef();
  const InputRef = useRef();

  const filterSearchCount = 5;
  const maxCountAdvs = 10;

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [bufferSearchValue, setBufferSearchValue] = useState('');
  const [countSlice, setCountSlice] = useState(filterSearchCount);
  const [isClickShowMore, setIsClickShowMore] = useState(false);

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
                isSearch={isSearchActive}
                seachValue={searchValue}
              />
              {searchValue !== '' && (
                <S.FoundAdvsWrapper isSearch={isSearchActive}>
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
            <S.ButtonWrapper>
              <MainButton
                onClick={onClickFindHandler}
                active={filteredAdvs?.length > 0}
              >
                Найти
              </MainButton>
            </S.ButtonWrapper>
          </S.SearchBlock>
        </S.SearchWrapper>
      </StyledContainer>

      {isSearchActive && <Overlay />}
    </S.Search>
  );
}

export default SearchBar;
