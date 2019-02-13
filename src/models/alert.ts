export class Alert {
  title: string;
  message: string;
  type: AlertType;
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
