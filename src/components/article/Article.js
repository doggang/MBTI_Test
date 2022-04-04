import { useState } from 'react';
import styles from './article.module.css';

function Article(props){
    return(
        <article>
            <div className={styles.wrap}>
                <h1 className={styles.title}>MBTI로 전공적성찾기</h1>
                <p className={styles.content}>MBTI 검사를 통해 본인과 어울리는 전공을 찾아보고</p>
                <p className={styles.content}>친구들에게 나의 전공을 자랑해봐요!!</p>
                <div className={styles.start} onClick={function(e){
                    e.preventDefault();
                    props.onChangeMode();
                }}>시작하기</div>
            </div>
        </article>
    );
}

export default Article;
