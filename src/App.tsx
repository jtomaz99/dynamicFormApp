import React, { useEffect, useState } from 'react';
import DynamicForm from './components/DynamicForm';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { FormConfigService } from './services/FormConfigService';
import { FormField } from './types/formTypes';
import './App.css'

const App: React.FC = () => {
  const [companies, setCompanies] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [formConfig, setFormConfig] = useState<FormField[] | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      const config = await FormConfigService.loadConfig();
      setCompanies(Object.keys(config));
    };
    loadConfig();
  }, []);

  const handleSelectCompany = async (company: string) => {
    if (company !== selectedCompany) {
      const config = await FormConfigService.getCompanyForm(company);
      setSelectedCompany(company);
      setFormConfig(config);
    }
  };

  return (
    <Box className="container">
      <FormControl fullWidth>
        <InputLabel>Selecione uma Companhia</InputLabel>
        <Select
          value={selectedCompany || ''}
          onChange={(e) => handleSelectCompany(e.target.value)}
        >
          {companies.map((company) => (
            <MenuItem key={company} value={company}>
              {company}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {formConfig && (
        <Box mt={4}>
          <DynamicForm formConfig={formConfig} />
        </Box>
      )}
    </Box>
  );
};

export default App;
