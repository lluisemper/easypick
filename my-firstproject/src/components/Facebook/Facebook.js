import React from 'react';
import './Facebook.css';
import FacebookLogin from 'react-facebook-login';

const Facebook = () =>{ 

  const responseFacebook = (response) => {
    console.log(response);
  }

return(
  <div className="Facebook">
    <FacebookLogin
  appId="180181013407650"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>
  </div>
);

}
export default Facebook;
