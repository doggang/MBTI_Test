import { useState } from 'react';
import styles from './test.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Test(props){
    return(
        <test>
            <div onClick={function(e){
                    e.preventDefault();
                    props.onChangeMode();
                }}>시작하기</div>
      <ProgressBar animated now={props.progress} />
            <div>
                <p></p>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            
        </test>
    );
}

export default Test;
