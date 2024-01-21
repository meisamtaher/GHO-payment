import Main from "./pages/Main";
import './App.css'
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import {
  sepolia,
  goerli,
} from 'wagmi/chains';

const chains = [sepolia, goerli];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: import.meta.env.VITE_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "gho-payment",

    // Optional
    appDescription: "hodle Etheruem spend the price",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    chains
  }),
);


function App() {
  return (
    <WagmiConfig config={config}>
    <ConnectKitProvider>
      <Main/>
    </ConnectKitProvider>
  </WagmiConfig>
    
  )
}

export default App
