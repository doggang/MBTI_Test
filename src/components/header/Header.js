import headerImg from '../../img/brain.png';
import styles from './header.module.css';

function Header(){
  return(
    <header>
      <a className={styles.header} href='#'>
        <img className={styles.img} src={headerImg} alt="" />
        <p className={styles.title}>MBTI로 전공찾기</p>
      </a>
    </header>
  );
}

export default Header;
