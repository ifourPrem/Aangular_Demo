import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


const CONFIG_DEFAULT = {
  isInsideGrid: true,
  isTooltipShown: false,
  isLabelShown: true,
  aLotOfValues: true
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }
  name = 'Angular';

  private myChart: any = null;
  ngOnInit(): void {
    this.InitPipe();

  }
  private InitPipe(): void {
    this.myChart = echarts.init((document.getElementById('pipe')) as any);

   const  option = {
      xAxis: {
       type: 'category',
       show: false,
       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
     },
     yAxis: {
             show: false,
       type: 'value'
     },
     dataset: [
       {
         source: [
           ['Product', 'Sales', 'Price', 'Year'],
           ['Cake', 123, 32, 2011],
           ['Cereal', 231, 14, 2011],
           ['Cake', 235, 5, 2012],
           ['Cereal', 235, 5, 2012],
           ['Cake', 341, 25, 2013],
           ['Cereal', 341, 25, 2013]
         ]
       },
       {
         transform: {
           type: 'filter',
           config: { dimension: 'Year', value: 2011 }
         }
       },
       {
         transform: {
           type: 'filter',
           config: { dimension: 'Year', value: 2013 }
         }
       }
     ],
     series: [
       {
         name: 'Energy remaining',
         type: 'pie',
         radius: [0, '32%'],
         center: ['15%', '30%'],
         datasetIndex: 2,
         data: [
           { value: 30, name: '80%' }
         ]
       },  
       {
         name: 'Energy consumed',
         type: 'pie',
         center: ['15%', '30%'],
         radius: ['42%', '32%'],
         datasetIndex: 2,
         data: [
           { value: 70, name: '20%' }
         ]
       },
       {
         type: 'pie',
         radius: 100,
         datasetIndex: 1,
         center: ['75%', '30%'],
       },
       {
         data: [238, 238, 238, 238, 238, 238],
         type: 'line'
       },
         {
         data: [136, 136, 136, 136, 136, 136],
         type: 'line'
       }
     ],
     // Optional. Only for responsive layout:
   };

    this.myChart.setOption(option);

    /*
    this.myChart.on('legendselectchanged', function(params) {
        console.log("legendselectchanged", params);
        var name = params.name;
        var slectedObject = {[name]:true};
        console.log("slectedObject", slectedObject);
        
        let option = {
            legend: {
                selected : slectedObject
            }
        }
        this.myChart.setOption(option);
    })
    */

  }


  OnElem1Click() {
    console.log("OnElem1Click");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem1Mouseover() {
    console.log("OnElem1Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem1Mouseout() {
    console.log("OnElem1Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem2Mouseover() {
    console.log("OnElem2Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 2
    });
  }

  OnElem2Mouseout() {
    console.log("OnElem2Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 2
    });
  }

}
