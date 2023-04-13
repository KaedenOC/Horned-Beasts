import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Image from 'react-bootstrap/Image';
// import { HeartFill } from 'react-bootstrap-icons';
import { Component } from 'react';
// import Beasts from '../beasts.json';
import HornedBeast from './HornedBeast';


class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {
                            this.props.beasts.map(beast => {
                                return (
                                    <Col xs={12} md={4}>
                                        <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} clickState={this.props.selectedBeast} />

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




export default Main;