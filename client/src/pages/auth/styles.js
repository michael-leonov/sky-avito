import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../utils/consts';

export const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 0 100px;
`;

export const AuthBlock = styled.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media ${device.desktop} {
    row-gap: 42px;
    padding: 45px;
  }
`;

export const AuthLogo = styled.img`
  padding: 10px 0 30px 0;
`;

export const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  @media ${device.desktop} {
    row-gap: 28px;
  }
`;

export const AuthFormInput = styled.input`
  border: 1px solid #d9d9d9;
  padding: 10px 17px;
  outline: none;
  border-radius: 30px;

  :focus {
    outline: none;
    border: 1px solid #009ee4;
  }

  @media ${device.tablet} {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 8px;
    outline: none;
    border-radius: unset;

    :focus {
      outline: none;
      border-bottom: 1px solid #009ee4;
    }
  }
`;

export const ErrorSubmitText = styled.span`
  color: lightcoral;
`;

export const SignUpLink = styled(Link)`
  border: 1px solid #d9d9d9;
  padding: 14px;
  text-decoration: none;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
`;
