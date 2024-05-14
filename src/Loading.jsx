import React from 'react';

const Loading = () => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center ">
       <div className='w-[200px] h-[200px] rounded-full circle'></div>
    </div>
  );
};

export default Loading;

// import Spinner from 'react-bootstrap/Spinner';

// function Loading() {
//   return(
//     <div className='w-[100%] h-[100vh] flex items-center justify-center'>
//       <Spinner animation="border" className=' w-[200px] h-[200px]'/>;
//     </div>
//   )
// }

// export default Loading;