const CityLoot = artifacts.require("CityLoot");

module.exports = async function (deployer) {
   let tx = await deployer.deploy(CityLoot);
   console.log("tx",tx);
};
