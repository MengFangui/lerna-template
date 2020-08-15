# lerna-template

lerna-template是基于lerna和yarn的大型前端多包管理示例代码。本项目使用lerna管理版本发布，使用yarn管理依赖（包括外部依赖和内部依赖），同时可以自动生成日志文件，方便管理代码仓库。

## lerna.json核心配置

```
{
  "packages": [
    "packages/*"
  ],
  "npmClient": "yarn", //yarn管理依赖
  "useWorkspaces": true,
  "version": "independent" //independent模式
}

```

## package.json核心配置

```
{
  "name": "root",
  "private": true,
  "workspaces": [ //配置workspaces目录
    "packages/*"
  ],
  "scripts": {
    "commit": "git-cz", //运行yarn run commit规范提交记录
    "genlog": "conventional-changelog -p angular -i CHANGELOG.md -s" //运行yarn run genlog产生日志文件
  },
  "devDependencies": {
    "@babel/core": "^7.11.1",
    "@babel/preset-env": "^7.11.0",
    "@babel/preset-typescript": "^7.10.4",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "commitizen": "^4.1.2",
    "conventional-changelog-cli": "^2.1.0",
    "cz-conventional-changelog": "^3.2.0",
    "eslint": "^7.6.0",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "lerna": "^3.22.1",
    "prettier": "^2.0.5",
    "rimraf": "^3.0.2",
    "typescript": "^3.9.7",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-merge": "^5.1.1"
  },
  "config": {
    "commitizen": { //配置commitizen
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}

```

## 添加包目录

```
lerna create @test/pkg1 //@字符开始表明仓库是私有仓库
```
当然也可以在packages文件夹下直接添加文件夹。

## 安装并关联依赖（包括外部依赖和内部依赖）

```
yarn
```

## 依赖管理

### 项目根目录添加外部依赖

```
yarn add webpack -W -D //这是安装到根目录，各个包模块都可以使用，-W 表示workspace。 使用-D（开发依赖），不要使用--save-dev
```

### 给某个包添加外部依赖

```
yarn workspace  @test/pkg1 add  lodash -S //这是安装到pkg1目录，只有pkg1可以使用，使用-S（生产依赖）或者-D（开发依赖）
```

### 给某个包添加内部依赖

```
yarn workspace  @test/pkg2 add  @test/pkg1@1.0.0 -S //这是安装到pkg1目录，只有pkg1可以使用，使用-S（生产依赖）或者-D（开发依赖）,一定要加上版本号，如@test/pkg1@1.0.0，否则yarn会搜索远程注册表，而不是搜索工作区的包。这一行表示给pkg2添加pkg1依赖。
```

## 规范提交说明

```
yarn run commit //不要运行git commit，使用yarn run commit提交变更信息
```

## 日志文件生成

```
yarn run genlog //根目录下的CHANGELOG.md会显示变更信息
```