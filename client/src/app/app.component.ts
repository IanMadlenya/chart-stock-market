import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

import { Subscription } from 'rxjs/Subscription';
import { $WebSocket } from 'angular2-websocket/angular2-websocket'
import { ApiService } from './api.service';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  stockForm: FormGroup;
  subscription: Subscription;
  stocks: any[];
  ws: any;
  error: string = '';
  timeoutID: any;
  loading: boolean = false;

  options: any = {
    chart: {
      type: 'spline'
    },
    colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
   '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'Stock Market Chart'
    },
    series: []
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.stockForm = new FormGroup({'symbol': new FormControl('', Validators.required)});
    this.initWs();
    this.subscription = this.apiService.stocksChanged
      .subscribe(
        ((stocks: any[]) => {
          this.stocks = stocks;

          this.options.series = stocks.map(s => ({
            name: s.dataset_code,
            tooltip: {
              valueDecimals: 2
            },
            data: s.data.map(d => [Date.parse(d[0]), d[1]]).reverse()
          }));

          this.loader(false);
        })
      );

    this.apiService.getStocks().catch(this.handleAPIError.bind(this));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.ws.close(true);
    this.onClearError();
  }

  onStockAdd() {
    const { symbol } = this.stockForm.value;
    this.loader(true);
    this.apiService.addStock(symbol).catch(this.handleAPIError.bind(this));
    this.stockForm.reset();
  }

  onStockRemove(symbol: string) {
    this.loader(true);
    this.apiService.removeStock(symbol);
  }

  onClearError() {
    if(this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
    this.error = '';
  }

  private loader(loading: boolean) {
    this.loading = loading;
  }

  private initWs() {
    this.ws = new $WebSocket(env.wsUrl);

    this.ws.getDataStream().subscribe(
      (msg: MessageEvent) => {
          const { action, symbol } = JSON.parse(msg.data);
          this.loader(true);
          switch(action) {
            case 'add':
              this.apiService.getStock(symbol)
                .catch(this.handleWSError);
              break;

            case 'remove':
              this.apiService.remove(symbol);
              break;

            default:
            this.loader(false);
              break;
          }
      }
    );
  }

  private handleAPIError(error: string) {
    this.loader(false);
    this.error = error;
    this.timeoutID = setTimeout(() => {
      this.error = '';
    }, 5000);
  }

  private handleWSError(error: string) {
    this.loader(false);
    console.log('WS error: ', error);
  }
}
