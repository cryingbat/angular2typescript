import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ManagerService {
  tabs: object[] = [
    {
      title: 123,
      id: 1
    },
    {
      title: 456,
      id: 2
    }
  ];
}
