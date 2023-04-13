import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Beasts from './beasts.json';
import SelectedBeast from './components/SelectedBeast';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedBeast: '',
      showModal: false,
      beastImg: '',
      beastDescription: '',
    };
  }

  updateSelectedBeast = (beast, url, description) => {
    this.setState({
      clickedBeast: beast,
      showModal: true,
      beastImg: url,
      beastDescription: description,
    });
  }

  closeModalHandler = () => {
    this.setState({ showModal: false });
  }

  render() {

    return (
      <div>
        <Header />
        <Main beasts={Beasts} selectedBeast={this.updateSelectedBeast} />
        <SelectedBeast beasts={Beasts} chosenBeast={this.state.clickedBeast} beastImg={this.state.beastImg} beastDescription={this.state.beastDescription} show={this.state.showModal} onClose={this.closeModalHandler}/>
        <Footer />
      </div>
    );

  }
}

export default App;
