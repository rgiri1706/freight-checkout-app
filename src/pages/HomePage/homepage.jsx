import React, { Component } from 'react';
import { connect } from 'react-redux';
import './homepage.styles.scss';
import { loadItem } from '../../redux/cart/cart.actions';
import CollectionItem from '../../components/collection-items/collection-item.component';

class HomePage extends Component {
    constructor(){
        super();
        this.state={
            list: ''
        };
    }
    componentDidMount(){
        const { listData , loadItem} = this.props;
        if(listData && listData.length === 0){
            fetch('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6')
            .then(response=>response.json())
            .then(itemList=> this.setState({
                list: itemList.products
            },()=>loadItem(this.state.list)));
        }else{
            this.setState({
                list: listData
            });
        }
    }
    render(){
        return (
            <div>
                <div className='collection-page'>
                    <div className='items'>
                        {
                        this.state.list && this.state.list.map(item=> <CollectionItem key={item.productId} item={item} />)
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