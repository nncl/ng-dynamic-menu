import { Component, OnInit, ViewChild, Input } from "@angular/core";

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {
	@ViewChild("menu", {static: true}) menu: any;
	@Input() items: {name: string, children: string[]}[];

	  constructor() { }

	  ngOnInit(): void {
	  }

}
