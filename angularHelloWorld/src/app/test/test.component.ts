import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Welcome {{name}}</h2>
    <div>
    inline template
  </div>`,
  styles: [`
div{
  color:red;
}
  `]
})
export class TestComponent implements OnInit {
public name ="Lilian"
  constructor() { }

  ngOnInit(): void {
  }

}
