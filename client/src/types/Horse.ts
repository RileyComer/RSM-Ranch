interface Horse {
    _id: number;

    name: string;
    breed: string;
    height: number;
    description: string;
    gender: string;
    registration?: number;
    dob: string;

    price: number;
    photos?: string[];
  }
  
  export default Horse;