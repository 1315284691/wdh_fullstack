import React, { Component } from 'react';
import _ from 'lodash'; // 
import moment from 'moment'; // 时间处理库
import 'moment/locale/zh-cn';
moment.locale('zh-CN');

export default class Note extends Component {
  state = {
    entity: this.props.entity,
    // created  updated
    updated: this.props.entity.meta.updated || 
      this.props.entity.meta.created
  }

  updated() { // 封装的魅力
    // return moment()
    return moment(this.state.updated).fromNow()
  }

  header() {
      return _.truncate(this.state.entity.body,{
          length: 5
      }) || '新建笔记';
  }
  words() {
      return this.props.entity.body.length
  }

  render() {
    return (
      <div className="item">
        <div className="meta">
          {this.updated()}
        </div>
        <div className="content">
            <div className="header">
                <div className="extra">
                    { this.words() }
                    <i className="right floated trash outline icon" 
                    onClick={() =>
                      this.props.destroyEntity(this.props.entity)
                    }/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
