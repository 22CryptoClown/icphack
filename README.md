
**Threelancer**

---

# Threelancer

Threelancer is a pioneering platform that empowers freelancers and clients by bringing contract management on-chain. Built on the Internet Computer (ICP) blockchain, Threelancer offers secure, transparent, and immutable solutions for freelance contract management, payment processing, and project documentation. 

## Track We are Applying For
Fully on-chain DApps

## Team Participants
    1. @AretaBW | Discord: arethalous_
    2. @FarrelNajib | Discord: arelta
    3. @sammyjason39 | Discord: sammy_jason
    4. @hubertushans88 | Discord: hubertus.hans
    5. @julianaliwardana | Discord: maverick.30

## Mainnet canister link: 
`https://oc4ax-2iaaa-aaaag-all3q-cai.icp0.io/`

## Oisy wallet principal: 
`aknl3-z4fvz-htz2t-il2qz-u5oe2-ck7bv-b54zs-wywnp-oxpoz-77rki-nae`

## Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Why Blockchain?](#why-blockchain)
- [Why ICP?](#why-icp)
- [Pricing Tiers](#pricing-tiers)
- [Product Roadmap](#product-roadmap)
- [Beliefs and Impact](#beliefs-and-impact)
- [Getting Started](#getting-started)
- [Run the App Locally](#run-the-app-locally)
- [What We Have Learned](#what-we-have-learned)
- [Challenges](#challenges)
- [What We Proud of](#what-we-proud-of)

## Introduction
Freelancing should be empowering, not burdened with hidden costs and uncertainty. Traditional platforms often take significant cuts from your earnings, leaving freelancers with less for their hard work. Moreover, without a secure and transparent way to manage agreements, freelancers and clients face unnecessary risks and potential disputes. Threelancer addresses these challenges by leveraging blockchain technology to create a transparent, secure, and cost-effective platform for freelance contract management.

## Key Features
- **Contract Signing on Chain**: Users can upload and sign contracts securely using Internet Identity, ensuring legitimacy and transparency.
- **Safe Payment**: Clients pay upfront, with funds securely held and released only when both parties are satisfied.
- **Project Document on Chain**: All project-related documents are stored on-chain, providing transparency and immutability.

## Why Blockchain?
Blockchain technology enables us to build a platform where every agreement, payment, and document is secure, transparent, and immutable. This is essential for reducing the risks associated with freelance work and ensuring fair and transparent interactions between freelancers and clients.

## Why ICP?
The Internet Computer (ICP) is a fast, scalable, and cost-effective blockchain network that allows for complete on-chain storage. With storage costs as low as $5/GB per year, ICP provides the perfect environment for managing freelance contracts and documents securely and efficiently.

## Pricing Tiers
### Essential Tier (Pay as You Use)
- Basic contract management with a single document upload.
- Fixed price per project.

### Pro Tier (Subscription-Based)
- Multiple payment terms and document uploads.
- Subscription-based pricing for power users.

## Product Roadmap
### Stage 1: MVP Development (Hackathon Phase)
- Build the Minimum Viable Product (MVP) with essential features like contract creation, signing, and manual payment processing.
- Fixed pricing for all projects.

### Stage 2: Feature Finalization and Expansion
- Implement cross-chain payment methods, introduce subscription options, and allow for multiple payment terms.
- Finalize all project features.

### Stage 3: Global Scaling and Enterprise Solutions
- Expand globally, offering customized on-chain contract management solutions for enterprises.
- Scale the platform to support a broader range of users.

## Beliefs and Impact
We believe that Threelancer can significantly lower costs, greatly enhance value, and drastically reduce risks for freelancers and clients. Our platform aims to reduce costs by eliminating high platform fees, add value by enhancing the freelancing experience with secure and transparent features, and reduce risks by minimizing disputes and ensuring fair payment practices.

## Getting Started
To get started with Threelancer, sign up on our platform and choose the pricing tier that best suits your needs. Begin creating, signing, and managing your freelance contracts securely on-chain.

## Run the App Locally
### Requirements
- Node v20.10.0
- dfx v0.22.0
- mops CLI 0.45.3
- mops API 1.3

### How to Run Project
- Install [Node v20.10.0](https://www.npackd.org/p/org.nodejs.NodeJS/20.10)
- Install [dfx](https://internetcomputer.org/docs/current/developer-docs/getting-started/install/)

  ```bash
  sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
  ```
- Install [mops](https://docs.mops.one/quick-start) from on-chain storage
  
  ```bash
  curl -fsSL cli.mops.one/install.sh | sh
  ```
  
  or from npm registry

  ```bash
  npm i -g ic-mops
  ```

- Pull from this repository
  ```bash
  git clone git@github.com:22CryptoClown/icphack.git
  ```
- Run the project
  ```bash
  # Move to the project folder
  cd icphack/

  # Install node dependencies
  npm install

  # Starts the replica, running in the background
  dfx start --background

  # Deploys your canisters to the replica and generates your candid interface
  dfx deploy
  ```

## What We Have Learned
1. Building a completely on chain application
2. Blockchain and it's authentication
3. On-chain storage and how to utilize it
4. Be creative to achieve our goal with the limitation of the system

## Challenges
1. Using a whole new environment for us which have no prior web 3 development experience
2. Configuring the blockchain it self
3. Time constraints

## What We Proud of
Complete the challenge on time