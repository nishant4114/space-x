import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private allPrograms = 'https://api.spacexdata.com/v3/launches?limit=100';

  constructor(private httpClient: HttpClient) { }

    public getAllPrograms(): Observable<any> {

      const opts = {
        params: new HttpParams({fromString: 'limit=100'})
      };

      return this.httpClient.get<any>(this.allPrograms, opts );
  }

  public getAllProgramsWithFilter(launchSuccess, landSuccess, year): Observable<any> {
    const opts = { params: new HttpParams({ fromString: 'limit=100' + '&amp;launch_success=' + launchSuccess
                                             + '&amp;land_success=' + landSuccess + '&amp;launch_year=' + year }) };
    return this.httpClient.get<any>(this.allPrograms, opts);
  }

  

}
