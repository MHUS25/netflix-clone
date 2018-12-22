
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback } from 'react-native';
const NETFLIX_LOGO = require('../../../assets/icons/netflix-logo.png');

const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 60;
  align-items: center;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
  justify-content: space-between;
`;

export default Header;
