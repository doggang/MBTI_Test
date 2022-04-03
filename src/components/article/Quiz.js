import styles from './quiz.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Quiz(props){
    return(
        <quiz>
            <div className={styles.wrap}>
                <ProgressBar className={styles.progress} striped variant="warning" animated now={props.progress} />
                <div>
                    <p className={styles.question}>{props.question}</p>
                    <ul className={styles.container}>
                        <li className={styles.content} onClick={function(e){
                            e.preventDefault();
                            props.EClick();
                        }}>{props.one}</li>
                        <li className={styles.content} onClick={function(e){
                            e.preventDefault();
                            props.EClick();
                        }}>{props.two}</li>
                        <li className={styles.content} onClick={function(e){
                            e.preventDefault();
                            props.EClick();
                        }}>{props.three}</li>
                        <li className={styles.content} onClick={function(e){
                            e.preventDefault();
                            props.EClick();
                        }}>{props.four}</li>
                    </ul>
                </div>
                <div onClick={function(e){
                        e.preventDefault();
                        props.onChangeMode();
                    }}>처음으로</div>
            </div>
        </quiz>
    );
}

export default Quiz;
