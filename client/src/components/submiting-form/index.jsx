import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import * as S from './styles';

function SubmitingForm({ loading = false }) {
  if (loading) {
    return (
      <S.SubmitingFormOverlay>
        <ThreeCircles
          height="100"
          width="100"
          color="#009EE4"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </S.SubmitingFormOverlay>
    );
  }
}

export default SubmitingForm;
