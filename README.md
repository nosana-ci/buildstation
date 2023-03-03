<p align="center">
  <a href="https://solana.com">
    <img alt="Solana" src="https://i.imgur.com/uBVzyX3.png" width="250" />
  </a>
</p>

# Hello world on Solana

This project demonstrates how to use the [Solana Javascript
API](https://github.com/solana-labs/solana-web3.js) to
interact with programs on the Solana blockchain.

The project comprises:

* An on-chain hello world program
* A client that can send a "hello" to an account and get back the number of
  times "hello" has been sent

## Quick Start

The following dependencies are required to build and run this example, depending
on your OS, they may already be installed:

* Install node (v14 recommended)
* Install npm
* Install Rust v1.56.1 or later from <https://rustup.rs/>
* Install Solana v1.10.35 or later from
  <https://docs.solana.com/cli/install-solana-cli-tools>

If this is your first time using Rust, these [Installation
Notes](README-installation-notes.md) might be helpful.

### Configure CLI

> If you're on Windows, it is recommended to use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run these commands

1. Set CLI config url to localhost cluster

```bash
solana config set --url http://127.0.0.1:8899
```

2. Create CLI Keypair

If this is your first time using the Solana CLI, you will need to generate a new keypair:

```bash
solana-keygen new
```

### Install npm dependencies

```bash
npm install
```

### Build the on-chain program

There is both a Rust and C version of the on-chain program, whichever is built
last will be the one used when running the example.

```bash
npm run build:program-rust
```

```bash
npm run build:program-c
```

### Deploy the on-chain program

```bash
solana program deploy dist/program/helloworld.so
```

### Run the JavaScript client

```bash
npm run start
```

### Customizing the Program

To customize the example, make changes to the files under `/src`.  If you change
any files under `/src/program-rust` or `/src/program-c` you will need to
[rebuild the on-chain program](#build-the-on-chain-program) and [redeploy the program](#deploy-the-on-chain-program).

Now when you rerun `npm run start`, you should see the results of your changes.
