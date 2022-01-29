import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Subject } from 'rxjs';
import {Car} from '../model/Car';
const abi = require('/build/contracts/Deal.json');
const contract = require('truffle-contract');

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private web3js: any;
  private provider: any;
  private accounts: any;
  web3Modal
  private contract = contract(abi);
  private contractDeployed: any;
  private connectedAccount: any;

  private accountStatusSource = new Subject<any>();
  accountStatus = this.accountStatusSource.asObservable();

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
      }
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  async connectAccount() {
    this.web3Modal.clearCachedProvider();

    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    // this.accounts = await this.web3js.eth.getAccounts();
    // this.accountStatusSource.next(this.accounts)

    this.contract.setProvider(this.provider);
    this.contractDeployed = await this.contract.deployed();
    // localStorage.setItem('accountAddress', this.accounts);

    let accounts = await this.web3js.eth.getAccounts();
    this.web3js.eth.connectedAccount = accounts[0]
    this.connectedAccount = accounts[0]
  }

  isConnected(): boolean {
    if(this.web3js == null || this.web3js.eth == null) {
      console.log("web3js/eth null")
      return false;
    }

    if(this.connectedAccount != null) {
      return true;
    }

    this.web3js.eth.getAccounts((error: Error, accounts: string[]) => {
      if (error != null) {
        console.error("An error occurred: " + error);
        return false;
      }
      else if (accounts.length == 0) {
        console.log("User is not logged in to MetaMask");
        return false;
      }
      else {
        console.log("User is logged in to MetaMask");
        return true;
      }
    });

    return false;
  }

  async getSubscribe(): Promise<number> {
    const contractSubscription = await this.contractDeployed.subscribe();
    return contractSubscription.toNumber();
  }

  async storeCar(carName: string, price: number): Promise<any> {
    const result = await this.contractDeployed.storeCar(carName, price, {from:this.connectedAccount});
    return result.toString();
  }

  async getCar(index: number): Promise<any> {
    const result = await this.contractDeployed.getCar(index);
    return result.toString();
  }

  async getCarNumber(): Promise<number> {
    const result = await this.contractDeployed.getNumberOfCars();
    return result.toNumber();
  }

  async getCars(): Promise<Car[]> {
   return await this.contractDeployed.getCars();
  }

  async buyCar(index: number): Promise<Car> {
    return await this.contractDeployed.buyCar(index, {from:this.connectedAccount});
  }
}
