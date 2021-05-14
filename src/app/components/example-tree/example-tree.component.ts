import { CountryStateService } from './../../Services/country-state.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

interface Country {
  name: string;
  children: [
    {
      name: string;
    }
  ];
  cities: string[];
}
@Component({
  selector: 'example-tree',
  templateUrl: 'example-tree.component.html',
  styleUrls: ['example-tree.component.css'],
})
export class ExampleTreeComponent implements OnInit {
  TREE_DATA = [
    {
      name: 'Countries',
      children: [
        {
          name: 'someCountry',
          children: [{ name: 'city1' }, { name: 'City2' }],
        },
      ],
    },
  ];
  constructor(private countryState: CountryStateService) {
    this.dataSource.data = this.TREE_DATA;
  }
  countries: Country;
  cities: any;

  ngOnInit(): void {
    this.countryState.getCountry().subscribe((res: any) => {
      this.countries = res.data;
      // this.countries.map(country=>{
      //   console.log(country)
      // });
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

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
