import { Component } from 'react';
import Beasts from '../beasts.json';

class Main extends Component {

    render() {
       return (
        <div>

         {
            Beasts.map(beast =>{
                return (
                    <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />
                )
            })
         }
        </div>
       );
    }
}

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
        // console.log(this.state.count)
    }


    render() {
        return (
            <div onClick={this.handleClick}>
                <h2>Title: {this.props.title}</h2>
                <img title= {this.props.title} src= {this.props.imageUrl} alt={this.props.description}/>
                <p>{this.props.description}</p>
                <p>Favorites: {this.props.state}</p>
            </div>
        )
    }
}




export default Main;