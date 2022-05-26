import React,{Component} from 'react'
import styles from './index.module.scss';
export default () =>{
    return <div className ={styles.work}>
            <div className={styles.box}>
                <div className={styles.top}>
                    <h2 className={styles.name}>Judy
                    <span className={styles.smallText}>王筱晴</span></h2>
                </div>
                <div className={styles.bottom}>
                    <ul>
                    <h3>可實習時間：</h3>
                    <li>一週三天</li>
                    <h3>打工經歷：</h3>
                    <li>教會跟補習班國小課輔</li>
                    </ul>
                    <div className={styles.buttons}>
                     <a href="https://codepen.io/your-work?cursor=ZD0xJm89MCZwPTEmdj01NTg4NDY0NQ=="  target="_blank">更多小作品</a>
                    </div>
                </div>
            </div>
        </div>
}