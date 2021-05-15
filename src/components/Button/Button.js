import React from 'react';

export default function Button({ type='primary', name, ...props }) {
  return (
    <button className={`buttonComponent buttonComponent--${type}`} {...props}>{name}</button>
  )
}
