import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <>
      <main>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Header lng={lng} path="/second-page" />
    </>
  );
}
