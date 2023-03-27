import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Adv from '../../components/adv';
import { StyledContainer } from '../../global-styles';
import * as S from './styles';
import { useGetAdvsQuery } from '../../redux/services/advs';
import SearchBar from '../../components/search-bar';
import LoadingPage from '../../components/loading-page';

function Home() {
  const [isSorting, setIsSorting] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const { filteredAdvs } = useSelector((state) => state.filter);

  let getAdvQuery;

  if (isSorting) {
    getAdvQuery = useGetAdvsQuery({ sorting: 'new' });
  } else {
    getAdvQuery = useGetAdvsQuery();
  }

  // todo: сортировать отфилтрованный массив

  const { data, isLoading, isError, isFetching } = getAdvQuery;

  const isEmptyList = !isLoading && !data?.length;

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
      <StyledContainer>
        <SearchBar advs={data} setIsSearch={setIsSearch} />
        <S.TitleWrapper>
          <S.Title>Объявления</S.Title>
          {!isLoading &&
            (isSearch ? filteredAdvs.length > 1 : data?.length > 1) && (
              <div>
                <S.SortNewBtn
                  type="button"
                  onClick={() => setIsSorting(!isSorting)}
                  isSorting={isSorting}
                >
                  Сначала новые
                </S.SortNewBtn>
              </div>
            )}
        </S.TitleWrapper>
        {isFetching ? (
          <div>Секунду, ищу...</div>
        ) : isEmptyList ? (
          <p>Товары отсутствуют</p>
        ) : (
          <S.AdvList>
            {isSearch
              ? filteredAdvs &&
                filteredAdvs.map((adv) => <Adv key={adv.id} {...adv} />)
              : data && data.map((adv) => <Adv key={adv.id} {...adv} />)}
          </S.AdvList>
        )}
      </StyledContainer>
    </S.Main>
  );
}

export default Home;
