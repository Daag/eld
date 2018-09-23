import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css';

import './MagicItemsList.css';

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
            <List 
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <Link className="eld-list-item-link" to={`/magicitems/${item.id}`}>
                            <List.Item.Meta
                                avatar={<Avatar icon="paper-clip" />}
                                title={item.name}
                                description={item.category_name}
                                />
                        </Link>
                    </List.Item>
                )}
            />
        )
    }
}

export default MagicItemsList;