import { useContext } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import MonthPickerContext from '../../context/monthPickerContext';
import { colors } from '../../styles';
import Button from '../Button';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  user-select: none;
  align-items: center;
  margin-bottom: 1rem;
`;

const MonthContainer = styled(Button)`
  cursor: default;
  min-width: 136px;
  &:hover {
    background-color: ${colors.gray[200]};
  }
`;

function MonthPicker() {
  const { label, onLeftClick, onRightClick } = useContext(MonthPickerContext);
  return (
    <Wrapper>
      <Button
        size='sm'
        rounded
        icon={<FiChevronLeft />}
        onClick={onLeftClick}
      />
      <MonthContainer size='sm' as='div'>
        {label}
      </MonthContainer>
      <Button
        size='sm'
        rounded
        icon={<FiChevronRight />}
        onClick={onRightClick}
      />
    </Wrapper>
  );
}

export default MonthPicker;
