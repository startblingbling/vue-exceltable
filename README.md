# vue-elementui-exceltable 可编辑的表格组件

[English document](https://github.com/KevinMint55/vue-elementui-exceltable/blob/master/READNE-EN.md)

适用于 Vue 的可编辑的表格组件，支持多种快捷键操作，模拟 Excel 的操作体验

Demo here: https://demo.willwuwei.com/willtable/

基于该组件实现的多人实时共享编辑表格系统:

[访问网址](https://castle.willwuwei.com)

[前端项目地址](https://github.com/KevinMint55/vue-castle)

[后端项目地址](https://github.com/KevinMint55/node-castle)

## 修改

- 增加级联选择器
- 修改 date,month,select,cascader 使用时，均需要两个单元格，前一个单元格展示选中的文本，后一个单元格不展示存放选中的 value 值
- 示例 ：{
  title: '日期',
  key: 'dateLabel',
  type: 'date',
  width: 100,
  show: true
  },
  {
  title: '日期',
  key: 'date',
  width: 0,
  show: false
  },

## 截图

![image](https://qiniu.willwuwei.com/willtable1.gif)

![image](https://qiniu.willwuwei.com/willtable2.gif)

## 特性

- 表格宽度调整
- 表格列固定
- 数据筛选与排序
- 行多选
- 批量删除与复制粘贴
- 可与 Excel 互相复制粘贴
- 数据下拉复制
- 下拉复制与多选单元格时候表格可自动滚动
- 获取改变的数据行
- 多种数据类型校验
- 支持自定义规则数据校验
- 获取校验非法的数据行
- 支持撤销与重做
- 可自定义每个单元格样式与类名
- 使用局部渲染，支持更大量数据的展示

## 安装

```
npm install vue-elementui-exceltable --save
```

## 挂载

### 挂载在全局

```javascript
import Vue from 'vue'
import VueElementuiExceltable from 'vue-elementui-exceltable'

// require styles
import 'vue-elementui-exceltable/dist/vue-elementui-exceltable.min.css'

Vue.component('VueElementuiExceltable', VueElementuiExceltable)
```

### 挂载在组件

```javascript
import VueElementuiExceltable from 'vue-elementui-exceltable'

// require styles
import 'vue-elementui-exceltable/dist/vue-elementui-exceltable.min.css'

export default {
  components: {
    VueElementuiExceltable
  }
}
```

## 使用例子

```vue
<template>
  <vue-elementui-exceltable
    ref="willtables"
    :columns="columns"
    v-model="data"
    :showIcon="showIcon"
    @selection-change="selectionChange"
    :maxHeight="maxHeight"
    :disabled="disabled"
    :cellStyle="cellStyle"
    :cellClassName="cellClassName"
    :rowHeight="rowHeight"
  >
  </vue-elementui-exceltable>
</template>
<script>
export default {
  props: {
    columns: {
      type: Object,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    maxHeight: {
      type: Number,
      default: 800,
      required: false
    },
    showIcon: {
      type: Boolean,
      default: () => {
        return true
      },
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    cellStyle: {
      type: Function,
      default: () => {},
      required: false
    },
    cellClassName: {
      type: Function,
      default: () => {},
      required: false
    },
    rowHeight: {
      type: Number,
      default: 28,
      required: false
    }
  },
  data () {
    return {}
  },
  methods: {
    getData () {
      const data = [
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        },
        {
          titleEn: '',
          titleCn: '',
          publisherEn: '',
          publisherCn: '',
          authorEn: '',
          authorCn: '',
          isbn: '',
          copyStatus: '',
          pubDate: '',
          pageNum: '',
          format: '',
          edition: '',
          series: '',
          classify: '',
          lang: '',
          country: ''
        }
      ]
      this.$refs.willtables.setData(data)
      window.willtables = this.$refs.willtables
    },
    selectionChange (selection) {
      this.selectedIds = selection.map(item => item.id)
    }
  },
  mounted () {
    this.getData()
    setTimeout(() => {
      willtables.handleResize()
    }, 200)
  },
  updated () {
    this.$refs.willtables.data.length === 10 ? () => {} : this.getData()
    // debugger
  }
}
</script>
<style lang="scss"></style>
```

### 数据

this.\$refs.willtable 调用 setData 方法来更新整表数据，并会重置历史数据记录.

this.\$refs.willtable 调用 getData 方法来获取整表数据.

`v-model`进行值的绑定

### 属性

| 参数          | 说明                          | 类型                                           | 可选值 | 默认值 |
| ------------- | ----------------------------- | ---------------------------------------------- | ------ | ------ |
| columns       | 表格列的配置描述              | Array                                          | ——     | []     |
| maxHeight     | 表格最大高度                  | string / number                                | ——     | ——     |
| rowHeight     | 每行高度                      | string / number                                | ——     | ——     |
| disabled      | 是否禁止编辑                  | Boolean                                        | ——     | true   |
| showIcon      | 是否显示表头类型图标          | Boolean                                        | ——     | false  |
| cellStyle     | 单元格的 style 的回调方法     | Function({row, column, rowIndex, columnIndex}) | ——     | ——     |
| cellClassName | 单元格的 className 的回调方法 | Function({row, column, rowIndex, columnIndex}) | ——     | ——     |

### 事件

| 事件名称         | 说明                           | 回调参数  |
| ---------------- | ------------------------------ | --------- |
| selection-change | 当选择项发生变化时会触发该事件 | selection |

### 方法

| 方法名        | 说明                                                                    | 参数        |
| ------------- | ----------------------------------------------------------------------- | ----------- |
| getData       | 用来获取数据，返回当前表格数据                                          | ——          |
| setData       | 用来设置数据，并重置历史记录                                            | data        |
| getChangeData | 获取变化的数据行                                                        | ——          |
| getErrorRows  | 获取校验错误的数据和索引                                                | ——          |
| addItem       | 底部添加一行数据                                                        | item        |
| removeItems   | 批量删除，参数 key 为每行的唯一标识属性如 id，values 为该标识属性的数组 | key, values |

### 列属性

| 参数     | 说明                           | 类型            | 可选值                             | 默认值 |
| -------- | ------------------------------ | --------------- | ---------------------------------- | ------ |
| key      | 对应列内容的字段名             | String          | ——                                 | ——     |
| title    | 列头显示文字                   | String          | ——                                 | ——     |
| width    | 列宽度                         | String / Number | ——                                 | ——     |
| type     | 列类型                         | String          | selection/number/date/select/month | ——     |
| format   | 千分号格式（用于 number 类型） | Boolean         | ——                                 | true   |
| options  | select 下拉选项                | Array           | { value: '值', label: '显示文字' } | ——     |
| fixed    | 是否固定在左侧                 | Boolean         | ——                                 | false  |
| action   | 是否启用筛选和排序             | Boolean         | ——                                 | false  |
| disabled | 是否禁止编辑                   | Boolean         | ——                                 | false  |
| noVerify | 是否禁用校验                   | Boolean         | ——                                 | false  |
| validate | 自定义校验                     | Function(value) | ——                                 | ——     |

### 快捷键

| 快捷键            | 说明                      |
| ----------------- | ------------------------- |
| 方向键            | 移动编辑框                |
| Ctrl + C          | 粘贴                      |
| Ctrl + V          | 复制                      |
| Ctrl + A          | 单元格全选                |
| Ctrl + Z          | 撤销                      |
| Ctrl + Y          | 重做                      |
| Enter             | 单元格编辑/完成单元格编辑 |
| Delete、Backspace | 删除                      |

## 作者

[WillWu](https://www.willwuwei.com)
