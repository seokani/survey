import React from 'react'
import * as Survey from 'survey-react'
import pdfMake from "../../node_modules/pdfmake/build/pdfmake"
//import pdfFonts from "../../node_modules/pdfmake/build/vfs_fonts"

var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question2","title":"당신의 나이대를 알려주세요","choices":[{"value":"item1","text":"19세 이하"},{"value":"item2","text":"20~29세"},{"value":"item3","text":"30~39세"},{"value":"item4","text":"40~49세"},{"value":"item5","text":"50~59세"},{"value":"item6","text":"60세 이상"}]},{"type":"checkbox","name":"question1","title":"관심있는 투자 방법을 선택해주세요(중복가능)","choices":[{"value":"item1","text":"CMA"},{"value":"item2","text":"주식"},{"value":"item3","text":"펀드"},{"value":"item4","text":"선물"},{"value":"item5","text":"없음"}],"colCount":2},{"type":"rating","name":"question3","title":"고수익을 위해선 위험도 감수할 수 있다.","rateMin":0,"minRateDescription":"그렇지 않다","maxRateDescription":"그렇다"},{"type":"boolean","name":"question4","labelTrue": "네","labelFalse": "아니요\n","title":"투자 경험이 있으신가요?"},{"type":"comment","name":"question5","visibleIf":"{question4} = true","title":"투자 경험을 말씀해주세요"}]}]}

  // 설문 조사 결과 json 으로 정리
  // function sendDataToServer(survey) {
  //   var resultAsString = JSON.stringify(survey.data);
  //   alert(resultAsString); //send Ajax request to your web server.
  // }

  function PdfMake(){
    /* documentDefinition : pdf파일에 들어갈 내용 및 여러가지를 정의 */
    var documentDefinition = {
      //content : pdf의 내용을 정의
      content: [{
              text: 'First Title'
          }, // 스타일 적용 없이 그냥 출력
          {
              text: 'This is a content',
              bold: true
          }, // 텍스트에 bold 주기
          {
              text: 'hahaha',
              style: 'style_test'
          }, // style 부분에 정의된 style_test 적용해보기 및 한글 꺠짐 테스트
          {
              style: 'tableExample',
              table: {
                  widths: [100, '*', 200, '*'],
                  body: [
                      ['width=100', 'star-sized', 'width=200', 'star-sized'],
                      ['fixed-width cells have exactly the specified width', {
                          text: 'article1',
                          italics: true,
                          color: 'gray'
                      }, {
                          text: 'article2',
                          italics: true,
                          color: 'gray'
                      }, {
                          text: 'article3',
                          italics: true,
                          color: 'gray'
                      }]
                  ]
              }
          } //테이블 그리기
      ],
      //하단의 현재페이지 / 페이지 수 넣기
      footer: function (currentPage, pageCount) {
          return {
              margin: 10,
              columns: [{
                  fontSize: 9,
                  text: [{
                          text: '--------------------------------------------------------------------------' +
                              '\n',
                          margin: [0, 20]
                      },
                      {
                          text: '' + currentPage.toString() + ' of ' +
                              pageCount,
                      }
                  ],
                  alignment: 'center'
              }]
          };

      },
      //필요한 스타일 정의하기
      styles: {
          style_test: {
              fontSize: 18,
              bold: true,
              margin: [0, 0, 0, 0],
              alignment: 'center'
          },
          tableExample: {
              margin: [0, 5, 0, 15]
          }
      },

      // 페이지 크기 용지의 크기 사이즈 넣기 또는 특정 사이즈 넣기 { width: number, height: number }
      pageSize: 'A4',

      /* 페이지 방향 portrait : 가로 , landscape : 세로 */
      pageOrientation: 'portrait',
  };

  var pdf_name = 'pdf샘플.pdf'; // pdf 만들 파일의 이름
  pdfMake.createPdf(documentDefinition).download(pdf_name);
  }

  function SurveyPage(){
    return(
      <Survey.Survey 
        json={surveyJSON} 
        onComplete={PdfMake}
      />
    )
  }
export default  SurveyPage;