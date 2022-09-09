import { useState } from 'react';
import SidebarNavItem from './sidebar-nav-item';
import PropTypes, { arrayOf } from 'prop-types';
import styled from '@emotion/styled';

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 340px;
  flex-shrink: 0;
  border-right: 1px solid #eee;
`;
function SidebarNav({ initialNavigation }) {
  const [navigation] = useState(initialNavigation);

  return (
    <StyledNav>
      {navigation.map((nav) => (
        <SidebarNavItem key={nav.name} {...nav} />
      ))}
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
