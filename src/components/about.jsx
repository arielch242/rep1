import React,{Component} from 'react';
import PageHeader from './common/pageHeader.jsx';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
             <PageHeader titleText="About us"/>
               
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui maiores dignissimos dolor, saepe, ad, maxime voluptate eligendi debitis similique consectetur incidunt nemo dolores soluta? Deserunt, adipisci magni. Sed, nam fugit. Porro ut voluptates cum laboriosam saepe asperiores aperiam, aspernatur aliquid quia libero sit illum earum nisi atque voluptatem deleniti iure.</p>
                
            </div>
         );
    }
}
 
export default About;
