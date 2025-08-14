import React from 'react';

function Hero() {
    return (  
        <div className="container">
        <div className="row  border-bottom  text-center" >
            <h1>charges</h1>
            <h3 className='text-muted fs-5 mt-5'>List of all charges and taxes </h3>
            </div>
            <div className='row p-4 mt-5 text-center'>
          <div className="col-4 p-4">
            <img src='Media\pricingEquity.svg'></img>
            <h1 className='fs-3'>Free equity delivery</h1>
            <p1 className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p1>
          </div>
          <div className="col-4 ">
          <img src='Media\intradayTrades.svg'></img>
            <h1 className='fs-3'>Intraday and F&O trades</h1>
            <p1 className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p1>
          </div>
          <div className="col-4">
          <img src='Media/pricingMF.svg'></img>
            <h1 className='fs-3'>Free direct MF</h1>
            <p1 className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p1>
          </div>
        </div>
        </div>
      
    );
}

export default Hero;
