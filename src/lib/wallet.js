'use strict'
const ethers = require('ethers')

function makeEVMWallet (chain, index) {
  let uidNumber = Number(index);
  let accountIndex = (uidNumber % Math.pow(2, 32)).toString();
  console.log(index + "->" + accountIndex);
  const path = `m/44'/${chain}'/0'/0/${accountIndex}`
  var walletAccount = ethers.Wallet.createRandom({path: path})
  var mnemonic = walletAccount.mnemonic
  return {
    mnemonic: mnemonic,
    path: path,
    address: walletAccount.address
  }
}

function importEVMWallet(chain, index, mnemonic) {
  let uidNumber = Number(index);
  let accountIndex = (uidNumber % Math.pow(2, 32)).toString();
  console.log(index + "->" + accountIndex);
  const path = `m/44'/${chain}'/0'/0/${accountIndex}`
  var walletAccount = ethers.Wallet.fromMnemonic(mnemonic, path)
  var mnemonic = walletAccount.mnemonic
  return {
    mnemonic: mnemonic,
    path: path,
    address: walletAccount.address
  }
}

module.exports = {
  generateEVM: makeEVMWallet,
  importEVM: importEVMWallet
}
