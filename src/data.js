// Credits to blocknative for some of the glossary definitions
// We create some of the difinition and modify some definition from blocknative
// https://www.blocknative.com/glossary
const glossary = [
    {
        term: "Web3",
        definition: "It is the current evolution of the internet characterized by decentralization and digital ownership, unlike Web 1.0 and Web 2.0 which were characterized by users being able to read (Web 1.0) and write (Web 2.0) content."
    },
    {
        term: "Ethereum",
        definition: "A decentralized, open-source blockchain network that was launched in 2015 by its founder, Vitalik Buterin. Ethereum is the leading smart contract-enabled blockchain in the world, and it's native token, ETH, is the 2nd largest digital asset by marketcap. Blocknative's APIs support the Ethereum blockchain and the Ethereum Goerli testnet."
    },
    {
        term: "Ethereum Virtual Machine (EVM)",
        definition: "A software application that blockchain developers use to deploy decentralized applications (Dapp) on the Ethereum blockchain. The EVM interacts with Ethereum's accounts, smart contracts, and distributed ledger."
    },
    {
        term: "Base Fee",
        definition: "The base fee is an algorithmically determined fee that users on the Ethereum blockchain must pay to complete a transaction. The base fee is designed to help smooth transaction fees and prevent sudden spikes by targeting 50% full blocks. Depending on how full the new block is, the Base Fee is automatically increased (the block is more than 50% full) or decreased (the block is less than 50% full)."
    },
    {
        term: "Blockchain",
        definition: "A blockchain is a distributed database that is shared among the nodes of a computer network. Blockchains store a continuously growing historical ledger of information (e.g. accounts and transactions) into blocks."
    },
    {
        term: "Smart Contract",
        definition: "A smart contract is a piece of code that executes according to it's instructions exactly like a traditional contract between two people would be executed. Smart contracts are used by developers to build decentralized applications on blockchain networks like Ethereum to enable users to permissionlessly transact in a secure way."
    },
    {
        term: "Solidity",
        definition: "A high-level programming language used for writing smart contracts on the Ethereum blockchain. It offers a secure and robust framework for creating decentralized applications (dApps) and self-executing contracts with predefined rules. With a syntax resembling popular programming languages, Solidity allows developers to build sophisticated applications on the Ethereum network, leveraging features like inheritance, libraries, and complex data structures."
    },
    {
        term: "Testnet",
        definition: "A testnet (test network) is where developers can test protocol upgrades and smart contracts before deploying them on mainnet."
    },
    {
        term: "Gas",
        definition: "Gas is a unit of measurement that represents the computational effort required to complete a transaction. How much a user spends to complete a transaction is determined by the total amount of gas multiplied by the gas price."
    },
    {
        term: "Gas Fees",
        definition: "Gas fees are the fees users must pay in Ethereum's native currency, Ether (ETH), to complete a transaction. Gas fees are used to compensate miners for providing the computational work required to process and validate transactions."
    },
    {
        term: "Metamask",
        definition: "A browser extension wallet that enables users to securely store and manage digital assets on the decentralized web (Web3). It serves as a gateway to interact with blockchain networks, allowing users to connect their browsers to decentralized applications (dApps) and execute transactions. With its user-friendly interface, MetaMask facilitates seamless access to the world of cryptocurrencies, non-fungible tokens (NFTs), and decentralized finance (DeFi) applications."
    },
    {
        term: "Sidechain",
        definition: "A side chain is a blockchain that allows tokens from one blockchain to be securely used within a completely separate blockchain, but still move back to the original chain if necessary. Sidechains like xDai are popular because they offer distinct advantages to developers including cost savings and greater transaction speed"
    },
    {
        term: "EIP-1559",
        definition: "Also known as Ethereum Improvement Proposal 1559, EIP-1559 was part of Ethereum's London hard fork and it was deployed across the Ethereum network on August 5th, 2021. EIP-1559 introduced a Base Fee which is paid by users and is eventually burned (i.e. removed from circulation), and it replaced the current gas limit with two values: a “long-term average target” (equal to the current gas limit), and a “hard per-block cap” (twice the current gas limit)."
    },
    {
        term: "Ethereum Name Service (ENS)",
        definition: "The Ethereum Name Service (ENS) is a decentralized naming service that allows users to register human-readable domain names for their Ethereum addresses. ENS names can be used to send and receive transactions, interact with smart contracts, and resolve decentralized websites."
    },
];

// get id of term and definition
const term = document.getElementById('term');
const definition = document.getElementById('definition');
// get random term and definition from glossary array
let usedTerms = []; // keep track of used terms
let randomTerm, randomDefinition;

// generate a random term and definition that haven't been used before
do {
    randomTerm = glossary[Math.floor(Math.random() * glossary.length)];
} while (usedTerms.includes(randomTerm.term));

// add the term to the used terms array
usedTerms.push(randomTerm.term);

// get a random definition that hasn't been used with this term before
do {
    randomDefinition = glossary[Math.floor(Math.random() * glossary.length)];
} while (randomDefinition.term === randomTerm.term || usedTerms.includes(randomDefinition.term));

// add the definition term to the used terms array
usedTerms.push(randomDefinition.term);

// set term and definition to random term and definition
term.innerHTML = randomTerm.term;
definition.innerHTML = randomDefinition.definition;
// set term and definition to random term and definition
term.innerHTML = randomTerm.term;
definition.innerHTML = randomTerm.definition;