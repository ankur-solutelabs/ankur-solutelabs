export interface Delivery {
  customerName: string;
  CustomerAddress: string;
  customerMob: string;
  customerOrder: string;
  customerStatus: string;
}

export interface DeliveryBoy {
  name: string;
  mobileNo: number;
  rating: number;
}



export interface DeliveryResponse {
    customerName: string;
    CustomerAddress: string;
    customerMob: string;
    customerOrder: string;
    customerStatus: string;
    DeliveryBoy: {
      
      name: string;
      mobileNo: number;
      rating: number;

    }
}