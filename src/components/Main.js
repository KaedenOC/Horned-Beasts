import { Component } from 'react';
import Beasts from '../beasts.json';

class Main extends Component {
    render() {
       return (
        <div>
            {/* <HornedBeast title = 'Uniwhale' ImageURL = 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description = 'A unicorn and a narwhal nuzzling their horns'/>
            <HornedBeast title = 'Rhino Family' ImageURL = 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' description = 'Parent rhino with two babies'/> */}

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
    render() {
        return (
            <>
                <h2>Title: {this.props.title}</h2>
                <img title= {this.props.title} src= {this.props.imageUrl} alt={this.props.description}/>
                <p>{this.props.description}</p>
            </>
        )
    }
}




export default Main;