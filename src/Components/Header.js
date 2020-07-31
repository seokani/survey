import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'


function Header() {
  return (
    <div>
      <Link to="/survey">
        <Button>
          <span>설문시작</span>
        </Button>
      </Link>
    </div>
    
  )
}

export default Header;