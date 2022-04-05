import headerImg from '../../img/brain.png';
import styles from './header.module.css';

function Header(props){
  return(
    <header>
      <a href='../../../public/index.html' className={styles.header} onClick={function(e){
        props.onChangeMode();
      }}>
        <img className={styles.img} src={headerImg} alt="" />
        <p className={styles.title}>MBTI로 전공찾기</p>
      </a>
    </header>
  );
}

export default Header;
