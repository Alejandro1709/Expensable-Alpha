import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, typography } from '../../styles';
import { NavLink } from 'react-router-dom';

const StyledAnchor = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  ${typography.text.md};
  color: ${colors.gray[600]};
  font-weight: 500;
  align-items: center;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${colors.pink[100]};
  }
  &:focus {
    outline: 1px solid ${colors.pink[500]};
  }

  @media screen and (max-width: 568px) {
    border-radius: 0;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 0.375rem;

  @media screen and (max-width: 568px) {
    border-radius: 0;
  }
`;

function SidebarNavItem({ name, icon, ...rest }) {
  return (
    <StyledLink
      {...rest}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
          backgroundColor: colors.pink[400],
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.pink[400],
          },
          '&:visited': {
            color: colors.white,
          },
        };
      }}
    >
      <StyledAnchor {...rest}>
        {icon}
        {name}
      </StyledAnchor>
    </StyledLink>
  );
}

SidebarNavItem.propTypes = {
  current: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default SidebarNavItem;
