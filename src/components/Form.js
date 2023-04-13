import { Component } from 'react';
import Form from 'react-bootstrap/Form';

class HornForm extends Component {
    render() {
        return (
            <Form.Select onChange={this.props.onFilter}aria-label="Default select example">
                <option>Find Beasts By Horns</option>
                <option value='One Horn'>One Horn</option>
                <option value='Two Horns'>Two Horns</option>
                <option value='Three Horns'>Three Horns</option>
                <option value='One Hundred Horns'>One Hundred Horns</option>
            </Form.Select>
        )
    }
}





export default HornForm;