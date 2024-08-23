
**Threelancers**

---

# Threelancers

Threelancers is a pioneering platform that empowers freelancers and clients by bringing contract management on-chain. Built on the Internet Computer (ICP) blockchain, Threelancers offers secure, transparent, and immutable solutions for freelance contract management, payment processing, and project documentation. 

## Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Why Blockchain?](#why-blockchain)
- [Why ICP?](#why-icp)
- [Pricing Tiers](#pricing-tiers)
- [Product Roadmap](#product-roadmap)
- [Beliefs and Impact](#beliefs-and-impact)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Freelancing should be empowering, not burdened with hidden costs and uncertainty. Traditional platforms often take significant cuts from your earnings, leaving freelancers with less for their hard work. Moreover, without a secure and transparent way to manage agreements, freelancers and clients face unnecessary risks and potential disputes. Threelancers addresses these challenges by leveraging blockchain technology to create a transparent, secure, and cost-effective platform for freelance contract management.

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
We believe that Threelancers can significantly lower costs, greatly enhance value, and drastically reduce risks for freelancers and clients. Our platform aims to reduce costs by eliminating high platform fees, add value by enhancing the freelancing experience with secure and transparent features, and reduce risks by minimizing disputes and ensuring fair payment practices.

## Getting Started
To get started with Threelancers, sign up on our platform and choose the pricing tier that best suits your needs. Begin creating, signing, and managing your freelance contracts securely on-chain.

## Contributing
We welcome contributions from the community to help us improve and expand Threelancers. Please refer to our [Contributing Guidelines](CONTRIBUTING.md) for more information on how you can get involved.

## License
Threelancers is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This `README.md` covers all the key aspects of Threelancers, providing a clear and detailed overview for potential users, contributors, and stakeholders.
- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd icphack/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
