import React, { useState, useEffect } from 'react';
import Adv from '../../components/adv';
import { StyledContainer } from '../../global-styles';
import * as S from './styles';
import { useGetAdvsQuery } from '../../redux/services/advs';
import SearchBar from '../../components/search-bar';
import LoadingPage from '../../components/loading-page';

function Home() {
  const [isSorting, setIsSorting] = useState(false);

  let getAdvQuery;

  if (isSorting) {
    getAdvQuery = useGetAdvsQuery({ sorting: 'new' });
  } else {
    getAdvQuery = useGetAdvsQuery();
  }

  const { data, isLoading, isError, isFetching } = getAdvQuery;

  // todo: передача филтрованного массива в state advs

  const [advs, setAdvs] = useState(data);

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
        <SearchBar advs={data} setAdvs={setAdvs} />
        <S.TitleWrapper>
          <S.Title>Объявления</S.Title>
          {!isLoading && data?.length > 1 && (
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
            {data && data.map((adv) => <Adv key={adv.id} {...adv} />)}
          </S.AdvList>
        )}
      </StyledContainer>
    </S.Main>
  );
}

export default Home;
