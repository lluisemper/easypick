import React from 'react';
import FacebookLogin from 'react-facebook-login';
import ApiClient from '../../ApiClient';


const Facebook = () =>{ 


  const responseFacebook = (response) => {
    ApiClient.postToken(response);
  }

return(
  <div className="Facebook">
    <FacebookLogin className="facebook"
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
