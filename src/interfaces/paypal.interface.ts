export interface IPaypalOrderStatusResponse {
  id: string;
  intent: string;
  status: string;
  payment_source: IPaymentSource;
  purchase_units: IPurchaseUnit[];
  payer: IPayer;
  create_time: Date;
  update_time: Date;
  links: ILink[];
}

export interface ILink {
  href: string;
  rel: string;
  method: string;
}

export interface IPayer {
  name: IPayerName;
  email_address: string;
  payer_id: string;
  address: IPayerAddress;
}

export interface IPayerAddress {
  country_code: string;
}

export interface IPayerName {
  given_name: string;
  surname: string;
}

export interface IPaymentSource {
  paypal: IPayPal;
}

export interface IPayPal {
  email_address: string;
  account_id: string;
  account_status: string;
  name: IPayerName;
  address: IPayerAddress;
}

export interface IPurchaseUnit {
  reference_id: string;
  amount: IAmount;
  payee: IPayee;
  shipping: IShipping;
  payments: IPayments;
  invoice_id?: string;
}

export interface IAmount {
  currency_code: string;
  value: string;
}

export interface IPayee {
  email_address: string;
  merchant_id: string;
}

export interface IPayments {
  captures: ICapture[];
}

export interface ICapture {
  id: string;
  status: string;
  amount: IAmount;
  final_capture: boolean;
  seller_protection: ISellerProtection;
  seller_receivable_breakdown: ISellerReceivableBreakdown;
  links: ILink[];
  create_time: Date;
  update_time: Date;
}

export interface ISellerProtection {
  status: string;
  dispute_categories: string[];
}

export interface ISellerReceivableBreakdown {
  gross_amount: IAmount;
  paypal_fee: IAmount;
  net_amount: IAmount;
}

export interface IShipping {
  name: IShippingName;
  address: IShippingAddress;
}

export interface IShippingAddress {
  address_line_1: string;
  admin_area_2: string;
  admin_area_1: string;
  postal_code: string;
  country_code: string;
}

export interface IShippingName {
  full_name: string;
}
