# vue-elementui-exceltable Editable table component

Made some changes based on the vue-willtable table

[vue-willtable 项目地址]（https://github.com/KevinMint55/vue-willtable)

vue-willtable Author

[WillWu](https://www.willwuwei.com)

## modify

- Add cascader
- Modify :When using date, month, select, and cascader, two cells are required. The first cell displays the selected text, and the latter cell does not display the selected value.
- example ：{
  title: 'date',
  key: 'dateLabel',
  type: 'date',
  width: 100,
  show: true,
  requiredIcon: true //table-header add \*，the cell is required
  },
  {
  title: 'date',
  key: 'date',
  width: 0,
  show: false
  },
- After editing the cell, when the cell does not lose focus, call this.$refs.vueElementuiExceltable.$refs.willtables.clickoutside(), the table data at this time will contain the cell data that has just been edited

## Installation

```
npm install vue-elementui-exceltable --save
```

## Mount

### mount with global

```javascript
import Vue from 'vue'
import VueElementuiExceltable from 'vue-elementui-exceltable'

// require styles
import 'vue-elementui-exceltable/dist/vue-elementui-exceltable.min.css'

Vue.component('VueElementuiExceltable', VueElementuiExceltable)
```

### mount with component

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

## Usage

```vue
<template>
  <willtable
    ref="willtable"
    :columns="columns"
    v-model="data"
    maxHeight="800"
  />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width: 40,
          fixed: true,
        },
        {
          title: 'Serial number',
          key: 'sid',
          fixed: true,
          type: 'number',
          width: 100,
        },
        {
          title: 'name',
          key: 'name',
          fixed: true,
          width: 120,
        },
        {
          title: 'date',
          key: 'date',
          type: 'date',
          width: 100,
        },
        {
          title: 'job',
          key: 'email',
          width: 300,
          type: 'select',
          options: [
            {
              value: 'Front-end web engineer',
              label: 'Front-end web engineer',
            },
            {
              value: 'Java engineer',
              label: 'Java engineer',
            },
            {
              value: 'Python engineer',
              label: 'Python engineer',
            },
            {
              value: 'Php engineer',
              label: 'Php engineer',
            },
          ],
        },
        {
          title: 'month',
          key: 'month',
          type: 'month',
          width: 100,
        },
        {
          title: 'address',
          key: 'address',
          width: 200,
        },
        {
          title: 'title',
          key: 'title',
          width: 300,
        },
        {
          title: 'content',
          key: 'paragraph',
          width: 300,
        },
        {
          title: 'link',
          key: 'url',
          width: 200,
        },
        {
          title: 'ip',
          key: 'ip',
          width: 200,
          validate: (value) => {
            const pattern = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g;
            return pattern.test(value);
          },
        },
        {
          title: 'total amount',
          key: 'sum',
          width: 200,
        },
        {
          title: 'ID',
          key: 'id',
          width: 200,
        },
        {
          title: 'color',
          key: 'color',
          width: 200,
        },
      ],
      data: [],
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const data = [];
      this.$refs.willtable.setData(data);
    },
  },
};
</script>
```

### Data

this.\$refs.willtable call the setData method to update the entire table data, and will reset the historical data records.

this.\$refs.willtable call the getData method to get the entire table data.

`v-model`Value-Binding

### Attributes

| parameter     | Explanation                            | Type                                           | Optional value | Default value |
| ------------- | -------------------------------------- | ---------------------------------------------- | -------------- | ------------- |
| columns       | Table column configuration description | Array                                          | ——             | []            |
| maxHeight     | Max height of column                   | string / number                                | ——             | ——            |
| rowHeight     | Height per row                         | string / number                                | ——             | ——            |
| disabled      | Whether to prohibit editing            | Boolean                                        | ——             | true          |
| showIcon      | Whether to display the header icon     | Boolean                                        | ——             | false         |
| cellStyle     | callback method of cell's style        | Function({row, column, rowIndex, columnIndex}) | ——             | ——            |
| cellClassName | callback method of cell's classname    | Function({row, column, rowIndex, columnIndex}) | ——             | ——            |

### Events

| Event name       | Explanation                              | callback parameter |
| ---------------- | ---------------------------------------- | ------------------ |
| selection-change | trigger event when the selection changes | selection          |

### Methods

| Name          | Explanation                                                                                                                                  | parameter   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| getData       | Return the current table data                                                                                                                | ——          |
| setData       | set the data and reset the historical data records                                                                                           | data        |
| getChangeData | Get changed rows                                                                                                                             | ——          |
| getErrorRows  | Get data and its index that doesn't pass the verification                                                                                    | ——          |
| addItem       | Add a row of data to the bottom                                                                                                              | item        |
| removeItems   | delete, the key is the unique identification attribute of each row, such as id, and the values are the array of the identification attribute | key, values |

### Columns-Attributes

| parameter | Explanation                                | Type            | Optional value                     | Default value |
| --------- | ------------------------------------------ | --------------- | ---------------------------------- | ------------- |
| key       | fieldName                                  | String          | ——                                 | ——            |
| title     | display text                               | String          | ——                                 | ——            |
| width     | width                                      | String / Number | ——                                 | ——            |
| type      | type                                       | String          | selection/number/date/select/month | ——            |
| format    | Thousand semicolon format(for number type) | Boolean         | ——                                 | true          |
| options   | select drop-down options                   | Array           | { value: 'value', label: 'text' }  | ——            |
| fixed     | Whether fixed on the left                  | Boolean         | ——                                 | false         |
| action    | Whether to enable filtering and sorting    | Boolean         | ——                                 | false         |
| disabled  | Whether to disable editing                 | Boolean         | ——                                 | false         |
| noVerify  | Whether to disable verification            | Boolean         | ——                                 | false         |
| validate  | self-defined verification                  | Function(value) | ——                                 | ——            |

### Shortcut

| Shortcut keys     | Explanation                          |
| ----------------- | ------------------------------------ |
| Arrow key         | Move the edit box                    |
| Ctrl + C          | Paste                                |
| Ctrl + V          | Copy                                 |
| Ctrl + A          | Select all cells                     |
| Ctrl + Z          | Undo                                 |
| Ctrl + Y          | Redo                                 |
| Enter             | Cell editing / complete cell editing |
| Delete、Backspace | Delete                               |

## Author

[WillWu](https://www.willwuwei.com)
