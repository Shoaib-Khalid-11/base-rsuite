import { useAppStore } from "hooks";
import { ReactNode, useEffect, useState } from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";
import { I18n } from "types/config.model";

const localeMap: Record<
  I18n,
  () => Promise<{
    default: Record<string, string> | Record<string, MessageFormatElement[]>;
  }>
> = {
  fr: () => import("utils/locales/fr.json"),
  ro: () => import("utils/locales/ro.json"),
  zh: () => import("utils/locales/zh.json"),
  en: () => import("utils/locales/en.json"),
};
const loadLocaleData = async (locale: I18n) => {
  try {
    return (await (localeMap[locale] || localeMap.en)()).default;
  } catch (e) {
    console.error(`Failed to load locale ${locale}, falling back to English.`);
    return (await localeMap.en()).default;
  }
};
interface Props {
  children: ReactNode;
}
export const Locales: React.FC<Props> = ({ children }) => {
  const [messages, setMessages] = useState<
    Record<string, string> | Record<string, MessageFormatElement[]>
  >({});
  const {
    appStateValue: { i18n },
  } = useAppStore();
  console.log(i18n);
  useEffect(() => {
    loadLocaleData(i18n).then(setMessages);
  }, [i18n]);
  if (!messages) {
    return <p>Loading translations...</p>; // Add a proper loader if needed
  }
  return (
    <>
      <IntlProvider locale={"zh"} defaultLocale="en" messages={messages}>
        {children}
      </IntlProvider>
    </>
  );
};

export default Locales;
