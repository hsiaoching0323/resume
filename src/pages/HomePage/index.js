import React,{Component} from 'react';
import styles from './index.module.scss';
 class Home extends Component{
    
    state = {x: 0, y: 0}
    handleMouseMove = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      })
      //console.log(this.state);
    }
    mouseDown = event => {
        this.setState({
          offsetX: event.clientX,
          offsetY: event.clientY,
        })
        console.log(this.state);
      }
    render(){
        let y = this.state.y;
        if(y < 50) this.state.y = 50;
        if(y > window.innerHeight - 100) this.state.y = window.innerHeight - 100;
        let cross = <div className={styles.cross} style={{ left: `${this.state.offsetX}px`,top:`${this.state.offsetY}px`}} />
        return (
            <div className={styles.home}  onMouseMove={this.handleMouseMove.bind()} onMouseDown={this.mouseDown.bind()}>{cross}
                <div className={styles.namecard}>
                    <h2>王筱晴
                    </h2>
                    <h3>台北大學-資訊工程學系</h3>
                    <hr/>  
                        <p>興趣</p>  
                        <ul>
                            <li>創作</li>
                            <li>玩</li>
                            <li>唱歌</li>
                        </ul>
                        <hr/>
                        <p>專業技能</p> 
                        <ul>
                            <li>SCSS/SASS</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Python</li>
                            <li>git</li>
                        </ul>
                    </div>
                    <div class={styles.face}>
                        <div className={styles.face1}>
                        <div className={[styles.hair,styles.hair_left].join(' ')}></div>
                        <div className={[styles.hair,styles.hair_right].join(' ')}></div>
                        <div className={[styles.eye,styles.right_eye].join(' ')}></div>
                        <div className={[styles.eye,styles.left_eye].join(' ')}></div>
                        <div className={styles.nose}></div>
                        <div className={styles.mouse}></div>
                        </div>
                        <div className={styles.horseTail_right}></div>
                        <div className={styles.horseTail_left}></div>
                    </div>
                    <div className={styles.cross} style={{ left: `${this.state.x}px`,top:`${this.state.y}px`}} />
            </div>
        );
    }
    
}

export default Home;

