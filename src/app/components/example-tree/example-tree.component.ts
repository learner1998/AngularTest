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
interface Countries {
  name: string;
  children?: Countries[];
}

const TREE_DATA: Countries[] = [
  {
    name: 'Country',
    children: [
      {
        name: 'city',
        children: [{ name: 'city1' }, { name: 'City2' }],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'example-tree',
  templateUrl: 'example-tree.component.html',
  styleUrls: ['example-tree.component.css'],
})
export class ExampleTreeComponent implements OnInit {
  constructor(private countryState: CountryStateService) {
    this.dataSource.data = TREE_DATA;
  }
  ngOnInit(): void {
    this.countryState.getCountry().subscribe((res: any) => {
      this.countries = res.data;
    });
  }
  countries: any;
  cities: any;
  private transformer = (node: Countries, level: number) => {
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
