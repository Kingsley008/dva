import React from 'react';
import {TopMenu} from "./TopMenu"
const App= ({children}) => {
  return (
    <div>
      <TopMenu/>
      {children}
    </div>
  )
};

export default App;
