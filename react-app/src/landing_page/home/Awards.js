import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src='Media/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h1>Larget stock broker in India</h1>
                    <p className='mb-5'>2+ Million zerodha clients contributes to over 15%  of all retail order volumes in india by tracking and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                         <li>
                            <p>Future and options</p>
                            </li>

                        <li>
                            <p>commondity derivates</p>
                            </li>

                        <li>
                            <p>current derives</p>
                            </li>
                        </div>
                        <div className='col-6'>
                            <ul>
                            <li>
                                <p>stacks & ipos</p>
                                </li>
                                <li>
                                     <p>direct mutual funds</p>
                                     </li>
                                     <li>
                                        <p>Bonds and government security</p>
                                        </li>
                                        </ul>
                            </div>
                       
                    </div>
                    <img src='Media/pressLogos.png' style={{width:"90%"}} />
                </div>

            </div>
        </div>
    );
}

export default Awards;