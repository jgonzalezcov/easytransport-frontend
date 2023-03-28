import { textTransform } from '@mui/system';
import React from 'react';

const style = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  backgroundColor: 'var(--second-bg-color)',
  color: '#fff',
};

export const AvatarLetter = ({ text }) => {
  const letter = text && text.length > 0 ? text.slice(0, 1) : '';
  return <div style={style}>{letter}</div>;
};
