# Dynamic Form App

This project is a React application designed to generate dynamic forms based on external JSON configuration. The application allows new forms to be added easily by editing the configuration file without altering the code.

## 🚀 Technologies and Tools

- **Frontend**: React with TypeScript, using Vite
- **UI Framework**: Material UI
- **External Configuration**: JSON in the frontend, simulating an API
- **Key Patterns and Principles**: SOLID, separation of concerns, React Design Patterns

## 📋 Objective

The goal of this project is to create an application capable of generating dynamic forms based on a JSON file. When selecting a company from the dropdown, its customized form is displayed. This format is highly extensible, allowing new forms to be added simply by editing the configuration JSON.

---

## 📂 File Structure

- `public/`
  - `formConfig.json`: JSON file containing the configuration for each form, defining fields and validations for each company.

- `src/`
  - `App.tsx`: Main application component that handles company selection and renders the dynamic form.
  - `components/`
    - `DynamicForm.tsx`: Component responsible for rendering the form based on the configuration passed as props.
  - `services/`
    - `FormConfigService.ts`: Service for loading and handling the form configuration, managing the JSON file reading.
  - `types/`
    - `formTypes.ts`: Defines TypeScript types used for form fields, including validations.

---

## 🛠️ Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed. [Install Node.js](https://nodejs.org/)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jtomaz99/dynamicFormApp.git
   cd dynamicFormApp

2. **Install Dependencies**
   ```bash
   npm install

3. **Run the Application**
   ```bash
   npm run dev