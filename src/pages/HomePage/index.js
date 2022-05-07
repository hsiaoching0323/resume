import React,{Component} from 'react'
import styles from './index.module.scss';
function Home(){
    return (
        <div className={styles.home}>
            <ul className={styles.left}>
                <li >書籍種類</li>
                <li>科幻</li>
                <li>科學</li>
                <li>心理勵志</li>
                <li>懸疑</li>
            </ul>
            <div className={styles.right}>

            </div>
        </div>
    );
}

export default Home;