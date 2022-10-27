import Head from "next/head";
import { useState } from "react";
import Web3 from "web3";
import "bulma/css/bulma.css";
import styles from "../styles/VendingMachine.module.css";

const VendingMachine = () => {

    const [error, setError] = useState('')
    let web3

    const connectWalletHandler = async () => {
        // check if etamask is installed
        if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
            try {
                await window.ethereum.request({method: 'eth_requestAccounts'})
                web3 = new Web3(window.ethereum)
            } catch (e) {
                setError(e.message)
            }
        } else {
            // metamask is not installed
            alert("Please! Install MetaMask")
        }
    }
    return (
    <div className={styles.main}>
      <Head>
        <title>Vending Machine App</title>
        <meta name="description" content="A Blockchain app" />
      </Head>
      <nav className="navbar mt-4 mb-4">
        <div className="container">
            <div className="navbar-brand">
                <h1>Vending Machine dApp Blockchain</h1>
            </div>
            <div className="navbar-end">
                <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
            </div>
        </div>
      </nav>
      <section>
        <div className="container">
            <p>Text</p>
        </div>
      </section>
      <section>
        <div className="container has-text-danger">
            <p>{error}</p>
        </div>
      </section>
    </div>
  );
}
export default VendingMachine
