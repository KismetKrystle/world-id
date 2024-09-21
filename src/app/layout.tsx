import '@/styles/globals.css'
import { ReactNode } from 'react'
import { IDKitProvider } from '@worldcoin/idkit'
import * as fcl from '@onflow/fcl'
import { FlowProvider } from './FlowContext'

// Configure Flow Client Library
fcl.config({
  'app.detail.title': 'My World ID + Flow Dapp',
  'app.detail.icon': 'https://placekitten.com/g/200/200',
  'accessNode.api': 'https://rest-testnet.onflow.org', // Testnet
  'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <IDKitProvider app_id="app_staging_ea30ce3149a0ff076f33d20bd2c119b6">
      <FlowProvider>
        <body>{children}</body>
      </FlowProvider>
    </IDKitProvider>
  </html>
)
}