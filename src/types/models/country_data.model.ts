export interface CountryData {
  "Country Name": string;
  ISO2: string;
  ISO3: string;
  "Top Level Domain": string;
  FIPS: string;
  "ISO Numeric": string | number;
  GeoNameID: number | string;
  E164: number;
  "Phone Code": string | number;
  Continent: string;
  Capital: string;
  "Time Zone in Capital": string;
  Currency: string;
  "Language Codes": string;
  Languages: string;
  "Area KM2": number;
  "Internet Hosts": number | string;
  "Internet Users"?: string | number;
  "Phones (Mobile)"?: string | number;
  "Phones (Landline)"?: string | number;
  GDP: number | string;
}
