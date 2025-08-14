import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3' >
         <div className='row p-3'>
            <div className='col-6 p-3'>
                 <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                 <h2 className='fs-4'>Customer-first always</h2>
                 <p className='text-muted'>That's why 1.3 crors customers trust zerodha with $3.5+ lakh crores worth of equity investments.</p>
                 <h2 className='fs-4'>No spam or gimmicks</h2>
                 <p className='text-muted'>No gimmicks,spam, "gammification", or anyoying push notificatiions. high quality apps that you use at yours pace, the way you like</p>
                 <h2 className='fs-4'>The zerodha universe</h2>
                 <p className='text-muted'>No just app, but a whole ecosystem,our investments in 30+ fintech startup offer you tailored services specific to your needs</p>
                 <h2 className='fs-4'>Do better with money</h2>
                 <p className='text-muted'>with initiates like nudge kill switch, we don't just facilate translation but actively belo you do better with your money</p>
            </div>
            <div className='col-6 p-3'>
                <img src='Media/ecosystem.png' style={{width:"90%"}}></img>
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-arrow-right"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Try kite demo</a>
                </div>
            </div>
         </div>

        </div>
     );
}

export default Stats;