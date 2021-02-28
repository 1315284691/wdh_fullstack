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
function inorder(root) { // 中序遍历
    // 递归边界（树为空）
    if(!root) return ;

    inorder(root.left);
    console.log("中序遍历当前节点为：" + root.val);
    inorder(root.right);
}
inorder(root);