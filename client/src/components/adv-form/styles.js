import styled from 'styled-components';
import { device } from '../../utils/consts';

export const FormWrapper = styled.div`
  border-radius: 12px;
  width: 95%;
  padding: 10px;
  background-color: #fff;
  z-index: 3;
  max-height: 450px;
  overflow-y: scroll;

  @media ${device.tablet} {
    width: 600px;
    max-height: none;
    overflow-y: auto;
  }

  @media ${device.desktop} {
    position: relative;

    padding: 20px 50px 42px 50px;
    z-index: 2;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const FormInputName = styled.input`
  padding: 10px 17px;

  @media ${device.desktop} {
    padding: 13px 20px;
  }
`;

export const FormInputDescription = styled.input`
  padding: 10px 17px;

  @media ${device.desktop} {
    padding: 13px 20px 163px 20px;
  }
`;

export const FormInputFile = styled.input`
  display: none;
`;

export const AdvImagesWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const PreviewAdvImageWrapper = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  position: relative;

  ::before {
    content: 'x';
    position: absolute;
    color: white;
    top: 35%;
    left: 56%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
    height: 30px;
    width: 30px;
    font-size: 40px;
  }

  ::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  :hover {
    ::before,
    ::after {
      opacity: 1;
    }
  }
`;

export const PreviewAdvImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PlusIcon = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const FormInputPriceWrapper = styled.div`
  max-width: 200px;
  position: relative;

  ::after {
    content: '₽';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const FormInputPrice = styled.input`
  width: 100%;
  padding: 10px 17px;

  @media ${device.desktop} {
    padding: 13px 40px 13px 20px;
  }
`;

export const ErrorSubmitText = styled.span`
  color: lightcoral;
`;
