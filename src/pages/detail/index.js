import React, { Component, } from 'react';
import { Title, Content, Time, Wrapper, } from './style';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      title: '',
      content: '',
      date: '',
    };
  }

  render() {
    const { title, content, date, } = this.state;
    return (
      <Wrapper>
        {title ?
          (<div>
            <Title>{title}</Title>
            <Time>{date}</Time>
            <Content dangerouslySetInnerHTML={{ __html: content, }}></Content>
          </div>)
          : '文章不存在'}

      </Wrapper>
    );
  }

  componentDidMount() {
    this.$axios.get('/detail', { params: { id: this.props.match.params.id, }, }).then(res => {
      if (res.artical) {
        this.setState({
          title: res.artical.title,
          content: res.artical.content,
          date: new Date(res.artical.date).toLocaleString(),
        });
      }
    });
  }
}

export default Detail;