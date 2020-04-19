import React, {Component, } from 'react';
import {Link, } from 'react-router-dom';
import {Item, ListWrapper, MoreB, None, Wrapper, } from './style';


class List extends Component {

  constructor (props) {

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

  render () {

    const {page, total, pageSize, } = this.state;
    return (
      <Wrapper>
        <ListWrapper>
          {this.state.list
            ? this.state.list.map((item) => <Item key={item._id}>
              <Link className="title" to={'/detail?id=' + item._id}>{item.title}<span>{item.date.split('T')[0]}</span></Link>
              <p dangerouslySetInnerHTML={{ __html: item.content, }}></p>
            </Item>) : null}

        </ListWrapper>

        {
          total != -1 && total > (page - 1) * pageSize
            ? <MoreB onClick={this.loadMore}>
                加载更多
            </MoreB>
            : <None>
                ------没有更多了--------
            </None>
        }

      </Wrapper>
    );

  }

  componentDidMount () {

    this.getList(1);

  }

  loadMore () {

    this.getList(this.state.page);

  }

  getList (page) {

    this.$axios.post(
      'list',
      {page,
        'pageSize': this.state.pageSize, }
    ).then((res) => {

      this.setState({
        'list': this.state.list.concat(res.list),
        'total': res.total,
        'page': this.state.page + 1,
      });

    }).
      catch((res) => {

        console.log(
          'wrong---',
          res
        );

      });

  }

}

export default List;
