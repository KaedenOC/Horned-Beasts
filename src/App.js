import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Beasts from './beasts.json';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main beasts={Beasts} />
        <Footer />
      </div>
    );

  }
}

export default App;
