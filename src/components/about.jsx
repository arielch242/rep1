import React,{Component} from 'react';
import PageHeader from './common/pageHeader';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container min-vh-100 bg-img text-white text-right">
                <PageHeader titleText="אודות"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at rem a vitae tempore quis hic non cupiditate exercitationem quae?</p>
            </div>
         );
    }
}
 
export default About;
