import React, { Component } from 'react'
import { Wrapper, ListWrapper, Item } from './style'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
  }

  render() {
    return (
      <Wrapper>
        <ListWrapper>
          { this.state.list ?
            this.state.list.map((item) => {
              return (<Item key={item._id}>
                        <h5>{item.title}<span>{item.date.split('T')[0]}</span></h5>
                        <p dangerouslySetInnerHTML = {{ __html: item.content }}></p>
                      </Item>)
            }) : null
          }

        </ListWrapper>

      </Wrapper>
    )
  }

  componentDidMount() {
    this.$axios.post('list', { page: 1 }).then(res => {
      console.log(res);
      this.setState({
        list: res.list
      })

    }).catch(res => {
      console.log('wrong---', res);

    })
  }
}

export default List