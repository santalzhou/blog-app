import React, { Component, } from 'react';
import Message from '../../common/message/index';
import { Wrapper, None, Button, } from '../../style';
import { Block, List, Item, DelMask, Submit, } from './style';

class category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      newValue: '',
    };

    //将原型上的方法绑定到实例上， 规避this指向问题，  但此处加不加此句好像一样？？？ 官网给的例子有加 ？？
    this.getList = this.getList.bind(this);
    this.chgCategory = this.chgCategory.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.delCategory = this.delCategory.bind(this);
    this.keyUp = this.keyUp.bind(this);
  }

  render() {
    let { list, } = this.state;
    return (
      <Wrapper>
        <Block>
          <h4>新增分类</h4>
          <input placeholder='请输入分类名称' onChange={this.chgCategory} onKeyUp={this.keyUp}/>
          <Submit onClick={this.addCategory}>提交</Submit>
        </Block>
        <Block>
          <h4>现有分类</h4>
          <List>
            {
              list.length > 0 ?
                list.map((item, idx) =>
                  <Item key={item._id}>
                    <span>{item.type}</span>
                    <DelMask className={'mask'} onClick={()=>this.delCategory(item._id)}>删除</DelMask>
                  </Item>
                )

                : <None>--暂无分类--</None>
            }
          </List>
          {/* <Message title="aaa"></Message> */}
        </Block>
      </Wrapper>
    );
  }

  componentDidMount() {
    this.getList();
  }

  keyUp(e) {
    if (e.keyCode === 13 && this.state.inputVal !== '') {
      this.addCategory();
    }
  }

  addCategory() {
    if (this.state.newValue === '') {
      return;
    }
    this.$axios.get(`/addCategory?name=${this.state.newValue}`).then(res => {
      if (res.success === true) {
        this.getList();
      }
    });
  }

  getList() {
    this.$axios.get('/getCategory').then(res => {
      if (res.success === true) {
        this.setState({
          list: res.list,
          newValue: '',             // 无效？
        });
      }
    });
  }

  chgCategory(e) {
    this.setState({
      newValue: e.target.value,
    });
  }

  delCategory(id){
    this.$axios.get(`/deleteCategory?id=${id}`).then((res)=>{
      if(res.success === true){
        this.getList();
      }
    }).catch(res=>{
      console.log('获取失败');
    });
  }

}

export default category;

