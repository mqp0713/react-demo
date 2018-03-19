import React from 'react';
import './like.css';

class Like extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLike: false
    };
    this.likeHandler = this.likeHandler.bind(this);
  }

  render() {
      return (
          <div onClick={this.likeHandler} className="like" style={{background: this.props.bgcolor}}>
            <span>{this.state.isLike ? '取消' : '点赞'}</span>
            <span>👍</span>
          </div>
      )
  }
  // 按钮添加点击事件
  likeHandler() {
    this.setState({
      isLike: !this.state.isLike 
    })
  }
}

export default Like;