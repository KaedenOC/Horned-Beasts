import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { HeartFill } from 'react-bootstrap-icons';
import { Component } from 'react';
import Beasts from '../beasts.json';

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {
                            Beasts.map(beast => {
                                return (
                                   <Col xs={6} md={4}>
                                   <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />
                                   
                                   </Col>
                                )
                            })
                        }

                    </Row>
                </Container>

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
        this.setState({ count: this.state.count + 1 });
        // console.log(this.state.count)
    }


    render() {
        return (
            <div onClick={this.handleClick}>
                <h2>Title: {this.props.title}</h2>
                <Image title={this.props.title} src={this.props.imageUrl} alt={this.props.description} fluid rounded/>
                <p>{this.props.description}</p>
                <p>Favorites: {this.state.count} <HeartFill /></p>
            </div>
        )
    }
}




export default Main;