import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header';
import ReturnHome from './components/return-home';
import AppRoutes from './routes';
import { GlobalStyle } from './global-styles';
import { checkUser } from './redux/slices/userActions';
import FooterMob from './components/footer-mob';

function App() {
  const { userToken, refreshToken } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken)
      dispatch(
        checkUser({
          access_token: userToken,
          refresh_token: refreshToken,
        })
      );
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <ReturnHome />
      <AppRoutes />
      <FooterMob />
    </>
  );
}

export default App;
