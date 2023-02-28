import '@/styles/globals.css'
import '../styles/globals.css'
import DataContext from "../../context/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <DataContext>
      <Component {...pageProps} />
    </DataContext>
  );
}
