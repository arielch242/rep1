import {Component} from 'react';
import cardService from "../services/cardService";

class DeleteCard extends Component {

    async componentDidMount(){
        await cardService.deleteCard(this.props.match.params.id);
        this.props.history.replace("/qna");
    }

    render() { 
        return null;
    }
}
 
export default DeleteCard;