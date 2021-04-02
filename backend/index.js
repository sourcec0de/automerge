
const { init, clone, free, applyChanges, applyLocalChange, save, load, loadChanges, getPatch, getHeads, getAllChanges, getChanges, getChangeByHash, getMissingDeps } = require("./backend")
const { receiveSyncMessage, generateSyncMessage } = require('./protocol')
const { encodeSyncMessage, decodeSyncMessage, makeBloomFilter, getChangesToSend } = require('./sync')

module.exports = {
  init, clone, free, applyChanges, applyLocalChange, save, load, loadChanges, getPatch,
  getHeads, getAllChanges, getChanges, getChangeByHash, getMissingDeps,
  receiveSyncMessage, generateSyncMessage, encodeSyncMessage, decodeSyncMessage, makeBloomFilter, getChangesToSend
}

