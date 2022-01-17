declare global {
    namespace NodeJS {
      interface ProcessEnv {
        COMPANY_APIKEY: string;
        COMPANY_ID: string;
        COMPANY_WORLD: string;
      }
    }
  }
  
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}