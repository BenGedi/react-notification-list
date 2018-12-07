import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCheckbox = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
`

const checkbox = ({label = 'Checkbox', changed=() =>{}}) => 
    <StyledCheckbox>
        <input type="checkbox" onChange={changed} className="checkbox-input" value="" />
        <span>{label}</span>
    </StyledCheckbox>

checkbox.propTypes = {
    label: PropTypes.string,
    changed: PropTypes.func
}

export default checkbox;