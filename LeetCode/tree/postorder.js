const root = { // 二叉树
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        left: {
            val: 'F'
        },
        right: {
            val: 'G'
        }
    }
}
function postorder(root) {
    // 递归边界
    if(!root)   return ;

    postorder(root.left);
    postorder(root.right);
    console.log("后序遍历当前节点为：" + root.val);
}

postorder(root);