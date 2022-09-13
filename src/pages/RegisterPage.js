import React from 'react';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 400px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 80%;
  gap: 1rem;
  flex-direction: column;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.gray[500]};
`;

const StyledInput = styled.input`
  border: 1px solid ${colors.gray[200]};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 8px 12px;
  border-radius: 6px;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  color: white;
  text-transform: uppercase;
  background-color: #f490b1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e76a94;
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #f48fb1,
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

function RegisterPage() {
  return (
    <StyledLoginPage>
      <StyledContainer>
        <h1>Register</h1>
        <StyledForm>
          <StyledGroup>
            <StyledLabel htmlFor='email'>Email</StyledLabel>
            <StyledInput
              type='email'
              name='email'
              id='email'
              placeholder='email@example.com'
            />
          </StyledGroup>
          <StyledGroup>
            <StyledLabel htmlFor='password'>Password</StyledLabel>
            <StyledInput
              type='password'
              name='password'
              id='password'
              placeholder='******'
            />
          </StyledGroup>
          <StyledGroup>
            <StyledLabel htmlFor='first_name'>First Name</StyledLabel>
            <StyledInput
              type='text'
              name='first_name'
              id='first_name'
              placeholder='John'
            />
          </StyledGroup>
          <StyledGroup>
            <StyledLabel htmlFor='last_name'>Last Name</StyledLabel>
            <StyledInput
              type='text'
              name='last_name'
              id='last_name'
              placeholder='Doe'
            />
          </StyledGroup>
          <StyledGroup>
            <StyledLabel htmlFor='phone'>Phone</StyledLabel>
            <StyledInput
              type='text'
              name='phone'
              id='phone'
              placeholder='987986889'
            />
          </StyledGroup>
          <StyledButton type='submit'>Create Account</StyledButton>
        </StyledForm>
        <NavLink to='/login'>Login</NavLink>
      </StyledContainer>
    </StyledLoginPage>
  );
}

export default RegisterPage;
