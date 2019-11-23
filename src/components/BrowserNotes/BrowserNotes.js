import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        <span><b>MERAKI</b>: (.v) to do something with soul, creativity, or love</span>
      </Browser>
      <Browser only firefox>
        <span><b>MERAKI</b>: (.v) to do something with soul, creativity, or love</span>
        <br></br>
        <br></br>
        <span>Magic background is disabled in FireFox. Try in <b>Chrome!</b></span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;