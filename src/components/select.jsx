import { useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as DownArrow } from '../public/components/down-arrow.svg';

function Select({ select, callback }) {
  const [open, setOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(select[0].name);

  const handleChange = (el) => {
    setSelectedName(el.name);
    callback(el.value);
  };

  return (
    <SelectWrapper onClick={() => setOpen(!open)}>
      {selectedName}
      {open && (
        <Options>
          {select.map((el, i) => (
            <li key={i} onClick={() => handleChange(el)}>
              {el.name}
            </li>
          ))}
        </Options>
      )}
      <DownArrow width="20" height="20" />
    </SelectWrapper>
  );
}

export default Select;

const SelectWrapper = styled.button`
  position: relative;
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid var(--secondary-200);
  border-radius: 12px;
  background-color: transparent;
  padding: 12px 20px;
`;

const Options = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: inherit;
  box-sizing: border-box;
  border: 1px solid var(--secondary-200);
  border-radius: 12px;
  padding: 6px;
  background-color: #fff;
  list-style: none;
`;
