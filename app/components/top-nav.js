import React from 'react';
import AppBar from 'material-ui/AppBar';

export default () => {
  const leftIcon = (
    <img></img>
  );

  return(
    <AppBar
      title="Marathi Program"
      titleStyle={{textAlign: 'center'}}
      iconElementLeft={leftIcon} />
  );
};
