import logo from './logo.svg';
import styles from './App.module.scss';
import { Component } from 'react';
import { Link , Routes, Route} from 'react-router-dom';
import HomePage from './HomePage'
import Book from './Book'
import Bookcase from './Bookcase';

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
            <Link to="/bookcase"><p>bookcase</p></Link>
          </div>
        </header>
        <section className = {styles.content}>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/bookcase" element={<Bookcase/>}/>
              <Route path="/books/:id" element={<Book/>}/>
          </Routes>
        </section>
        <footer className = {styles.footer}>底部</footer>
      </div>
    );
  }
}

export default App;
