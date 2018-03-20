import React from 'react'; 

import MUtil from 'utils/mm.jsx';
import Product from 'services/product-service.jsx';

import './category-selector.scss'

const _mm   = new MUtil();
const _product = new Product();

class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCategoryList   : [],
            firstCategoryId     : 0,
            secondCategoryList  : [],
            secondCategoryId    : 0
        }
    }

    componentDidMount() {
        this.loadFirstCategory();
    }

    loadFirstCategory(){
        _product.getCategoryList().then(res => {
            this.setState({
                firstCategoryList : res
            });
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }

    loadSecondCategory(){
        _product.getCategoryList(this.state.firstCategoryId).then(res => {
            this.setState({
                secondCategoryList : res
            });
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }
    onFirstCategoryChange(e) {
        if(this.props.readOnly){
            return;
        }

        let newValue = e.target.value || 0;
        this.setState({
            firstCategoryId: newValue,
            secondCategoryId: 0,
            secondCategoryList: []
        }, ()=>{
            this.loadSecondCategory()
            this.onPropsCategoryChange();
        });
    }
    onSecondCategoryChange(e) {
        if(this.props.readOnly){
            return;
        }
        let newValue = e.target.value || 0;
        this.setState({ 
            secondCategoryId: newValue
        }, ()=>{  
            this.onPropsCategoryChange();
        });
    }
    // 传给父组件选中的结果
    onPropsCategoryChange() {
        let categoryChangable = typeof this.props.onCategoryChange === 'function';
        if(this.state.secondCategoryId) {
            categoryChangable && this.props.onCategoryChange(this.state.secondCategoryId,this.state.firstCategoryId);
        }else{
            categoryChangable && this.props.onCategoryChange(this.state.firstCategoryId, 0); 
        }
    }
    render() {
       
        return (
            <div className="col-md-10">
                <select className="form-control cate-select"
                value={this.state.firstCategoryId}
                onChange={(e) => this.onFirstCategoryChange(e)}
                readOnly={this.props.readOnly}>
                    <option value="">请选择一级分类</option>
                    {
                        this.state.firstCategoryList.map(
                            (category, index)=> <option value={category.id} key={index}>{category.name}</option>
                        )
                    }
                </select>
                { 
                 this.state.secondCategoryList.length ?
                    <select name=""className="form-control cate-select" 
                    value={this.state.secondCategoryId}
                        onChange={(e) => this.onSecondCategoryChange(e)}
                        readOnly={this.props.readOnly}>
                    <option value="">请选择二级分类</option>
                    {
                        this.state.secondCategoryList.map(
                            (category, index)=> <option value={category.id} key={index}>{category.name}</option>
                        )
                    }
                </select> : null
                }
            </div>
        )
    }
}

export default CategorySelector;
