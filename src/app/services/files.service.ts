import { tap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'https://young-sands-07814.herokuapp.com/api/files'

  getFile(name: string, url: string, type: string){
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap(content => {
        const blob = new Blob([content], {type})
        saveAs(blob, name)
      }),
      map(()=> true)
    )
  }

  uploadFile(file: Blob){
    const dto = new FormData()

    dto.append('file', file)

    return this.http.post(`${this.url}/upload`, dto, {
      // headers: {
      //   'Content-type': 'multipart/form-data'
      // }
    })

  }
}
