# lerna-template

## lerna.json

```
"npmClient": "yarn",
"useWorkspaces": true
```

## package.json

```
"private": true,
"workspaces": ["packages/*"],
```

## 初始化

``` 
lerna init --independent

```

## 添加包

```
lerna create pkg1
```

## 关联

```
yarn
```

## 依赖
```
yarn add -W -D webpack //这是安装到根目录，各个pkg都可以使用，-W 表示workspace。 使用-D（开发依赖），不要使用--save-dev
```