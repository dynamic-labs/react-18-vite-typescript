import "./App.css";

import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { AlgorandWalletConnectors } from "@dynamic-labs/algorand";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { FlowWalletConnectors } from "@dynamic-labs/flow";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { CosmosWalletConnectors } from "@dynamic-labs/cosmos";
import { MagicWalletConnectors } from "@dynamic-labs/magic";
import { BloctoEvmWalletConnectors } from "@dynamic-labs/blocto-evm";

function App() {
  return (
    <>
      <div>
        <DynamicContextProvider
          settings={{
            environmentId: "f0b977d0-b712-49f1-af89-2a24c47674da",
            walletConnectors: [
              EthereumWalletConnectors,
              AlgorandWalletConnectors,
              SolanaWalletConnectors,
              FlowWalletConnectors,
              StarknetWalletConnectors,
              CosmosWalletConnectors,
              MagicWalletConnectors,
              BloctoEvmWalletConnectors,
            ],
          }}
        >
          <DynamicWidget />
        </DynamicContextProvider>
      </div>
    </>
  );
}

export default App;
