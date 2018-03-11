import React from 'react';


const DisplayHaiku = (props) => {

  // Grab the haiku object as well as the
  // haikuDisplay property
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
