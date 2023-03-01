export const SIGNUP_ROUTE = '/signup';
export const LOGIN_ROUTE = '/login';
export const HOME_ROUTE = '/';
export const ADMIN_ROUTE = '/profile';

const size = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1366px',
  desktop: '1920px',
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
