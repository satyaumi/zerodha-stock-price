import React from 'react';

function Team() {
    return (  
        <div className="container">
      <div className="row  p-5 mt-5  borde">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div className="row p-5  border-top text-muted fs-6" 
      style={{lineHeight:"1.5",fontSize:"1.2em"}}>
        <div className="col-6 text-center">
          <img src='Media/satya.png' style={{borderRadius:"100%", width:"50%",height:"60%"}}></img>
          <h4 className='mt-5'>Satyasundar</h4>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            
         </p>
            <p>
                Contact On<a href="" style={{textDecoration:"none"}}>Homepage/ </a> <a href="" style={{textDecoration:"none"}} >Trading </a>/<a href="" style={{textDecoration:"none"}}>Q&A</a> /<a href="" style={{textDecoration:"none"}}>Twitter</a></p> 
          
        </div>
      </div>
    </div>
    );
}

export default Team;