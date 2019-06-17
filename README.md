# 非常轻量精简的日期组件

包含选择日期 **Day as default**，选择周 **Week**，选择月 **Month** 三个组件。

## 为什么使用受控组件

日历的切换是通过 value + onChange 配合完成的，也就意味着调用组件需要持有日历组件日期的状态。为什么这么做呢。是因为受控组件的扩展性和灵活性是最高的，他没有内置的状态，调用组件可以完成按照自身的意图来进行控制。

如果没有控制组件渲染状态的需求，受控也只增加使用者很小的成本，把一个数据放在 state 中，并把更新 state 的方法传给受控组件。如果有特殊需要，还可以方便的按照自己的需求封装成纯业务组件。

## dayjs

本组件基于[dayjs](https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md)来实现的，所有回调方法接受的参数也是 dayjs 对象。dayjs 是一个兼容 moment 的日期库，用来做日期的操作非常方便。对于一些初始值参数可以不使用 dayjs()。组件内部会进行一次转换

## 能用参数说明

参数有变化的会在后面单独注明

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>类型</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>string | number | Date | Dayjs;</td>
      <td>？可选参数，日历组件的初始化日期，没有会从客户端取当前日期</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>(dt: Dayjs) => void;</td>
      <td>？切换日期时的回调函数，返回值为日历组件要显示的新的日期</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>(dt: Dayjs) => void;</td>
      <td>?可选参数，点击每个日期单元格的回调函数</td>
    </tr>
    <tr>
      <td>dateRange</td>
      <td>{   
        start?: string | number | Date | Dayjs;   
        end?: string | number | Date | Dayjs;     
  }</td>
      <td>
        ?可选参数，限制可选择的日期范围，如果不传默认从1970-01-01 到今天
      </td>
    </tr>
    <tr>
      <td>renderCell</td>
      <td>
          (params: {
            itemDate: Dayjs;
            date: Dayjs;
            handleClick: () => void;
            defaultEl: ReactElement;
          }) => JSX.Element
        </td>
      <td>?可选参数, 用来渲染每个cell时的回调方法，用来自定义渲染效果，方法接受一个对象作为参数，itemDate是单元格代表的当时间，date代表日历组件的当前月份，handleClick组件内部处理click事件回调，因为这个click事件会用绑定的当前日期对象调用用户传入的onClick，所以在自定义渲染时会有用。defaultEl是默认渲染的elements，有可能你只想处理个别日期的渲染，其他的不用处理，就可以默认返回这个对象，等于执行的是默认的渲染逻辑</td>
    </tr>
    <tr>
      <td>renderHead</td>
      <td>(currentDate) => JSX.Element</td>
      <td>?可选参数, 用来自定义渲染头部日期的格式</td>
    </tr>
    <tr>
      <td>renderFoot</td>
      <td>(currentDate) => JSX.Element</td>
      <td>?可选参数, 用来自定义渲染日历底部的内容，可以渲染一些状态提示</td>
    </tr>
    <tr>
      <td>showCurrent</td>
      <td>boolean</td>
      <td>?可选参数, 用来控制是否显示今天/月/年</td>
    </tr>
    <tr>
      <td>currentText</td>
      <td>string</td>
      <td>?可选参数, 用来控制显示今天/月/年的字符串</td>
    </tr>
    <tr>
      <td>weekText</td>
      <td>string[]</td>
      <td>?可选参数, 用来控制显示星期几的字符串配置</td>
    </tr>
    <tr>
      <td>size</td>
      <td>number</td>
      <td>?可选参数, 默认是260，控制日历尺寸的</td>
    </tr>
  </tbody>
</table>


## 周日历(Week)
周日历组件略有不同，在功能上，他需要一个额外的index代表当前的第几周，所以对于周日历的逻辑处理略有不同，

* 周日历多一个renderCells的回调，用于完全自定义周日历项的渲染，此方法返回一个JSX.Element的数组，作为周日历的内容，数组项不用加key，组件会自动处理。renderCells接受一个参数是日历的当前日期，也是一个dayjs对象
* renderCell方法的参数里多一个index字段，用于显示当前第几周，从0开始
* onSelect 方法除了第一个date参数外，还包含第二个index参数，用来判断当前点击的是第几周。正常点击日历范围内的给出正常的index，但是周日历下点击本月，测第二个参数是-1, 用来适配不同的周规则