# ls 

1. ls 是如何运作的，有哪些常用的命令？
    在linux里，一切皆文件 
    ls 文件列表？ ls/   /path 根路径 
    - 理解根目录 一些意义
    /bin binary 二进制 PATH ls cat
    /dev device
    /etc 配置文件 mysql ngnix 
    host 文件用来配置什么？ 在那个应用场景下使用
    /usr 很多程序放在这个文件下

    www.taobao.com ip dns 缓存 -> 网络服务器
    host 文件，先来这里检测一下

    1. 你在淘宝做开发的时候
        git clone www.taobao.com brach /search
        host 本地调试淘宝页面
        git push main master 远程服务器

    drwxr-xr-x 
    第一位是文件类型 d 目录 dictionary - 普通文件
    rwx 第二到第四位 权限 read write 执行
    r-x 5-7位表示用户所具有的权限 r x
    r-x 8-10 其他用户所具有的权限