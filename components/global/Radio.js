import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';


const Ripple = keyframes`

    0% {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0);
    }
    
    50% { 
      box-shadow: 0px 0px 0px 6px rgba(0, 0, 0, 0.1);
    }
    
    100% {
      box-shadow: 0px 0px 0px 7px rgba(0, 0, 0, 0);
    }
`

const Radio = styled.div`

margin: 16px 0;
    
&.radio-inline {
    display: inline-block;
}

input[type="radio"] {
    display: none;
    &:checked + label:before {
        border-color: ${(props) => props.theme.colors.primaryBrand};
        animation: ${Ripple} 0.3s linear forwards;   
    }
    &:checked + label:after {
        transform: scale(1);
    }
}

label {
    
    display: inline-block;
    min-height: 24px;
    position: relative;
    padding-top: 6px;
    padding-left: 40px;
    padding-right: 0;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;
    &:before, &:after {
        position: absolute;   
        background: ${(props) => props.theme.colors.accent};         
        content: '';  
        border-radius: 50%;
        transition: all .3s ease;
        transition-property: transform, border-color;
    }
    &:before {
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border: 2px solid ${(props) => props.theme.colors.primaryBrand};
    }
    &:after {
        top: calc(24px/2 - 15/2);
        left: calc(24px/2 - 12px/2);
        width:16px;
        height:16px;
        transform: scale(0);
        background:${(props) => props.theme.colors.primaryBrand};                 

    }
}



`

const RadioButton = (props) => {
    return (
        <Radio className="radio-inline">
            <input
                id={props.id}
                onChange={props.changed}
                value={props.value}
                type="radio"
                checked={props.isSelected}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </Radio>
    );
};

RadioButton.propTypes = {};

export default RadioButton;
