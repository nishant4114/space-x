import { Component, OnInit } from '@angular/core';
import { BooleanLiteral } from 'typescript';
import {ProgramsService} from '../programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  yearFilter: any;
  allPrograms: any;
  selectedYear: string;
  successfullLaunch: boolean;
  successfullLand: boolean;

  constructor(private programService: ProgramsService) { }

  ngOnInit(): void {

    this.yearFilter = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

    this.programService.getAllPrograms().subscribe((data: any) => {
      this.allPrograms = data;
      console.log('all programs', data);
    });
  }

  yearFilterClick(year) {
    this.selectedYear = year;
    console.log('year filter');
    this.programService.getAllProgramsWithFilter(this.successfullLaunch, this.successfullLand, year).subscribe((data: any) => {
      this.allPrograms = data;
      console.log('all programs with year and success filter', data);
    });
  }

  launchSuccessFilterClick(value) {
    this.successfullLaunch = value;
    console.log('year filter');
    this.programService.getAllProgramsWithFilter(this.successfullLaunch, this.successfullLand, this.selectedYear).subscribe((data: any) => {
      this.allPrograms = data;
      console.log('all programs with year and success filter', data);
    });
  }

  landSuccessFilterClick(value) {
    this.successfullLand = value;
    console.log('year filter');
    this.programService.getAllProgramsWithFilter(this.successfullLaunch, this.successfullLand, this.selectedYear).subscribe((data: any) => {
      this.allPrograms = data;
      console.log('all programs with year and success filter', data);
    });
  }



}
