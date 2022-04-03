import headerImg from '../../img/brain.png';
import styles from './header.module.css';

function Header(props){
  return(
    <header>
      <a className={styles.header} onClick={function(e){
        e.preventDefault();
        props.onChangeMode();
      }}>
        <img className={styles.img} src={headerImg} alt="" />
        <p className={styles.title}>MBTI로 전공찾기</p>
      </a>
    </header>
  );
}

export default Header;
