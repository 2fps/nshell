import React from 'react';

import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;
const gData = [];

let index = 0;

/**
 * 将转化成JSON的数据转成树需要的数据
 * @param {Object} obj 数据
 * @param {Array} gData 传给树的数据
 */
let generateData = (obj, gData) => {
    for (var ind in obj) {
        if ('object' !==typeof obj[ind]) {
            // 普通数据，直接显示
            gData.push({
                title: addquotes(ind) + ' : ' + addquotes(obj[ind]),
                key: index++
            });
        } else {
            let str = Array.isArray(obj[ind]) ? '[..,]' : '{..,}';

            gData.push({
                title: addquotes(ind) + ' : ' + addquotes(str),
                key: index++,
                children: []
            });
            generateData(obj[ind], gData[ gData.length - 1 ].children);
        }
    }
};

let addquotes = (param) => {
    if ('number' === typeof param) {
        return param;
    } else {
        return '\"' + param + '\"';
    }
}

class ObjectTree extends React.Component {
  state = {
    gData
  }
  
  componentWillReceiveProps(nextProps) {
    let da = [];

    index = 0;
    generateData(nextProps.object, da);
    this.setState({
        gData: da
    });
  }

  render() {
    const loop = data => data.map((item) => {
        if (item.children && item.children.length) {
            return <TreeNode key={item.key} title={item.title}>{loop(item.children)}</TreeNode>;
        }
        return <TreeNode key={item.key} title={item.title} />;
    });
    return (
        <Tree
            className="draggable-tree"
            defaultExpandParent
            defaultExpandedKeys={this.state.expandedKeys}
        >
            {loop(this.state.gData)}
        </Tree>
    );
  }
}

export default ObjectTree;