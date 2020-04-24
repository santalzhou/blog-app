import React, { Component, } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Item, ListWrapper, MoreB, None, } from './style';
import { Wrapper, } from '../../style';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'list': [],
      'page': 1,
      'total': -1,
      'pageSize': 10,
    };
    this.loadMore = this.loadMore.bind(this);
    this.getList = this.getList.bind(this);

  }

  render() {
    const { page, total, pageSize, } = this.state;
    let tip = '';

    if(total < 1){
      tip =  <None>未找到‘{this.props.location.search.split('=')[1]}’相关信息</None>;
    }else{
      if(total > (page - 1) * pageSize){
        tip = <MoreB onClick={this.loadMore}> 加载更多 </MoreB>;
      }else{
        tip = <None>------没有更多了--------</None>;
      }
    }

    return (
      <Wrapper>

        <ListWrapper>
          {this.state.list
            ? this.state.list.map((item) => <Item key={item._id}>
              <Link className="title" to={'/detail/' + item._id}>{item.title}<span>{new Date(item.date).toString()}</span></Link>
              <p dangerouslySetInnerHTML={{ __html: item.content, }}></p>
            </Item>) : null}
        </ListWrapper>

        {tip}
      </Wrapper>
    );

  }

  componentDidMount() {
    this.getList(1);
  }


  componentWillReceiveProps() {
    this.setState({list: []}, ()=>{
      this.getList(1);
    })
  }

  loadMore() {
    this.getList(this.state.page);
  }

  getList(page) {
    // 改成 get
    this.$axios.get(`list?page=${page}&pageSize=${this.state.pageSize}&${this.props.location.search.substr(1)}`).then((res) => {
      this.setState({
        'list': this.state.list.concat(res.list),
        'total': res.total,
        'page': this.state.page + 1,
      });
    }).catch((res) => {
      console.log(
        'wrong---',
        res
      );
    });

  }

}

export default withRouter(List);
