// export interface Element {
//   User_Detail:string[];
//   Location: string;
//   Battery_Details: string[];
//   Rating:string;
//   id:number;
// }

export interface Element {
  User_Detail:{Name:string,id:number};

  Location: string;
  Battery_Details: {Vehicle_Type:string, Battery_Percent:number,Battery_id:number};
  Rating:string;
  id:number;
}