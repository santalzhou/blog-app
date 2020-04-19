import React, { Component, } from 'react';
import E from 'wangeditor';
import Alert from '../../common/alert/index';

import { BackB, ConfirmB, Footer, HInupt, Header, Wrapper, } from './style';


class Write extends Component {

  constructor(props) {

    super(props);
    this.state = {
      'editorContent': '',
      'title': '',
      'showAlert': false,
    };
    this.editorElemMenu = React.createRef();
    this.editorElemBody = React.createRef();
    this.submitArti = this.submitArti.bind(this);
    this.changeTitle = this.changeTitle.bind(this);

  }

  render() {

    return (
      <Wrapper>

        <Header>
          添加文章
          <HInupt
            onChange={this.changeTitle}
            placeholder="输入文章标题"
          />
        </Header>
        <div
          ref={this.editorElemMenu}
          style={{
            'backgroundColor': '#f1f1f1',
            'border': '1px solid #ccc',
          }}
        />
        <div
          style={{
            'height': 460,
            'border': '1px solid #ccc',
            'borderTop': 'none',
          }}
          ref={this.editorElemBody}
        />
        <Footer>
          <ConfirmB onClick={this.submitArti}>
            发布
          </ConfirmB>
          <BackB>
            返回
          </BackB>
        </Footer>
        {this.state.showAlert ? <Alert title="发布成功" /> : null}
      </Wrapper>
    );

  }

  changeTitle(e) {

    this.setState({
      'title': e.target.value,
    });

  }

  submitArti() {
    if (!this.state.editorContent) {
      return;
    }
    this.$axios.post(
      '/write',
      {
        'title': this.state.title,
        'content': this.state.editorContent,
      }
    ).then((res) => {

      this.setState({
        'showAlert': true,
      });
      setTimeout(
        () => {

          this.setState({
            'showAlert': false,
          });

        },
        1500
      );

    }).
      catch((res) => {

        console.log('发布失败');

      });

  }

  componentDidMount() {

    const elemMenu = this.editorElemMenu.current,
      elemBody = this.editorElemBody.current,
      editor = new E(
        elemMenu,
        elemBody
      );
    // 每次输入内容都会触发change
    editor.customConfig.onchange = (html) => {

      // Console.log(editor.txt.html())
      this.setState({
        'editorContent': editor.txt.html(),
      });

    };
    editor.customConfig.menus = [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'video', // 插入视频
      'code', // 插入代码
      'undo', // 撤销
      'redo', // 重复
    ];
    editor.customConfig.uploadImgShowBase64 = true;
    editor.create();

  }

}

export default Write;
