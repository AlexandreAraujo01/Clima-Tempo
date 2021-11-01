// Barra de progresso.
import * as React from 'react';

import "./progressBar.css"


export var ProgressBar =  ({width, percent}) => {
    let percent2 = percent / 100
    let progress = percent2 * width;

    return (
      <div>
      <div className='topBar'><span>0</span> <span>50</span> <span>100</span></div>
      <div className="progress-div" style={{width: width}}>
           <div style={{width: `${progress}px`}}className="progress"/>
      </div>
      </div>
    )
}