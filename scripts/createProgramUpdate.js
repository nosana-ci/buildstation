"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var os_1 = tslib_1.__importDefault(require("os"));
var fs_1 = tslib_1.__importDefault(require("fs"));
var yargs_1 = tslib_1.__importDefault(require("yargs"));
var helpers_1 = require("yargs/helpers");
var sdk_1 = tslib_1.__importDefault(require("@sqds/sdk"));
var anchor = tslib_1.__importStar(require("@coral-xyz/anchor"));
var web3_js_1 = require("@solana/web3.js");
var VERSION = "0.0.1";
var argv = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .version(VERSION)
    .alias("v", "version")
    .alias("h", "help")
    .help()
    .options({
    "private-key": { type: "string" },
    program: { type: "string", required: true },
    buffer: { type: "string", required: true },
    spill: { type: "string", required: true },
    authority: { type: "string", required: true },
    multisig: { type: "string", required: true },
    name: { type: "string", required: true },
})
    .parseSync();
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var walletJSON, homedir, defaultWalletPath, walletPath, walletKeypair, wallet, squads, program, buffer, spill, authority, multisig, upgrade;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    homedir = os_1.default.homedir();
                    defaultWalletPath = "".concat(homedir, "/.config/solana/id.json");
                    walletPath = defaultWalletPath;
                    if (argv.privateKey && argv.privateKey.length > 0) {
                        walletPath = argv.privateKey;
                    }
                    walletJSON = JSON.parse(fs_1.default.readFileSync(walletPath, "utf-8"));
                }
                catch (e) {
                    console.log("Error reading wallet file: ", e);
                    throw e;
                }
                walletKeypair = anchor.web3.Keypair.fromSecretKey(Uint8Array.from(walletJSON));
                wallet = new anchor.Wallet(walletKeypair);
                console.log("Public key:", wallet.publicKey.toString());
                squads = sdk_1.default.devnet(wallet);
                program = new web3_js_1.PublicKey(argv.program);
                buffer = new web3_js_1.PublicKey(argv.buffer);
                spill = new web3_js_1.PublicKey(argv.spill);
                authority = new web3_js_1.PublicKey(argv.authority);
                multisig = new web3_js_1.PublicKey(argv.multisig);
                return [4 /*yield*/, squads.createProgramUpgrade(multisig, program, buffer, spill, authority, argv.name)];
            case 1:
                upgrade = _a.sent();
                console.log(JSON.stringify(upgrade));
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=index.js.map