import React from 'react'

const jobId = async () => {

  // this code is only for showing loading page
  await new Promise((resolve)=>{
    setTimeout(() => {
      resolve('resoled')
    }, 2000);
  })
return (  
    <div>jobsID</div>
  );
};

export default jobId