import './App.css';
import Header from './components/header/Header.js';
import Nav from './components/nav/Nav.js';
import Article from './components/article/Article.js';
import Quiz from './components/article/Quiz.js';
import Footer from './components/footer/Footer.js';
import Result from './components/article/Result.js';
import Wait from './components/article/Wait.js';
import Load from './components/article/Loading.js'
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


//-------------SNS공유 import zone--------------//
import styled from "styled-components";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useScript } from "./hooks.js";
import { useEffect } from "react";
import kakaoLogo from "./img/kakao.png";
//-------------SNS공유 import zone--------------//


function App(){

  // 제목과 버튼을 감싸는 컨테이너
  const FlexContainer = styled.div
    `display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    `
  ;

  // 버튼을 배치시키는 컨테이너
  const GridContainer = styled.div
    `display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;`
  ;

  // window 객체에서 현재 url 가져오기
	const currentUrl = window.location.href;

  // Style을 적용한 버튼 컴포넌트 추가
  const URLShareButton = styled.button`
    width: 48px;
    height: 48px;
    color: white;
    border-radius: 24px;
    border: 0px;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
    background-color: #7362ff;
    &:hover {
      background-color: #a99fee;
    }
  `;

  // kakao SDK import하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("bf59deee209958707b78773e99a0f580");
			}
		}
	}, [status]);	

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
        requestUrl: currentUrl,
    });
  };  

  const KakaoShareButton = styled.a`
	  cursor: pointer;
  `;

  const KakaoIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 24px;
  `;

  const [mode,setMode] = useState('START');
  let content = null; //첫 페이지 안에 내용
  //console.log(mode);
  const test =[
    {id:0, mode:'TEST', progress:9, question:'어색한 지인에게 연락이 왔다. 어떻게 할까?', one:'읽지 않는다', two:'즐겁게 떠들며 논다', 
    three:'읽고 무시한다', four:'시간을 두고 본다'},

    {id:1, mode:'TEST', progress:18, question:'누군가가 와서 아무생각도 하지 말라고 하면?', one:'아무 생각도 하지 않는다.(S) ', two:'왜 그런말을 한건지 생각한다.(T) ', 
    three:'서운해서 말걸지 않는다.(F)', four:'화가나서 따진다,'},

    {id:2, mode:'TEST', progress:27, question:'머리를 감을 때 드는 생각은?', one:'무서운 생각 ', two:'늦었다 큰일났다 ', 
    three:'아무 생각이 없다 ', four:'피곤하다'},

    {id:3, mode:'TEST', progress:36, question:'너무 심심한 당신. 무엇을 하고싶은가?', one:'침대에 누워있는다', two:'밖에 나간다', 
    three:'할일을 찾아서 한다', four:'핸드폰이나 컴퓨터를 한다.'},

    {id:4, mode:'TEST', progress:45, question:'빨간색 버튼을 누르면 30% 확률로 1억, 파란색 버튼을 누르면 무조건 500만원을 준다고 한다. ', one:'빨간색 버튼', 
    two:'파란색 버튼', three:'서운해서 말걸지 않는다.(F)', four:'화가나서 따진다,'},

    {id:5, mode:'TEST', progress:54, question:'엄청 슬픈 영화를 보았다. 당신의 선택은?', one:'펑펑 운다  ', two:'하나도 슬프지 않다', 
    three:'슬프다고 생각한다', four:'재미없다'},

    {id:6, mode:'TEST', progress:64, question:'집에 혼자 있을 때 당신의 행동은?', one:'조용히 있는다 ', two:'혼잣말을 한다.', 
    three:'노래를 흥얼거린다', four:'집에 혼자 있지 않는다.'},

    {id:7, mode:'TEST', progress:72, question:'배가 너무 배가 고프다. 밖이라 혼밥을 해야하는 상황. 당신의 선택은?', one:'귀찮다. 다음 끼니에 먹어야지 ', two:'아무 생각없이 혼밥한다', 
    three:'굶더라도 절대 혼밥하지 않는다. ', four:'간식으로 때운다.'},

    {id:8, mode:'TEST', progress:81, question:'편의점에서 삼각김밥을 사서 먹었는데 유통기한이 지나있었다?', one:'안 죽어 ', two:'가서 따지고 환불받는다 ', 
    three:'찝찝하지만 가만히 있는다', four:'편의점 본사에 컴플레인을 건다.'},

    {id:9, mode:'TEST', progress:91, question:'누군가가 와서 아무생각도 하지 말라고 하면?', one:'아무 생각도 하지 않는다.(S) ', two:'왜 그런말을 한건지 생각한다.(T) ', 
    three:'서운해서 말걸지 않는다.(F)', four:'화가나서 따진다,'},
  ];

  
  let E, I, S, N, F, T, P = 0;

  //MODE 변경--------------------------------------
    if(mode==='START'){
      content = <Article onChangeMode={function(){
          setMode('QUIZ0');
        }
      }/>
    }else if(mode==='QUIZ0'){
      console.log(mode);
      content = <Quiz key={0} progress={test[0].progress} question={test[0].question}
        one={test[0].one} two={test[0].two} three={test[0].three} four={test[0].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ1');
        }
        }
      />
    }else if(mode==='QUIZ1'){
      console.log(mode);
      content = <Quiz key={1} progress={test[1].progress} question={test[1].question}
        one={test[1].one} two={test[1].two} three={test[1].three} four={test[1].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ2');
        }
        }
      />
    }else if(mode==='QUIZ2'){
      console.log(mode);
      content = <Quiz key={2} progress={test[2].progress} question={test[2].question}
        one={test[2].one} two={test[2].two} three={test[2].three} four={test[2].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ3');
        }
        }
      />
    }else if(mode==='QUIZ3'){
      console.log(mode);
      content = <Quiz key={3} progress={test[3].progress} question={test[3].question}
        one={test[3].one} two={test[3].two} three={test[3].three} four={test[3].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ4');
        }
        }
      />
    }else if(mode==='QUIZ4'){
      console.log(mode);
      content = <Quiz key={4} progress={test[4].progress} question={test[4].question}
        one={test[4].one} two={test[4].two} three={test[4].three} four={test[4].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ5');
        }
        }
      />
    }else if(mode==='QUIZ5'){
      console.log(mode);
      content = <Quiz key={5} progress={test[5].progress} question={test[5].question}
        one={test[5].one} two={test[5].two} three={test[5].three} four={test[5].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ6');
        }
        }
      />
    }else if(mode==='QUIZ6'){
      console.log(mode);
      content = <Quiz key={6} progress={test[6].progress} question={test[6].question}
        one={test[6].one} two={test[6].two} three={test[6].three} four={test[6].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ7');
        }
        }
      />
    }else if(mode==='QUIZ7'){
      console.log(mode);
      content = <Quiz key={7} progress={test[7].progress} question={test[7].question}
        one={test[7].one} two={test[7].two} three={test[7].three} four={test[7].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ8');
        }
        }
      />
    }else if(mode==='QUIZ8'){
      console.log(mode);
      content = <Quiz key={8} progress={test[8].progress} question={test[8].question}
        one={test[8].one} two={test[8].two} three={test[8].three} four={test[8].four}
        onChangeMode={function(e){
          setMode('START');
        }}
        EClick={function(){
          setMode('QUIZ9');
        }
        }
      />
    }else if(mode==='QUIZ9'){
      console.log(mode);
      content = <Quiz key={9} progress={test[9].progress} question={test[9].question}
        one={test[9].one} two={test[9].two} three={test[9].three} four={test[9].four}
        onChangeMode={function(e){
          setMode('RESULT');
        }}
        EClick={function(){
          setMode('RESULT');
        }
        }
      />
    }else if(mode==='WAIT'){

    }else if(mode==='RESULT'){
      content = <Loading />
    }
    //------------------------------------------------
  return(
    <div>
      <Header />
      <Nav />
      {content}

      {/*------------ SNS 공유 태그---------------*/}
      <FlexContainer>
        <GridContainer>
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
          </TwitterShareButton>
          <KakaoShareButton onClick={handleKakaoButton}>
            <KakaoIcon src={kakaoLogo}></KakaoIcon>
          </KakaoShareButton>
          <CopyToClipboard text={currentUrl}>
            <URLShareButton>URL</URLShareButton>
          </CopyToClipboard>
        </GridContainer>
		  </FlexContainer>
      {/*------------ SNS 공유 태그---------------*/}
      <Footer />

    </div>
  );
}

export default App;
