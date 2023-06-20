import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cars = [
    {name: "Audi e-tron GT",
    power: 190,
    seats: 5,
    fuelType: "electric",
    price: 200,
    image: "https://dktnskkn609es.cloudfront.net/4B99F8A24F68A5CAE3380D8D33B86E65/images/e6b30a91-4245-4f58-a4bf-b17a5b777245/webp/768"
    },
    {
      name: "VW ID Buzz",
      power: 204,
      seats: 5,
      fuelType: "electric",
      price: 230,
      image: "https://dktnskkn609es.cloudfront.net/29C53A8038D57DFBAADD7B2116C56FD3/images/a1a31a78-68df-44e7-b722-dae8c11957e3/webp/768"
    },
    {
      name: "ŠKODA ENYAQ Coupé iV RS",
      power: 299,
      seats: 5,
      price: 180,
      fuelType: "electric",
      image: "https://dktnskkn609es.cloudfront.net/C12AAED7BC46CC3A24EA4B98BCB702F3/images/e535bc92-41d8-4c46-a7a3-d285c5127bdb/webp/768"
    },
    {
      name: "CUPRA Born",
      power: 204,
      seats: 5,
      price: 150,
      fuelType: "electric",
      image: "https://dktnskkn609es.cloudfront.net/0BFD81E225C0B7C1CC4CE345599E3681/images/2d5bba23-fd5c-46e1-91df-5eedeaa27bcb/webp/768"
    },
    {
      name: "Audi Q8 Sportback 55 e-tron quattro S Line",
      power: 215,
      seats: 5,
      price: 250,
      fuelType: "electric",
      image: "https://dktnskkn609es.cloudfront.net/076E07EB145136581DAD01769970D2EF/images/b4a94b43-99ca-4479-9bca-1e903cbb36c2/webp/768"
    },
    {
      name: "VW ID.3 Pro S",
      power: 204,
      seats: 4,
      fuelType: "electric",
      price: 170,
      image: "https://dktnskkn609es.cloudfront.net/6E6FB5738F7BC598A5D82794DC2A1D36/images/dcc3f58a-4fc2-4611-8545-d01dffa5c383/webp/768"
    },
    {
      name: "VW ID.4 GTX 4MOTION",
      power: 299,
      seats: 5,
      fuelType: "electric",
      price: 205,
      image: "https://dktnskkn609es.cloudfront.net/5A4F042F9B3F9F7912CEB3F09B73EEA1/images/c5cf938d-ad0b-4b16-867e-829bbd9ffc5b/webp/768"
    },
    {
      name: "VW ID.5 GTX 4MOTION",
      power: 299,
      seats: 5,
      fuelType: "electric",
      price: 215,
      image: "https://dktnskkn609es.cloudfront.net/FCFCF5338C137AD5432E63E558F97F3E/images/e3304198-bca3-4d80-b8a1-54fb0266e97d/webp/768"
    }
  ]

  carInfo = new FormGroup({
    name: new FormControl('',Validators.required), 
    power: new FormControl('', Validators.required),
    seats: new FormControl('', Validators.required), 
    fuelType: new FormControl('',Validators.required),
    price: new FormControl('', Validators.required),  
    image: new FormControl('',Validators.required), 
  });



onSubmit() {
  if (this.carInfo.valid) {
    const newCar : {
      name: string;
  power: number;
  seats: number;
  fuelType: string;
  price: number;
  image: string;} = {
      name: this.carInfo.get('name')?.value as string,
      power: parseInt(this.carInfo.get('power')?.value as string),
      seats: parseInt(this.carInfo.get('seats')?.value as string),
      fuelType: this.carInfo.get('fuelType')?.value as string,
      price: parseInt(this.carInfo.get('price')?.value as string),
      image: this.carInfo.get('image')?.value as string
    }
    
    
    this.cars.push(newCar)
    console.log(this.carInfo.value);
    this.carInfo.reset();
  }
}


}
