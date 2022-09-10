import React, { Fragment } from 'react';
import {
  AiOutlineClose,
  AiOutlinePlus,
  AiFillBank,
  AiFillCar,
  AiFillGift,
} from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { ImAidKit } from 'react-icons/im';
import { FaGamepad } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { IoSchoolSharp } from 'react-icons/io5';
import { colors } from '../../styles';
import Button from '../Button/button';
import styled from '@emotion/styled';
import ColorList from '../ColorList/color-list';
import IconList from '../IconList/icon-list';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  color: ${colors.gray[400]};
  border: 2px dashed ${colors.gray[400]};
  cursor: pointer;
`;

const StyledBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledModal = styled.form`
  width: 272px;
  background-color: white;
  z-index: 100;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFormGroup = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #d3d3d3;
  outline: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

function CreateCategory({ showCatModal, isModalOpen }) {
  const pallete = [
    { color: '#EF4444', name: 'red' },
    { color: '#F97316', name: 'orange' },
    { color: '#F59E0B', name: 'yellow' },
    { color: '#10B981', name: 'green' },
    { color: '#14B8A6', name: 'teal' },
    { color: '#06B6D4', name: 'cyan' },
    { color: '#0EA5E9', name: 'lightBlue' },
    { color: '#3B82F6', name: 'blue' },
  ];

  const icons = [
    { Icon: AiFillBank, name: 'bank' },
    { Icon: HiShoppingCart, name: 'shopping' },
    { Icon: ImAidKit, name: 'health' },
    { Icon: FaGamepad, name: 'games' },
    { Icon: IoNewspaperOutline, name: 'notes' },
    { Icon: IoSchoolSharp, name: 'school' },
    { Icon: AiFillCar, name: 'travel' },
    { Icon: AiFillGift, name: 'gift' },
  ];

  return (
    <Fragment>
      <StyledButton onClick={showCatModal}>
        <AiOutlinePlus size={24} />
      </StyledButton>
      {isModalOpen && (
        <StyledBackground>
          <StyledModal className='new-category'>
            <StyledWrapper className='new-category__wrapper'>
              <StyledHeader className='wrapper__header'>
                <h2>New Category</h2>
                <div onClick={showCatModal}>
                  <AiOutlineClose />
                </div>
              </StyledHeader>
              <StyledFormGroup className='wrapper__input'>
                <label htmlFor='name'>NAME</label>
                <StyledInput type='text' name='name' id='name' />
              </StyledFormGroup>
              <ColorList colors={pallete} />
              <IconList icons={icons} />
              <Button
                primary
                type='submit'
                isFullWidth
                color={colors.pink[600]}
                altColor={colors.white}
              >
                Create
              </Button>
            </StyledWrapper>
          </StyledModal>
        </StyledBackground>
      )}
    </Fragment>
  );
}

export default CreateCategory;
