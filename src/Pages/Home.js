import React from 'react';
import '../Components/Home.css';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'


function Home() {
  return (
    <div className="Home" >
        <div className="content" >
          <h2>당신의 재무성향을 알아보세요!</h2>
          <div>
            <Link to="/surveypage">
              <Button className="btnSurvey" >
                <span>알아보기</span>
              </Button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home;