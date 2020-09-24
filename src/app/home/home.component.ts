import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from './quote.service';
import { APIService } from '../services/API.service';
import { InputVideo } from '../types/inputvideo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})



export class HomeComponent implements OnInit {


  quote: string | undefined;
  showCelebDetectionFlag = false;
  inputVideos: Array<InputVideo>;
  urlToPlay: string | undefined;
  celebritiesObj: any;
  displayedColumnsFRTable: string[] = ['timestamp', 'name', 'confidence'];
  displayedColumnsVideoTable: string[] = ['id', 'name', 'description', 'url'];
  datasource: TableElement[] = [];

  constructor(private api: APIService) {}

  async ngOnInit() {
    this.api.ListInputVideos().then(event => {
      this.inputVideos = event.items;
      console.log(event.items);
      this.urlToPlay = event.items[0].url;
    });
  }


public showCelebDetection(){
  this.showCelebDetectionFlag = true;
  console.log(this.inputVideos[0].celebritydetection);
  this.celebritiesObj = JSON.parse(this.inputVideos[0].celebritydetection).Celebrities;
  console.log("obj \n",this.celebritiesObj);

  this.datasource = this.celebritiesObj.map((val:any) => {
    let country = Object.keys(val)[0]; // Get the name of the country, e.g. USA
    return { // Return the new object structure
      timestamp: val.Timestamp,
      name: val.Celebrity.Name,
      confidence: val.Celebrity.Confidence
    }
    
  });

  console.log("RES ",this.datasource);

}


}

export interface TableElement {
  timestamp: string;
  name: number;
  confidence: number;
}