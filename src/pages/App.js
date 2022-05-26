import styles from './App.module.scss';
import { Component } from 'react';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import HomePage from './HomePage';
import Workcase from './Workcase';


class App extends Component {
  render(){
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div className = {styles.box}>
            <Link to="/"><div className={styles.boxleft}>home</div></Link>
          </div>
          <div className = {styles.boxright}>
            <Link to="/workcase" className ={styles.rightButton}>Workcase</Link>
          </div>
        </header>
        <section className = {styles.content}>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/workcase" element={<Workcase/>}/>
          </Routes>
        </section>
        <footer className = {styles.footer}>
            <h3>
            信箱：judywang9566@gmail.com
            </h3> 
        <div>
          <a href="https://www.facebook.com/meteor.wang.77" target="_blank">facebook</a>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
