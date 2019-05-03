> :musical_note:
> https://help.github.com/en/articles/basic-writing-and-formatting-syntax  
> https://www.webfx.com/tools/emoji-cheat-sheet/  


# Setup git and node.js
> git config --global user.name "gm80474"
> git config --global user.email "gm80474@gmail.com"

> git clone "https://github.com/gm80474/Helloworld.git" Helloworld1
> cd Helloworld

# edit \Helloworld1\package.json
``` 
{
  "name": "nodejsheroku",
  "version": "0.0.1",
  "description": "deploying node js to heroku platform",
  "main": "server.js",
  "author": {
    "name": "gm80474",
    "email": "gm80474@gmail.com"
  },
  "engines": {
    "node": "10.15.3",
    "npm": "6.4.1"
  },
  "dependencies": {
    "express": "4.13.x",
    "ws": "^3.0.0"
  }
}
```
> node/npm 版本参考 https://nodejs.org/en/download/releases/  
> express 版本参考 https://github.com/expressjs/express/blob/master/package.json  
> ws 版本参考 https://www.npmjs.com/package/ws  


# edit \Helloworld1\rocfile
```
"web: node server.js"
```
# edit \Helloworld1\rserver.js

# dependence installation
> Helloword1>npm install
wait for the finish and test:
> Helloword1>node server

# upload
> Helloword1>git add -A
> Helloword1>git commit -m "001"
> Helloword1>git push
这里会弹出要求输入用户名密码然后网页访问就可以看到已经上传

> Helloword1>git remote -v
如果有多个远程仓库，此命令将全部列出

之后就可以转到其他HEROKU操作

