import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";
import styles from "./page.module.scss";

const serverConfig = getServerSideConfig();

export default async function App() {
  const icpNumber = process.env.NEXT_PUBLIC_ICP_NUMBER;
  const icpLink =
    process.env.NEXT_PUBLIC_ICP_LINK ?? "https://beian.miit.gov.cn/";

  return (
    <div className={styles.page}>
      <Home />

      <footer className={styles.footer}>
        <a href={icpLink} target="_blank" rel="noreferrer">
          {icpNumber
            ? `ICP备案号：${icpNumber}`
            : "ICP备案号：请配置 NEXT_PUBLIC_ICP_NUMBER"}
        </a>
      </footer>

      {serverConfig?.isVercel && <Analytics />}
    </div>
  );
}
