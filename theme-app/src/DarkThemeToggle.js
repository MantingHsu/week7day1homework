import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkTheme } from './redux/actions';

export default function DarkThemeToggle() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.darkTheme);

  return (
    <label>
      <input
        type="checkbox"
        checked={darkTheme}
        onChange={() => dispatch(toggleDarkTheme())}
      />
      Dark Mode
    </label>
  );
}
