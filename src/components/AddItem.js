import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ItemService from "../service/ItemService";

export default class AddItem extends Component {
    constructor(props){
        super(props);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.newItem = this.newItem.bind(this);

        this.state = {
            id: null,
            category: "",
            itemName: "",

            submitted: false
        };

    }

    onChangeCategory(category) {
        this.setState({
            category: category.target.value
        });
    }

    onChangeItemName(name) {
        this.setState({
            itemName: name.target.value
        });
    }

    saveItem() {
        var data = {
            category: this.state.category,
            itemName: this.state.itemName
        };
    
        ItemService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    category: response.data.category,
                    itemName: response.data.itemName,

                    submitted: true
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
    }

    newItem() {
        this.setState({
            id: null,
            category: "",
            itemName: "",

            submitted: false
        });
    }

    render() {
        return(
            <div>
                {this.state.submitted ? (
                    <div>
                        <h3>Item added</h3>
                        <Link to="/"><button>Back to List</button></Link>
                        <button onClick={this.newItem}>+</button>
                    </div>
                ):(
                    <div>
                        <div>
                            <label>Category</label>
                            <input
                                type="text"
                                id="category"
                                required
                                value={this.state.category}
                                onChange={this.onChangeCategory}
                                name="category"
                            />
                        </div>

                        <div>
                            <label>Item</label>
                            <input
                                type="text"
                                id="itemName"
                                required
                                value={this.state.itemName}
                                onChange={this.onChangeItemName}
                                name="itemName"
                            />
                        </div>

                        <button onClick={this.saveItem}>Add</button>
                    </div>
                )}
            </div>
        )
    }

}