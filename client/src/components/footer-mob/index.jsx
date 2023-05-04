import React from 'react';
import * as S from './styles';
import homeIcon from '../../assets/static/footer-mob-icons/home.svg';
import addAdvIcon from '../../assets/static/footer-mob-icons/addAdv.svg';
import profileIcon from '../../assets/static/footer-mob-icons/profile.svg';

function FooterMob() {
  return (
    <S.FooterMobBlock>
      <S.FooterIconBtn type="button">
        <img src={homeIcon} alt="home icon" />
      </S.FooterIconBtn>
      <S.FooterIconBtn type="button">
        <img src={addAdvIcon} alt="add adv icon" />
      </S.FooterIconBtn>
      <S.FooterIconBtn type="button">
        <img src={profileIcon} alt="profile icon" />
      </S.FooterIconBtn>
    </S.FooterMobBlock>
  );
}

export default FooterMob;
