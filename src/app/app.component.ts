import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {
      name: 'One'
    },
    {
      name: 'Two',
      children: [
        {
          name: 'TwoOne',
          children: [
            {
              name: 'TwoOneOne',
              children: [
                {
                  name: 1,
                  children: [
                    {
                      name: '1.1'
                    },
                    {
                      name: '1.2',
                      children: [
                      	{
                      		name: '1.2.1'
                      	}
                      ]
                    }
                  ]
                },
                {
                  name: 2
                }
              ]
            }
          ]
        },
        {
          name: 'TwoTwo',
          children: [
            {
              name: 'TwoTwoOne'
            },
                        {
              name: 'TwoTwoTwo'
            }
          ]
        }
      ]
    },
    {
      name: 'Three'
    }
  ]
}
