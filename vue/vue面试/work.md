1.mvc & mvvm
*mvc*:controller 负责将model的数据用view显示出来
*mvvm*：数据的双向绑定实现原理：
后端传递的数据转化成所看到的页面，数据绑定
所看到的的页面转换成后端的数据，DOM事件监听

mvvm与mvc最大的区别就是 实现了view和model的自动同步

严格的mvvm要求view不能和model直接通讯，而vue提供了$refs这个属性，让model可以直接操作view 违反了这一规定，所以vue没有完全遵循mvvm

2、Vue组件通讯有哪些方式

*props 和 $emit*

