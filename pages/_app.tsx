import Loading from "@/components/loading";
import { useLoadingStore } from "@/store/useLoadingStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoadingStore((s) => s.isLoading);
  return (
    <>
      {isLoading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}
