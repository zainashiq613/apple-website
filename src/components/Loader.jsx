import React from 'react';

function Loader() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-[10vw] h-[10vh] rounded-full">Loading........</div>
    </div>
  );
}

export default Loader;
