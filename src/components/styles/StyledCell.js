import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '1px solid')};
  border-bottom-color: rgba($rgba(${props => props.color}, 0.1);
  border-bottom-color: rgba($rgba(${props => props.color}, 1);
  border-bottom-color: rgba($rgba(${props => props.color}, 2);
  border-bottom-color: rgba($rgba(${props => props.color}, 0.3);

`

export const TestCell = styled.div`
border:3px solid green;
`
