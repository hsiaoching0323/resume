import { Button, Paper, Stack, Typography } from "@mui/material";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";


function Login() {
  
    // usetstate for storing and retrieving wallet details
    const [data, setdata] = useState({
      address: "",
      Balance: null,
    });
    
    // Button handler button for handling a
    // request event for metamask
    const btnhandler = () => {
    
      // Asking if metamask is already present or not
      if (window.ethereum) {
    
        // res[0] for fetching a first wallet
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((res) => accountChangeHandler(res[0]));
      } else {
        alert("install metamask extension!!");
      }
    };
    
    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {
      // Requesting balance method
      window.ethereum
        .request({ 
          method: "eth_getBalance", 
          params: [address, "latest"] 
        })
        .then((balance) => {
          // Setting balance
          setdata({
            Balance: ethers.utils.formatEther(balance),
          });
        });
    };
    
    // Function for getting handling all events
    const accountChangeHandler = (account) => {
      // Setting an address data
      setdata({
        address: account,
      });
      data.address = account;
      // Setting a balance
      getbalance(account);
      console.log(data.address);
    };
    return (
      <div className="Login">
        {/* Calling all values which we 
         have stored in usestate */}
        <div className="text-center">
            <Button onClick={btnhandler} variant="primary">
              Connect to wallet
            </Button>
        </div>
        <div>
            address:{data.address}
        </div>
      </div>
    );
  }
    
  export default Login;
  