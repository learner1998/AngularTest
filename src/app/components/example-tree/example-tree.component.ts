import { CountryStateService } from './../../Services/country-state.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'example-tree',
  templateUrl: 'example-tree.component.html',
  styleUrls: ['example-tree.component.css'],
})
export class ExampleTreeComponent implements OnInit {
  constructor(private countryState: CountryStateService) {}
  countries: any;
  newCountries: any;
  TREE_DATA = [
    {
      name: 'country',
      children: [],
    },
  ];
  ngOnInit(): void {
    this.countryState.getCountry().subscribe((res: any) => {
      this.countries = res.data;
      console.log(this.countries);

      this.newCountries = this.countries.map((item) => ({
        name: item.country,
        children: item.cities.map((item) => ({
          name: item,
        })),
      }));
      this.TREE_DATA = this.newCountries;
      this.dataSource.data = this.TREE_DATA;
    });
  }

  private transformer = (node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
