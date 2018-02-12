import React from 'react';


const DisplayHaiku = (props) => {

  const { haiku, haikuDisplay } = props;
return (
  <div>
  <p className={haikuDisplay}>{haiku.firstLine}</p>
  <br />
  <p className={haikuDisplay}>{haiku.secondLine}</p>
  <br />
  <p className={haikuDisplay}>{haiku.thirdLine}</p>
  </div>
)
}


export default DisplayHaiku;
