import React from 'react';


const DisplayHaiku = (props) => {

  const { haiku, haikuDisplay } = props;
return (
  <div className={haikuDisplay}>
  <p>{haiku.firstLine}</p>
  <br />
  <p>{haiku.secondLine}</p>
  <br />
  <p>{haiku.thirdLine}</p>
  </div>
)
}


export default DisplayHaiku;
