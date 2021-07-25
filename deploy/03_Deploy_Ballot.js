let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    let proposalNames = ['myproposal']

    log("----------------------------------------------------")
    /*
    const ballot = await deploy('Ballot', {
        from: deployer,
        args: [proposalNames],
        log: true
    })
    
    log("Log a ballot with command:")
    log("npx hardhat vote --contract " + ballot.address + " --network " + networkConfig[chainId]['name'])
    log("See winner with command:")
    log("npx hardhat winning-proposal --contract " + ballot.address + " --network " + networkConfig[chainId]['name'])
    log("----------------------------------------------------")
    */
}

module.exports.tags = ['all', 'ballot']