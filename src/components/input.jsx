import { css, styled } from 'styled-components';

function Input({
  renderSlot,
  slotDirection = 'right',
  onChange,
  onBlur,
  type,
  name,
  placeholder,
}) {
  return (
    <InputContainer>
      <InputComponent
        slotDirection={slotDirection}
        onChange={onChange}
        type={type}
        name={name}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {renderSlot && (
        <InputButton className="input-button">{renderSlot}</InputButton>
      )}
    </InputContainer>
  );
}

export default Input;

const input = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: var(--gray-100);
  border: 0;
  border-radius: 12px;
  font-size: 16px;
  color: var(--secondary-800);
  padding: 16px 24px;
`;

const inputSlanted = css`
  width: 100%;
  height: 100%;
  max-width: 640px;
  box-sizing: border-box;
  background-color: var(--gray-100);
  border: 0;
  border-radius: 12px;
  font-size: 16px;
  color: var(--secondary-800);
  padding: 0px 10px 0px 40px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
`;

const InputComponent = styled.input`
  ${({ slotDirection }) => {
    if (slotDirection === 'right') {
      return inputSlanted;
    } else {
      return input;
    }
  }}
`;

const InputButton = styled.button`
  position: absolute;
  right: 20px;
  top: 16px;
  background-color: transparent;
  border: 0;
`;
