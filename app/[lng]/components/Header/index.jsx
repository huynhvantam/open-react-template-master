import { useTranslation } from "../../../i18n";
import { HeaderBase } from "./HeaderBase";

export const Header = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, "header");
  return <HeaderBase t={t} lng={lng} path={path} />;
};
