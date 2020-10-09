import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  // https://api.spacexdata.com/v3/launches?limit=100&launch_year=2009

  private allPrograms = 'https://api.spacexdata.com/v3/launches';

  constructor(private httpClient: HttpClient) { }

    public getAllPrograms(): Observable<any> {

      const opts = {
        params: new HttpParams({fromString: 'limit=100'})
      };

      return this.httpClient.get<any>(this.allPrograms, opts );
  }

  public getAllProgramsWithFilter(launchSuccess, landSuccess, year): Observable<any> {
    console.log('launch success', launchSuccess);
    console.log('land success', landSuccess);
    console.log('year', year);
    let paramString = '';
    if (launchSuccess !== undefined) {
      paramString += '&launch_success=' + launchSuccess;
    }
    if (landSuccess !== undefined) {
      paramString += '&land_success=' + landSuccess;
    }
    if (year !== undefined) {
      paramString += '&launch_year=' + year;
    }

    console.log('param string', paramString);

    const opts = { params: new HttpParams({ fromString: 'limit=100' + paramString}) };
    return this.httpClient.get<any>(this.allPrograms, opts);
  }

  

}
