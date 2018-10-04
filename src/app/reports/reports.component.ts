import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/index'


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
 dataSource: Object;
 dataSource2: Object;
  constructor(public service:ServiceService) { }

  ngOnInit() {
    this.plot();
  }

  plot(){
    this.service.getReport().subscribe(res=>{
      console.log(res);

      var dara;
      var holder= new Array();
      for(var i=0; i<res.data.length;i++){
          dara = res.data[i]
          holder.push({
            "label":res.data[i]._id,
            "value":res.data[i].count
          })
      }
      console.log(holder)
      this.dataSource = {
             chart: {
                 "caption": "Number of Product in Each Category",
                 "subCaption": "1count = 1000k",
                 "xAxisName": "Category",
                 "yAxisName": "Products (count)",
                 "numberSuffix": "K",
                 "theme": "fusion",
             },
             // Chart Data
             "data":  holder
         };

         this.dataSource2 = {
                chart: {
                  "caption": "Number of Product in Each Category",
                  "plottooltext": "<b>$percentValue</b> of product on category $label",
                  "showlegend": "1",
                  "showpercentvalues": "1",
                  "legendposition": "bottom",
                  "usedataplotcolorforlabels": "1",
                  "theme": "fusion"
                },
                // Chart Data
                "data":  holder
            };
  })

}

}
