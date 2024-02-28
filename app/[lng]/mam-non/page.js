"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/client";
import { Header } from "../components/Header";

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, "second-client-page");
  return (
    <>
      <div>a</div>
    </>
  );
}
