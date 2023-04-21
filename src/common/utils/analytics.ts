export function processAnalyticData(data: any[]): unknown {

  const seriesData = data.map(item =>  {
    return {name: item.data.name, y: item.data.subscribers_count}
  })

  return {
    chart: {
      type: 'column'
    },
    title: {
      align: 'Left',
      text: 'Comparison'
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'repository'
      }
    },
    yAxis: {
      title: {
        text: 'Total amount of Subscribers'
      },
    },
    series: [
      {
        name: 'Repositories',
        colorByPoint: true,
        data: [...seriesData]
      }
    ]
  }
}
