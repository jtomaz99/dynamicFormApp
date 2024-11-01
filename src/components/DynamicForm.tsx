import React, { useState } from 'react';
import { TextField, MenuItem, Box } from '@mui/material';
import { FormField } from '../services/FormConfigService';

interface FormProps {
  formConfig: FormField[];
}

const DynamicForm: React.FC<FormProps> = ({ formConfig }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  const handleChange = (fieldLabel: string, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldLabel]: value,
    }));
  };

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {formConfig.map((field, index) => {
        switch (field.Type) {
          case 'text':
          case 'email':
          case 'number':
            return (
              <TextField
                key={index}
                label={field.Label}
                type={field.Type}
                required={field.Validation?.required || false}
                value={formValues[field.Label] || ''}
                onChange={(e) => handleChange(field.Label, e.target.value)}
              />
            );
          case 'textarea':
            return (
              <TextField
                key={index}
                label={field.Label}
                multiline
                rows={4}
                required={field.Validation?.required || false}
                value={formValues[field.Label] || ''}
                onChange={(e) => handleChange(field.Label, e.target.value)}
              />
            );
          case 'date':
            return (
              <TextField
                key={index}
                label={field.Label}
                type="date"
                InputLabelProps={{ shrink: true }}
                required={field.Validation?.required || false}
                value={formValues[field.Label] || ''}
                onChange={(e) => handleChange(field.Label, e.target.value)}
              />
            );
          case 'multiselect':
            return (
              <TextField
                key={index}
                label={field.Label}
                select
                SelectProps={{ multiple: true }}
                required={field.Validation?.required || false}
                value={formValues[field.Label] || []} // Array vazio como valor padrão
                onChange={(e) => handleChange(field.Label, e.target.value as unknown as string[])}
              >
                {field.Options?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default DynamicForm;
