import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Beasts from './beasts.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        clickedBeast: null
    };
}

  updateSelectedBeast = (beast) => {
    this.setState({ clickedBeast: beast });
  }

  render() {
    return (
      <div>
        <Header />
        <Main beasts={Beasts} updateSelectedBeast={this.updateSelectedBeast}/>
        <Footer />
      </div>
    );

  }
}

export default App;
