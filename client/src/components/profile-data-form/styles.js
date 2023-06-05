import styled from 'styled-components';
import { device } from '../../utils/consts';

export const DataForm = styled.form`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    column-gap: 30px;
    margin-bottom: 30px;
  }

  @media ${device.desktop} {
    column-gap: 50px;
    margin-bottom: 70px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ChangeAvatarBtn = styled.button`
  color: #009ee4;
  font-size: 16px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const TextData = styled.div`
  max-width: 614px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  position: relative;

  @media ${device.desktop} {
    row-gap: 20px;
  }
`;

export const InputsNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  @media ${device.tablet} {
    flex-direction: row;
    column-gap: 14px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 4px;
`;

export const DataFormLabel = styled.label`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #c4c4c4;
`;

export const DataFormInput = styled.input`
  display: inline-block;
  padding: 13px 19px;

  :focus + ${DataFormLabel} {
    color: #009ee4;
  }
`;

export const DataFormInputFile = styled.input`
  display: none;
`;

export const ButtonWrapper = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const ErrorSubmitText = styled.span`
  color: lightcoral;
  max-width: 350px;
  text-align: center;

  @media ${device.tablet} {
    margin-left: 10px;
  }
`;
