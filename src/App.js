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
      clickedBeast: null,
      showModal: false,
    };
  }

  updateSelectedBeast = (beast) => {
    this.setState({ clickedBeast: beast, showModal: true });
  }

  closeModalHandler = () => {
    this.setState({ clickedBeast: null, showModal: false });
  }

  render() {

    return (
      <div>
        <Header />
        <Main beasts={Beasts} updateSelectedBeast={this.updateSelectedBeast} />
        <SelectedBeast show={this.state.showModal} onClose={this.closeModalHandler}
          title={this.state.clickedBeast ? this.state.clickedBeast.title : ''}
          imageUrl={this.state.clickedBeast ? this.state.clickedBeast.imageUrl : ''}
          description={this.state.clickedBeast ? this.state.clickedBeast.description : ''} />
        <Footer />
      </div>
    );

  }
}

export default App;
