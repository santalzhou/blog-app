import React, { Component, } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { Title, Weather, RightWrapper, SearchWrapper, Search, CloseBtn, } from './style';

class Right extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'weat': '',
      'tip': '',
      'temp': '', // 当前温度
      'tempInterval': '',
      'city': '',
      'week': '',
      focusSearch: false,
      inputVal: '',
    };

    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.changInput = this.changInput.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
    this.keyUp = this.keyUp.bind(this);
  }

  render() {

    const { date, weat, tip, temp, tempInterval, city, week, } = this.state;
    return (
      <RightWrapper>
        <Weather>
          {date !== '' ?
            <p>
              {`${date} ${week} ${city}  ${weat} ${temp}`}
            </p>
            : null}
        </Weather>
        <SearchWrapper className={this.state.focusSearch ? 'active' : ''}>
          <Search placeholder='搜索' onFocus={this.focus} onBlur={this.blur}
            onChange={this.changInput} onKeyUp={this.keyUp}></Search>
          <CloseBtn onClick={this.cleanInput}></CloseBtn>
        </SearchWrapper>
        <Title>
          <Link to='/' className={'link'}><span className="iconfont">&#xe600;</span>首页</Link>
          <Link to='/write' className={'link'}><span className="iconfont">&#xe612;</span>写博客</Link>
          <Link to='/list' className={'link'}><span className="iconfont">&#xe6eb;</span>博客列表</Link>
          <Link to='/category' className={'link'}><span className="iconfont">&#xe6eb;</span>分类管理</Link>

        </Title>
        <p>博客分类， 按时间查询？</p>
      </RightWrapper>
    );

  }

  componentDidMount() {
    this.$axios.get('/weather').then((res) => {
      this.setState({
        'date': res.date,
        'weat': res.wea || '',
        'tip': res.air_tips,
        'temp': (res.tem || `${Math.ceil((parseInt(res.tem1) + parseInt(res.tem2)) / 2)}`) + '℃',
        'tempInterval': `${res.tem2}℃~${res.tem1}℃`,
        'city': res.city,
        'week': res.week,
      });

    }).catch((res) => {
      // Console.log('获取天气信息失败');
    });
  }

  focus() {
    this.setState({
      'focusSearch': true,
    });
  }

  blur() {
    // this.setState({
    //   'focusSearch': false
    // })
  }

  changInput(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  cleanInput(e) {
    this.setState({
      inputVal: '',
      focusSearch: true,
    });
  }

  // 回车 关键词查询
  keyUp(e) {
    if (e.keyCode === 13 && this.state.inputVal !== '') {
      // console.log(this.state.inputVal)
      // 携带参数跳转到列表页
      this.props.history.push(`/list?search=${this.state.inputVal}`);
    }
  }
}

export default withRouter(Right);
