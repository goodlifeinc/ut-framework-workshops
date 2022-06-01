/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoAcquirer server tests isoAcquirer.0200 // external card transaction > icc withdrawal acquirer atm source 1`] = `
Object {
  "32": "9999999",
  "39": "00",
  "54": "0002320C0000000000000001320C000000000000",
  "issuerEmv": Object {
    "authorisationResponseCode": "3030",
    "issuerAuthenticationData": "AAAAAAAA00000000",
  },
  "mtid": "0210",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoAcquirer server tests isoAcquirer.0200 // external card transaction zpk > icc withdrawal acquirer iso source 1`] = `
Object {
  "32": "9999999",
  "39": "00",
  "54": "0002320C0000000000000001320C000000000000",
  "mtid": "0210",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoAcquirer server tests isoAcquirer.0420 // external card transaction reversal > icc withdrawal acquirer reversal 1`] = `
Object {
  "32": "9999999",
  "39": "00",
  "mtid": "0430",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoAcquirer server tests isoAcquirer.0420 // external card transaction reversal > icc withdrawal acquirer reversal track2 1`] = `
Object {
  "32": "9999999",
  "39": "00",
  "mtid": "0430",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoIssuerExternal server tests isoSimAcquirer.iso.reversal // external card reversal > External icc withdrawal reversal 1`] = `
Object {
  "14": "2811",
  "18": "6011",
  "19": "978",
  "2": "999999000000000000",
  "22": "051",
  "23": "001",
  "24": "000",
  "25": "00",
  "28": "C00000000",
  "3": "011000",
  "32": "0000000056",
  "39": "00",
  "4": "000000010000",
  "41": "12345678",
  "43": "ISO  TEST                DATA         SG",
  "49": "978",
  "5": "000000000000",
  "50": "978",
  "54": "0002320C0000000000000001320C000000000000",
  "84": "C00000000000",
  "95": "000000000000000000000000000000000000000000",
  "mtid": "0430",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoIssuerExternal server tests isoSimAcquirer.iso.reversal // external card reversal error > External icc withdrawal reversal error 1`] = `
Object {
  "14": "2811",
  "18": "6011",
  "19": "978",
  "2": "999999000000000000",
  "22": "051",
  "23": "001",
  "24": "000",
  "25": "00",
  "28": "C00000000",
  "3": "011000",
  "32": "0000000056",
  "39": "94",
  "4": "000000010000",
  "41": "12345678",
  "43": "ISO  TEST                DATA         SG",
  "49": "978",
  "5": "000000000000",
  "50": "978",
  "54": "0002320C0000000000000001320C000000000000",
  "84": "C00000000000",
  "95": "000000000000000000000000000000000000000000",
  "mtid": "0430",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoIssuerExternal server tests isoSimAcquirer.iso.transfer // external card transaction > External icc withdrawal 1`] = `
Object {
  "14": "2811",
  "18": "6011",
  "19": "978",
  "2": "999999000000000000",
  "22": "051",
  "23": "001",
  "24": "000",
  "25": "00",
  "28": "D00000000",
  "3": "011000",
  "32": "0000000056",
  "39": "00",
  "4": "000000010000",
  "41": "12345678",
  "43": "ISO  TEST                DATA         SG",
  "49": "978",
  "5": "000000000000",
  "50": "978",
  "54": "0002320C0000000000000001320C000000000000",
  "84": "D00000000000",
  "mtid": "0210",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoIssuerExternal server tests isoSimAcquirer.iso.transfer // external card transaction issuer error > External icc withdrawal error 1`] = `
Object {
  "14": "2811",
  "18": "6011",
  "19": "978",
  "2": "999999000000000000",
  "22": "051",
  "23": "001",
  "24": "000",
  "25": "00",
  "28": "D00000000",
  "3": "011000",
  "32": "0000000056",
  "39": "55",
  "4": "000000010000",
  "41": "12345678",
  "43": "ISO  TEST                DATA         SG",
  "49": "978",
  "5": "000000000000",
  "50": "978",
  "54": "0002320C0000000000000001320C000000000000",
  "84": "D00000000000",
  "mtid": "0210",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoIssuerOwn server tests isoSimAcquirer.iso.reversal // own card transaction reversal > Own icc withdrawal reversal 1`] = `
Object {
  "14": "2811",
  "18": "6011",
  "19": "978",
  "2": "123456000000000000",
  "22": "051",
  "23": "001",
  "24": "000",
  "25": "00",
  "28": "C00000000",
  "3": "011000",
  "32": "0000000056",
  "39": "00",
  "4": "000000010000",
  "41": "12345678",
  "43": "ISO  TEST                DATA         SG",
  "49": "978",
  "5": "000000000000",
  "50": "978",
  "54": "0002320C0000000000000001320C000000000000",
  "84": "C00000000000",
  "95": "000000000000000000000000000000000000000000",
  "mtid": "0430",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoIssuerOwn server tests isoSimAcquirer.iso.transfer // own card fallback transaction invalid cvv > Own icc fallback withdrawal invalid icvv 1`] = `
Object {
  "14": "2811",
  "18": "6011",
  "19": "978",
  "2": "123456000000000000",
  "22": "801",
  "23": "001",
  "24": "000",
  "25": "00",
  "28": "D00000000",
  "3": "011000",
  "32": "0000000056",
  "39": "94",
  "4": "000000010000",
  "41": "12345678",
  "43": "ISO  TEST                DATA         SG",
  "49": "978",
  "5": "000000000000",
  "50": "978",
  "54": "0002320C0000000000000001320C000000000000",
  "84": "D00000000000",
  "mtid": "0210",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoIssuerOwn server tests isoSimAcquirer.iso.transfer // own card transaction > Own icc withdrawal 1`] = `
Object {
  "14": "2811",
  "18": "6011",
  "19": "978",
  "2": "123456000000000000",
  "22": "051",
  "23": "001",
  "24": "000",
  "25": "00",
  "28": "D00000000",
  "3": "011000",
  "32": "0000000056",
  "39": "00",
  "4": "000000010000",
  "41": "12345678",
  "43": "ISO  TEST                DATA         SG",
  "49": "978",
  "5": "000000000000",
  "50": "978",
  "54": "0002320C0000000000000001320C000000000000",
  "84": "D00000000000",
  "mtid": "0210",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoNetwork server tests isoSimAcquirer.cutover // cutover > cutover 1`] = `
Object {
  "32": "9999999",
  "70": "201",
  "mtid": "0810",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoNetwork server tests isoSimAcquirer.echo // echo > echo 1`] = `
Object {
  "32": "9999999",
  "70": "301",
  "mtid": "0810",
}
`

exports[`test/integration/parallel/ctp-iso.test.js TAP jobs utCtpIso.test.isoNetwork server tests isoSimAcquirer.signoff // signoff > cutover 1`] = `
Object {
  "32": "9999999",
  "70": "002",
  "mtid": "0810",
}
`
