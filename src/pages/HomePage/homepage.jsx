import React, { Component } from 'react';
import { connect } from 'react-redux';
import './homepage.styles.scss';
import { loadItem } from '../../redux/cart/cart.actions';
import CollectionItem from '../../components/collection-items/collection-item.component';

class HomePage extends Component {
    constructor(){
        super();
        this.state={
            list: '',
            filterList: '',
            searchText: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        const { listData , loadItem} = this.props;
        if(listData && listData.length === 0){
            fetch('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6')
            .then(response=>response.json())
            .then(itemList=> this.setState({
                list: itemList.products,
                filterList: itemList.products,
            },()=>loadItem(this.state.list)));
        }else{
            this.setState({
                list: listData,
                filterList: listData,
            });
        }
    }

    searchFunction =(searchText)=>{
        let arr = this.state.list.filter((data)=> {
            return data.productName===searchText
        });
        this.setState({
            filterList: arr
        });
        if(searchText.length === 0){
            this.setState({
                filterList: this.state.list
            });
        }
    }


    handleChange(event){
        this.setState({
            searchText: event.target.value 
        }, ()=> this.searchFunction(this.state.searchText));
    }

    render(){
        return (
            <div>
                <div className='collection-page'>
                    <input type="text" onChange={this.handleChange} value={this.state.searchText} />
                    <div className='items'>
                        {
                        this.state.filterList && this.state.filterList.map(item=> <CollectionItem key={item.productId} item={item} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps =state=>({
    listData: state.cart.loadedItems
})

const mapDispatchToProps = dispatch => ({
    loadItem: item => dispatch(loadItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);