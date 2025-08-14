import React from 'react';

function notFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
              <h1 className='mt-5'>404 not found </h1>
              <p>sorry the page you are looking for doesnot exist. </p>
              <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}> 
                Go Home </button>
            </div>

        </div>
     );
}

export default notFound;