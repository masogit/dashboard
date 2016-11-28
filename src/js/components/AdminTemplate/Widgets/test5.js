const option = {
  title: {
    text: '设备类别统计',
    subtext: '上海灵硕科技',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['激光器', 'FGN燃烧器', '天气监测', '数控机床']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '激光器' },
        { value: 310, name: 'FGN燃烧器' },
        { value: 234, name: '天气监测' },
        { value: 135, name: '数控机床' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
export default option;
