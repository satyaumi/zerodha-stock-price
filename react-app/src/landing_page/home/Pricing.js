import React from 'react';

function Pricing() {
    return (  
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>we pioned the concept of discount broking and price 
                        in india. Flat fee and no hidden charges. </p>
                        <a href='' style={{textDecoration:"none"}}>see pricing</a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>Free equaity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                        <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>25</h1>
                        <p>intraday and F&o</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;