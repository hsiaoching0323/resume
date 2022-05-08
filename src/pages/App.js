import styles from './App.module.scss';
import { Component } from 'react';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import HomePage from './HomePage';
import Book from './Book';
import Bookcase from './Bookcase';
import Login from './Login';

class App extends Component {
  render(){
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div className = {styles.box}>
            <Link to="/"><div className={styles.boxleft}>bookChain</div></Link>
          </div>
          <div className = {styles.boxright}>
            <Link to="/login"><p className={styles.rightButton}>log in</p></Link>
            <Link to="/bookcase"><p className ={styles.rightButton}>bookcase</p></Link>
          </div>
        </header>
        <section className = {styles.content}>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/bookcase" element={<Bookcase/>}/>
              <Route path="/books/:id" element={<Book/>}/>
          </Routes>
        </section>
        <footer className = {styles.footer}>
            <h3>
            信箱：jjjcd@gmail.com
            </h3> 
        <div>
          <a href="https://fortunenina.pixnet.net/blog/post/113760749" target="_blank">更多訊息</a>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
