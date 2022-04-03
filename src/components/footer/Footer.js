import styles from './footer.module.css';

function Footer(){
    return(
        <footer>
            <div className={styles.wrap}>
                <p>MBTI로 대학전공 적성찾기</p>
                <p>Email : rlaehgusqp@naver.com</p>
                <p>COPYRIGHT© 2022 <a className={styles.link} href='https://github.com/doggang'>DogGang.</a> ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}

export default Footer;
