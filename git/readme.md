1. git init 用git来管理项目
    不同版本的价格 显示出来? git 负责
    文件会多次修改，
    初始化为一个Git 有版本控制的项目
    代码提交到远程后， 不会丢失代码
    在本地仓库中初始化了一个Git 项目，文件版本像拍照一样存在.git 目录下
2. .gitignore 忽略一下
    readme.md 不会被跟踪
3. git status 返回仓库当前的状态
4. git add *.txt
    untracked -> change to be commited 真的存
    文件有untracked -> git add .  暂存区的地方 stage
    stage -> 仓库 -> 文件的不同版本(快照)

    只是一个文件而已 git init 当前项目下有一个仓库
    git config --global user.email

    有时开发是围绕一个任务而来，修改好多文件，git commit 太多次会生成脏的提交记录

    git reset --hard HEAD^版本回退
    git reset --hard c3b49

    git log 查看提交节点
    git log --oneline 简略信息

    git remote add origin https://github.com/1315284691/*.git 提交的远端地址
    git push -u origin master 提交到远端


- git 常用命令
    git init  初始化
    git remote add origin https://github.com/1315284691/wdh_fullstack.git  远端地址
    git status 查看本地文件的修改状态
    git add . 将修改后的本地文件放入本地仓库（更新本地仓库）
    git commit -m 'first-commit'
    git push -u origin master 将本地仓库上传到远端仓库的master中

# Git 考点
    文件 -> 暂存区 -> 仓库
    生成存储记录，leader check 我们工作和代码的重要手段
- 如果提交了代码到本地仓库中，后悔了怎么办?
    git reset --hard HEAD^
    HEAD 头指针，指向当前的提交 ^ 上一次
    --hard 撤销此次提交，文件也会撤销
    --soft 撤销此次提交，回到commit 之前 但是已经在暂存区了
    --mixed 撤销此次提交，但是文件修改还在
- 美团 如何将多次提交合并一次?
- 劳逸结合，不去拼多多
- git rebase -i HEAD~n 最近几次提交合并成一次
    git rebase -i 
    git checkout master
    git rebase --abort 取消此次合并
- vi 操作
    状态 命令状态 i 输入 v 可视化操作 光标先选中几个
    hjkl 上下左右 