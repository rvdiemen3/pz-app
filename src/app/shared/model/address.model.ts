// IAddress
export interface IAddress {
  street: string;
  city: string;
  municipality: string;
  province: string;
  postcode: string;
  pnum: string;
  pchar: string;
  rdx_x: string;
  rdx_y: string;
  lat: string;
  lon: string;
}

// export class Address implements IAddress
export class Address {
  constructor(public street: string,
    public city: string,
    public municipality: string,
    public province: string,
    public postcode: string,
    public pnum: string,
    public pchar: string,
    public rd_x: string,
    public rd_y: string,
    public lat: string,
    public lon: string  ) {
  }
}
