import React from 'react'
import * as Survey from 'survey-react'

var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question2","title":"당신의 나이대를 알려주세요","choices":[{"value":"item1","text":"19세 이하"},{"value":"item2","text":"20~29세"},{"value":"item3","text":"30~39세"},{"value":"item4","text":"40~49세"},{"value":"item5","text":"50~59세"},{"value":"item6","text":"60세 이상"}]},{"type":"checkbox","name":"question1","title":"관심있는 투자 방법을 선택해주세요(중복가능)","choices":[{"value":"item1","text":"CMA"},{"value":"item2","text":"주식"},{"value":"item3","text":"펀드"},{"value":"item4","text":"선물"},{"value":"item5","text":"없음"}],"colCount":2},{"type":"rating","name":"question3","title":"고수익을 위해선 위험도 감수할 수 있다.","rateMin":0,"minRateDescription":"그렇지 않다","maxRateDescription":"그렇다"},{"type":"boolean","name":"question4","labelTrue": "네","labelFalse": "아니요\n","title":"투자 경험이 있으신가요?"},{"type":"comment","name":"question5","visibleIf":"{question4} = true","title":"투자 경험을 말씀해주세요"}]}]}

  function sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    alert(resultAsString); //send Ajax request to your web server.
  }

  function SurveyPage(){
    return(
      <Survey.Survey 
        json={surveyJSON} 
        onComplete={sendDataToServer}
      />
    )
  }
export default  SurveyPage;