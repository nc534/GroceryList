import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ItemService from '../service/ItemService';
import QuantityCounter from './QuantityCounter';

export default class ItemList extends Component {
    constructor(props) {
        super(props)
        
        //this.onChangeSearchItem = this.onChangeSearchItem.bind(this);
        this.retrieveGroceries = this.retrieveGroceries.bind(this);

        //this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.removeAllItems = this.removeAllItems.bind(this);

        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        this.retrieveGroceries();
    }

    // onChangeSearchItem(input) {
    //     const searchItem = input.target.value;

    //     this.setState({
    //         searchItem: searchItem
    //     });
    // }

    retrieveGroceries() {
        ItemService.getAll()
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch (e => {
                console.log(e);
            })

        
    }

    setActiveItem(item, index) {
        this.setState({
            currentItem: item,
        })
    }

    updateItem(id) {
        ItemService.update(id)
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit');
    }

    deleteItem(id) {
        ItemService.delete(id)
            .then(response => {
                this.setState({
                    items: this.state.items.filter(item => item.id !== id)
                })
            })
    }

    removeAllItems() {
        ItemService.deleteAll()
            .then(response => {
                this.retrieveGroceries();
                this.setState({
                    items: [],
                });
            })
            .catch(e => {
                console.log(e);
            })
    }

    // searchItem(){
    //     ItemService.findByItem(this.state.searchItem)
    //         .then(response => {
    //             this.setState({
    //                 items: response.data
    //             });
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // }

    render(){

        // const {searchItem} = this.state;

        return(
            <div>
                {/*<div>
                    <div className="search">
                        <input
                        type="text"
                        placeholder="Search by item"
                        value={searchItem}
                        onChange={this.onChangeSearchItem}
                        />
                        <div>
                            <button
                                type="button"
                                onClick={this.searchItem}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div> */}
                
                <div>
                    <h4>Groceries List</h4>

                    <button onClick={this.removeAllItems}>Remove All</button>

                    <div className="list">
                        <table>
                            <tbody>
                                {this.state.items.map(item => 
                                <tr key={item.id}>
                                    <QuantityCounter/>
                                    <td>{item.itemName}</td>
                                    {/* <td><button onClick={() => this.updateItem(item.id)}>Edit</button></td> */}
                                    <td><button onClick={() => this.deleteItem(item.id)}>X</button></td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Link to='/add'>
                    <button>+</button>
                </Link>
        </div>
        )
    }

}