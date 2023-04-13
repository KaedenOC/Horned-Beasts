import { Component } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';




class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        // console.log(this.state.count)
    }


    render() {
        return (
            <div onClick={this.handleClick}>
                <h2>{this.props.title}</h2>
                <Image title={this.props.title} src={this.props.imageUrl} alt={this.props.description} fluid thumbnail/>
                <p>{this.props.description}</p>
                <p>Favorites: {this.state.count} <HeartFill /></p>
            </div>
        )
    }
}

export default HornedBeast;