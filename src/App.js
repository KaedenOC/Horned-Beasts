import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Beasts from './beasts.json';
import SelectedBeast from './components/SelectedBeast';
// import HornForm from './components/Form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedBeast: '',
      showModal: false,
      beastImg: '',
      beastDescription: '',
      filteredBeast: Beasts,
    };
  }

  handleFilter = (event) => {
    const selection = event.target.value;

    let filteredBeast = Beasts.filter((Beasts) => {
      if (selection === "One Horn") {
        return Beasts.horns === 1;
      }
      if (selection === "Two Horns") {
        return Beasts.horns === 2;
      }
      if (selection === "Three Horns") {
        return Beasts.horns === 3;
      }
      if (selection === "One Hundred Horns") {
        return Beasts.horns === 100;
      } else {
        return Beasts;
      }
    });

    this.setState({ filteredBeast: filteredBeast });
  };

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
        <Main beasts={this.state.filteredBeast} selectedBeast={this.updateSelectedBeast} handleFilter={this.handleFilter}/>
        <SelectedBeast beasts={Beasts} chosenBeast={this.state.clickedBeast} beastImg={this.state.beastImg} beastDescription={this.state.beastDescription} show={this.state.showModal} onClose={this.closeModalHandler} />
        <Footer />
      </div>
    );

  }
}

export default App;
