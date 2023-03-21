import React from 'react';
import { PulseLoader } from 'react-spinners';

export const Loader = ({ isLoading }) => {
  return (
    <div className="center-flex-view">
      <PulseLoader
        loading={isLoading}
        size={30}
        color="var(--first-bg-color)"
      />
    </div>
  );
};
