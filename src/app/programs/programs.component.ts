import { Component, OnInit } from '@angular/core';
import {ProgramsService} from '../programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  yearFilter: any;
  allPrograms: any;

  constructor(private programService: ProgramsService) { }

  ngOnInit(): void {

    this.yearFilter = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

    this.programService.getAllPrograms().subscribe((data: any) => {
      this.allPrograms = data;
      console.log('all programs', data);
    });
  }

  yearFilterClick(year) {
    console.log('year filter');
      this.programService.getAllProgramsWithFilter(true, true, year).subscribe((data: any) => {
        this.allPrograms = data;
        console.log('all programs with year and success filter', data);
      });
  }



}
