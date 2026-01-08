import { IntlProvider } from "next-intl";
import React from "react";
import oz from "../translate/oz.json";
import uz from "../translate/uz.json";
import { useRouter } from "next/router";

interface IntlWrapperProviderProps {
  children: React.ReactNode;
}

const translations = {
  oz,
  uz,
};

const IntlWrapperProvider = ({ children }: IntlWrapperProviderProps) => {
  const { locale = "uz" } = useRouter(); 
  const messages = translations[locale as keyof typeof translations] || translations.oz;

  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
};

export default IntlWrapperProvider;
