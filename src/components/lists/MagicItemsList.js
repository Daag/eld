import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class MagicItemsList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/items/')
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }

    render() {
        const { data } = this.state;

        return (
            <List divided relaxed>
                {data.map((item) => 
                    <List.Item key={item.id}>
                        <List.Icon name='magic' size='large' verticalAlign='middle' />
                        <List.Content>
                            <Link to={`/magicitems/${item.id}`}>
                                <List.Header>{item.name}</List.Header>
                                <List.Description>{item.category_name}</List.Description>
                            </Link>
                        </List.Content>
                    </List.Item>
                )}
            </List>
        );
    }
}

export default MagicItemsList;