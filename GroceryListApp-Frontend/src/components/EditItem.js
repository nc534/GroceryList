import React, { Component } from 'react'
import ItemService from "../service/ItemService";

export default class EditItem extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            category: '',
            itemName: ''
        }
        this.saveItem = this.saveItem.bind(this);
        this.loadItem = this.loadItem.bind(this);
    }

    componentDidMount() {
        this.loadItem();
    }

    loadItem(id) {
        ItemService.getById(id)
            .then((response) => {
                let item = response.data.result;
                this.setState({
                id: item.id,
                category: item.category,
                itemName: item.itemName
                })
            });
    }

    onChange = (input) =>
        this.setState({ [input.target.name]: input.target.value });

    saveItem = (input) => {
        input.preventDefault();
        let item = {id: this.state.id, category: this.state.category, itemName: this.state.itemName};
        ItemService.update(item)
            .then(response => {
                this.setState({message : 'item added successfully.'});
                this.props.history.push('/items');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit item</h2>
                <form>

                    <div>
                        <label>Category:</label>
                        <input value={this.state.category} onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>Name:</label>
                        <input value={this.state.itemName} onChange={this.onChange}/>
                    </div>

                    <button onClick={this.saveItem}>Save</button>

                </form>
            </div>
        );
    }
}