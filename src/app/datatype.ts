export interface Element {
  User_Detail: {
    Name: string;
    id: number;
  };
  Location: string;
  Battery_Details: {
    Vehicle_Type: string;
    Battery_Percent: number;
    Battery_id: string;
  };
  Rating: number;
  id: number;
}