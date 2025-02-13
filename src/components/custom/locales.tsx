import { useAppStore } from "hooks";
import { ReactNode, useEffect, useState } from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";
import { I18n } from "types/config.model";

const loadLocaleData = (locale: I18n) => {
  switch (locale) {
    case "fr":
      return import("utils/locales/fr.json");
    case "ro":
      return import("utils/locales/ro.json");
    case "zh":
      return import("utils/locales/zh.json");
    case "en":
      return import("utils/locales/en.json");
    default:
      return import("utils/locales/en.json");
  }
};
interface Props {
  children: ReactNode;
}
export const Locales: React.FC<Props> = ({ children }) => {
  const [messages, setMessages] = useState<
    Record<string, string> | Record<string, MessageFormatElement[]> | undefined
  >();
  const {
    appStateValue: { i18n },
  } = useAppStore();
  useEffect(() => {
    loadLocaleData(i18n).then(
      (d: {
        default:
          | Record<string, string>
          | Record<string, MessageFormatElement[]>
          | undefined;
      }) => {
        setMessages(d.default);
      }
    );
  }, [i18n]);
  return (
    <>
      {messages && (
        <IntlProvider locale={i18n} defaultLocale="en" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

export default Locales;
