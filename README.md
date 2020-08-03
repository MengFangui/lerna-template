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
yarn add -W -D webpack
```