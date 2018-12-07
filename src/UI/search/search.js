import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {debounce} from 'lodash';

const StyledSearch = styled.input`
    font-variant: tabular-nums;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    outline: none;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all .3s;

    &:hover, &:focus {
        border-color: #40a9ff;
        border-right-width: 1px;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #d9d9d9;
        font-style: italic;
    }
`

class Search extends Component {
    input = React.createRef();
    onChangeHandler = debounce(() => this.props.filter(this.input.current.value), 300)

    render() {
        return  <StyledSearch 
                    type="text" 
                    ref={this.input} 
                    onChange={() => this.onChangeHandler()} 
                    placeholder="Notification description" />
    }
}

Search.propTypes = {
    filter: PropTypes.func
}

export default Search;