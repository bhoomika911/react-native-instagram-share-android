'use strict'

const { NativeModules } = require('react-native');
const { CustomInstagramShare } = NativeModules;

module.exports = {
  ...CustomInstagramShare,
  shareWithInstagram: function shareWithInstagram(options, callback) {
    return CustomInstagramShare.shareWithInstagram(options, callback)
  }
}
