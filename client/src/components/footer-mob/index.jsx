import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './styles';
import homeIcon from '../../assets/static/footer-mob-icons/home.svg';
import addAdvIcon from '../../assets/static/footer-mob-icons/addAdv.svg';
import profileIcon from '../../assets/static/footer-mob-icons/profile.svg';
import { Overlay } from '../../global-styles';
import AdvForm from '../adv-form';
import { useShowAdvFormContext } from '../../context/showAdvForm';

function FooterMob() {
  const { userInfo, userToken } = useSelector((state) => state.user);

  const [visibleAddAdvForm, setVisibleAddAdvForm] = useState(false);

  const { toggleShowAdvForm } = useShowAdvFormContext();

  const openForm = () => {
    setVisibleAddAdvForm(true);
    toggleShowAdvForm();
  };

  const closeForm = () => {
    setVisibleAddAdvForm(false);
    toggleShowAdvForm();
  };

  return (
    <>
      <S.FooterMobBlock>
        <Link to="/">
          <img src={homeIcon} alt="home icon" />
        </Link>
        <S.FooterIconBtn type="button" onClick={openForm}>
          <img src={addAdvIcon} alt="add adv icon" />
        </S.FooterIconBtn>
        <Link
          to={userToken && userInfo?.id ? `/profile/${userInfo?.id}` : '/login'}
        >
          <img src={profileIcon} alt="profile icon" />
        </Link>
      </S.FooterMobBlock>

      {visibleAddAdvForm && (
        <Overlay>
          <AdvForm closeForm={closeForm} isEditStatusForm={false} />
        </Overlay>
      )}
    </>
  );
}

export default FooterMob;
