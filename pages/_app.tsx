import "@/styles/globals.css";
import type { AppProps } from "next/app";

const Hello = () => {
  return <div>Hello</div>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <Hello />
    </Component>
  );
}
