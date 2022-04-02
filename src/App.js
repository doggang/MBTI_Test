import './App.css';
import Header from './components/header/Header.js';
import Nav from './components/nav/Nav.js';
import Article from './components/article/Article.js';
import Footer from './components/footer/Footer.js';
import {useState} from 'react';

function App(){
  const [mode,setMode] = useState('START');
  let content = null; //첫 페이지 안에 내용
  console.log(mode);

  //MODE 변경--------------------------------------
  if(mode==='START'){
      content= <Article onChangeMode={function(){
        setMode('TEST');
        alert('TEST로 바뀝니다');
      }} />
  }else if(mode==='TEST'){
    content=<Article onChangeMode={function(){
      setMode('START');
      alert('START로 바뀝니다');
    }} />
  }
  //------------------------------------------------
  return(
    <div>
      <Header/>
      <Nav />
      {content}
      <Footer />
    </div>
  );
}

export default App;
