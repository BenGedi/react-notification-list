import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Search from '../../UI/search/search';
import CheckBox from '../../UI/checkbox/checkbox';

const Controllers = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;

  .search {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
  }
`

const controllers = props =>
    <Controllers>
        <div className="search">
            <span>Search: </span>
            <Search filter={props.filter}/>
        </div>
        <div className="actions">
            <CheckBox changed={props.toggleActive} label="Show only active"/>
        </div>
    </Controllers>


controllers.propTypes = {
    filter: PropTypes.func,
    toggleActive: PropTypes.func,
}

export default controllers;
