export type FormField = {
    Label: string;
    Type: string;
    Validation?: {
      required?: boolean;
      pattern?: string;
    };
    Options?: string[];
  };
  
  export type CompanyConfig = {
    FormFields: FormField[];
  };
  
  export type FormConfig = {
    [company: string]: CompanyConfig;
  };
  