import { CompanyConfig, FormField } from "../types/formTypes";

  export class FormConfigService {
    static async loadConfig(): Promise<{ [key: string]: CompanyConfig }> {
      const response = await fetch('/formConfig.json');
      const data = await response.json();
      return data;
    }
  
    static async getCompanyForm(company: string): Promise<FormField[]> {
      const config = await FormConfigService.loadConfig();
      const fields = config[company]?.FormFields || [];
      console.log('fields for company:', company, fields);
      return fields;
    }
  }
  