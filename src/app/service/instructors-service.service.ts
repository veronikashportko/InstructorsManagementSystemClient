import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InstructorModel } from '../model/intructor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorsService {

  private baseUrl = 'http://localhost:65312/api';

  constructor(private http: HttpClient) {
  }

  public getInstructorById(id: number): Observable<InstructorModel> {
    return this.http.get<InstructorModel>(`${this.baseUrl}/Instructors/${id}`);
  }

  public getAllInstructors(): Observable<InstructorModel[]> {
    return this.http.get<InstructorModel[]>(`${this.baseUrl}/Instructors`);
  }

  public addInstructor(instructor: InstructorModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/Instructors`, instructor);
  }

  public updateInstructor(id: number, newInstructor: InstructorModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/Instructors/${id}`, newInstructor);
  }

  public deleteInstructor(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/Instructors/${id}`);
  }
}
