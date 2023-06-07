# Hooks

## useState

Hooks其实就是javascript函数，这个函数可以帮助你钩入(hook into)React State
以及生命周期等特征。
但是他们有两个额外的规则：
1. 只能在函数最外层调用hook。不能在 ***循环内***，***条件判断***，或者 ***子函数*** 中使用
2. 只能在函数组件中调用hook，不能在其它javascript中调用
