import React, { Component } from 'react'

class MagicItemsDetails extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          magicItemId: props.match.params.magicItemId
        };
    }

    componentDidMount() {
        let url = 'http://localhost:3000/api/items/' + this.state.magicItemId;
        console.log("Detail Call: " + url);
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                Magic Item ID = {this.state.magicItemId}
                {data.map((item) => 
                    <h1>{item.name}</h1>
                )}
            </div>
        );
    }
}

export default MagicItemsDetails;