import { useState } from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { FiLogOut } from 'react-icons/fi';
import SidebarNavItem from './sidebar-nav-item';
import PropTypes, { arrayOf } from 'prop-types';
import styled from '@emotion/styled';
import { colors } from '../../styles';
import { BiCategory } from 'react-icons/bi';
import { BsReceiptCutoff } from 'react-icons/bs';
import { GiTargeted } from 'react-icons/gi';

const StyledLogo = styled.div`
  /* display: flex; */
  padding: 0.5rem;

  @media screen and (max-width: 568px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    background-color: white;
  }
`;

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 340px;
  flex-shrink: 0;
  border-right: 1px solid #eee;

  @media screen and (max-width: 568px) {
    display: block;
    padding: 0;
    width: 100%;
    background-color: ${colors.gray[100]};
  }
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #eee;
  margin-top: auto;

  @media screen and (max-width: 568px) {
    display: none;
  }
`;

const StyledActions = styled.div``;

const StyledCurrUser = styled.p`
  color: ${colors.gray[700]};
  font-weight: 500;
`;

const StyledCurrUserEmail = styled.p`
  color: ${colors.gray[600]};
  font-weight: 500;
  font-size: 12px;
`;

const StyledMobileFooter = styled.div`
  display: none;

  @media screen and (max-width: 568px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

function SidebarNav() {
  const [navigation] = useState([
    {
      name: 'Categories',
      to: '/categories',
      icon: <BiCategory />,
    },
    {
      name: 'Transactions',
      to: '/transactions',
      icon: <BsReceiptCutoff />,
    },
    {
      name: 'Budgets',
      to: '/budgets',
      icon: <GiTargeted />,
    },
  ]);

  return (
    <StyledNav>
      <StyledLogo>
        <Logo />
        <StyledMobileFooter>
          <p>Alejandro</p>
          <FiLogOut />
        </StyledMobileFooter>
      </StyledLogo>
      {navigation.map((nav) => (
        <SidebarNavItem key={nav.name} {...nav} />
      ))}
      <StyledFooter>
        <StyledActions>
          <StyledCurrUser>Alejandro La Rosa</StyledCurrUser>
          <StyledCurrUserEmail>alelarosa99@gmail.com</StyledCurrUserEmail>
        </StyledActions>
        <p>Logout</p>
      </StyledFooter>
    </StyledNav>
  );
}

SidebarNav.propTypes = {
  initialNavigation: arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      to: PropTypes.string,
      icon: PropTypes.element,
      current: PropTypes.bool,
    })
  ),
  onItemClick: PropTypes.func,
};

export default SidebarNav;
