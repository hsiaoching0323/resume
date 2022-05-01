import logo from './logo.svg';
import styles from './App.module.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div className = {styles.box}>
            <Link to="/"><div className={styles.boxleft}>bookChain</div></Link>
          </div>
          <div className = {styles.boxright}>
            <Link to="/"><p>Home</p></Link>
            <Link to="/work"><p>work</p></Link>
          </div>
        </header>
        <section className = {styles.content}>內容區</section>
        <footer className = {styles.footer}>底部</footer>
      </div>
    );
  }
}

export default App;
