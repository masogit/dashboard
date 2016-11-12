import React, { Component } from 'react';

const brush = {
  outOfBrush: {
    color: '#abc'
  },
  brushStyle: {
    borderWidth: 2,
    color: 'rgba(0,0,0,0.2)',
    borderColor: 'rgba(0,0,0,0.5)',
  },
  seriesIndex: [0, 1],
  throttleType: 'debounce',
  throttleDelay: 300,
  geoIndex: 0
};

function renderBrushed(params, convertedData) {
    var mainSeries = params.batch[0].selected[0];

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
    var maxBar = 30;
    var sum = 0;
    var count = 0;

    for (var i = 0; i < mainSeries.dataIndex.length; i++) {
        var rawIndex = mainSeries.dataIndex[i];
        var dataItem = convertedData[0][rawIndex];
        var pmValue = dataItem.value[2];

        sum += pmValue;
        count++;

        selectedItems.push(dataItem);
    }

    selectedItems.sort(function (a, b) {
        return a.value[2] - b.value[2];
    });

    for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
        categoryData.push(selectedItems[i].name);
        barData.push(selectedItems[i].value[2]);
    }

    this.setOption({
        yAxis: {
            data: categoryData
        },
        xAxis: {
            axisLabel: {show: !!count}
        },
        title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(4) : ''
        },
        series: {
            id: 'bar',
            data: barData
        }
    });
}

export { renderBrushed, brush };
