
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ['激光器', 'FGN燃烧器', '天气监测', '数控机床']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '激光器',
      type: 'bar',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'FGN燃烧器',
      type: 'bar',
      stack: '广告',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '天气监测',
      type: 'bar',
      stack: '广告',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '数控机床',
      type: 'bar',
      stack: '广告',
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
};

export default option;
