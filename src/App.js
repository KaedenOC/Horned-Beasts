import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header title = {'Horned Beasts'} />
      <Footer author = {'Kaeden'} />
      <Main name = {'check'} />
      <Main name = {'check'} />
    </div>
  );
}

export default App;
