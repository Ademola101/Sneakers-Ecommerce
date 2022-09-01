import React from 'react';
import { NavigationStyle } from '../Styles/NavigationStyle';

export default function Navigation({ showLinks }) {

  if (showLinks) {
    return null;
  }
  return (
    <NavigationStyle>

      <a href="">Collections</a>
      <a href="">Men</a>
      <a href="">Women</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </NavigationStyle>

  );
}
