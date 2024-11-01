// src/services/FormConfigService.ts

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
  
  export class FormConfigService {
    static async loadConfig(): Promise<{ [key: string]: CompanyConfig }> {
      const response = await fetch('/formConfig.json');
      const data = await response.json();
      return data;
    }
  
    static async getCompanyForm(company: string): Promise<FormField[]> {
      const config = await FormConfigService.loadConfig();
      const fields = config[company]?.FormFields || [];
      console.log('fields for company:', company, fields); // Adicione esta linha para verificação
      return fields;
    }
  }
  