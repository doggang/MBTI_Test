import './App.css';
import Header from './components/header/Header.js';
import Nav from './components/nav/Nav.js';
import Article from './components/article/Article.js';
import Test from './components/article/Test.js';
import Footer from './components/footer/Footer.js';
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
  const [mode,setMode] = useState('START');
  let content = null; //첫 페이지 안에 내용
  console.log(mode);

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

  //MODE 변경--------------------------------------
  if(mode==='START'){
      content= <Article onChangeMode={function(){
        setMode('TEST');
        
      }} />
  }else if(mode==='MAIN'){
    
  }
else if(mode==='TEST'){
    content=<Test progress='50' onChangeMode={function(){
      setMode('START');
    }} />
  }
  //------------------------------------------------
  return(
    <div>
      <Header onClick={function(){

      }}/>
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
