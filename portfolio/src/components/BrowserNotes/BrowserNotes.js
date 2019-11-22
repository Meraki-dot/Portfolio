import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        <span><b>Meraki</b>: (.v) to do something with soul, creativity, or love; to put something of yourself in your work</span>
      </Browser>
      <Browser only firefox>
        <span><b>Meraki</b>: (.v) to do something with soul, creativity, or love; to put something of yourself in your work</span>
        <span>Magic background is disabled in FireFox. Try in <b>Chrome!</b></span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;