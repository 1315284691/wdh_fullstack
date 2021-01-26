// 先序遍历
function preorder(root) {
    if (!root) {
        return
    }
    console.log("先序遍历当前键为：" + root.key);
    preorder(root.left);
    preorder(root.right);
}
const root = {
    key: 'A',
    left: {
        key: 'B',
        left: {
            key: 'D'
        },
        right: {
            key: 'E'
        }
    },
    right: {
        key: 'C',
        left: {
            key: 'F'
        },
        right: {
            key: 'G'
        }
    }
}
preorder(root);