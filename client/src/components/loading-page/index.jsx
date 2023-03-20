import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import * as S from './styles';

function LoadingPage({ loading = false }) {
  if (loading) {
    return (
      <S.LoadingPageOverlay>
        <ProgressBar
          height="300"
          width="300"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#0080C1"
          barColor="#009EE4"
          visible={loading}
        />
      </S.LoadingPageOverlay>
    );
  }
}

export default LoadingPage;
