import React from 'react'
import { ReactComponent as AdImg } from "../img/week.5-ad.svg";

export default  function Ad(props) {
    if (!props.showAd) {
      return null;
    }
  
    return (
    <div>
        <AdImg/>
    </div>
    );
  }