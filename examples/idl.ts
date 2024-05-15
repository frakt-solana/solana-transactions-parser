export type Bonds = {
  version: '0.1.0'
  name: 'bonds'
  instructions: [
    {
      name: 'migrateBondTradeTransaction'
      accounts: [
        {
          name: 'fraktBond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondTradeTransactionV3'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondTransactionUser'
          isMut: true
          isSigner: false
        },
        {
          name: 'fbondTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'seller'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'originalLent'
          type: 'u64'
        },
        {
          name: 'fullRepaidAmount'
          type: 'u64'
        },
        {
          name: 'partialRepaySnapshot'
          type: 'u64'
        },
        {
          name: 'bondTradeTransactionState'
          type: {
            defined: 'BondTradeTransactionV2State'
          }
        },
        {
          name: 'amountOfBonds'
          type: 'u64'
        },
        {
          name: 'solAmount'
          type: 'u64'
        },
        {
          name: 'feeAmount'
          type: 'u64'
        },
        {
          name: 'bondTradeTransactionType'
          type: {
            defined: 'BondTradeTransactionV2Type'
          }
        },
        {
          name: 'soldAt'
          type: 'u64'
        },
        {
          name: 'redeemedAt'
          type: 'u64'
        },
        {
          name: 'redeemResult'
          type: {
            defined: 'RedeemResult'
          }
        },
        {
          name: 'isDirectSell'
          type: 'bool'
        },
      ]
    },
    {
      name: 'boundHadoMarketToFraktMarket'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'fraktMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'hadoRegistry'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'depositToBondOfferStandard'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'amountOfSolToDeposit'
          type: 'u64'
        },
      ]
    },
    {
      name: 'withdrawFromBondOfferStandard'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'amountOfTokensToWithdraw'
          type: 'u64'
        },
      ]
    },
    {
      name: 'initializeHadoMarket'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: true
          isSigner: true
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'validationAdapterProgram'
          isMut: false
          isSigner: false
          docs: ['CHECK Custom validation adapter']
        },
        {
          name: 'pairTokenMint'
          isMut: false
          isSigner: false
          docs: ['CHECK Custom token mint']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'marketParams'
          type: {
            defined: 'InitializeHadoMarketParams'
          }
        },
      ]
    },
    {
      name: 'finishHadoMarket'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'updateHadoMarketFee'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'newFee'
          type: 'u64'
        },
      ]
    },
    {
      name: 'removeBondOfferV2'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'initializeFlashLoanPool'
      accounts: [
        {
          name: 'pool'
          isMut: true
          isSigner: true
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'loanFeePoints'
          type: 'u16'
        },
      ]
    },
    {
      name: 'depositSolToFlashLoanPool'
      accounts: [
        {
          name: 'pool'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'fundsSolVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'solAmountToDeposit'
          type: 'u64'
        },
      ]
    },
    {
      name: 'withdrawSolFromFlashLoanPool'
      accounts: [
        {
          name: 'pool'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'fundsSolVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'solAmountToWithdraw'
          type: 'u64'
        },
      ]
    },
    {
      name: 'takeFlashLoan'
      accounts: [
        {
          name: 'pool'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'fundsSolVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
          docs: ['CHECK : instructions']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'solAmountToBorrow'
          type: 'u64'
        },
      ]
    },
    {
      name: 'repayFlashLoan'
      accounts: [
        {
          name: 'pool'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'fundsSolVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
          docs: ['CHECK : instructions']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'solAmountToRepay'
          type: 'u64'
        },
      ]
    },
    {
      name: 'createBondOfferStandard'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'bondOfferRandomSeed'
          type: 'u64'
        },
        {
          name: 'amountOfSolToDeposit'
          type: 'u64'
        },
        {
          name: 'loanToValueFilter'
          type: 'u64'
        },
        {
          name: 'maxReturnAmountFilter'
          type: 'u64'
        },
        {
          name: 'bondFeatures'
          type: {
            defined: 'BondFeatures'
          }
        },
      ]
    },
    {
      name: 'updateBondOfferStandard'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'loanToValueFilter'
          type: 'u64'
        },
        {
          name: 'maxReturnAmountFilter'
          type: 'u64'
        },
      ]
    },
    {
      name: 'borrowPerpetualTest'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'perpetualBorrowParams'
          type: {
            vec: {
              defined: 'BorrowPerpetualParams'
            }
          }
        },
        {
          name: 'optimizeIntoReserves'
          type: 'bool'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
      ]
    },
    {
      name: 'mapBanxToPoints'
      accounts: [
        {
          name: 'banxPointsMap'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'playerPoints'
          type: 'u64'
        },
        {
          name: 'partnerPoints'
          type: 'u64'
        },
      ]
    },
    {
      name: 'fixBrokenBanxStake'
      accounts: [
        {
          name: 'banxStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'createPerpetualBondOffer'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'banxSolStakingOffer'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'bondOfferRandomSeed'
          type: 'u64'
        },
        {
          name: 'loanValue'
          type: 'u64'
        },
        {
          name: 'amountOfLoans'
          type: 'u64'
        },
      ]
    },
    {
      name: 'removePerpetualOffer'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'banxSolStakingOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'repayPerpetualLoan'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'repayPerpetualLoanTest'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'refinancePerpetualLoan'
      accounts: [
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'uninitializedOldBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK old_bond_offer_v2']
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldBondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'lender'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
          docs: ['CHECK sponsor vault']
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'oldBondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'lenderSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'bondOfferRandomSeed'
          type: 'u64'
        },
        {
          name: 'newApr'
          type: 'u64'
        },
      ]
    },
    {
      name: 'makePerpetualMarket'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: true
          isSigner: true
        },
        {
          name: 'fraktMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'hadoRegistry'
          isMut: true
          isSigner: false
        },
        {
          name: 'whitelistEntry'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'marketParams'
          type: {
            defined: 'MakePerpetualMarketParams'
          }
        },
      ]
    },
    {
      name: 'makePerpetualMarketValidation'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarketValidation'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'creatorHash'
          type: {
            array: ['u8', 32]
          }
        },
      ]
    },
    {
      name: 'updatePerpetualMarket'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'fraktMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'hadoRegistry'
          isMut: true
          isSigner: false
        },
        {
          name: 'whitelistEntry'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'updatePerpetualOffer'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'banxSolStakingOffer'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'newLoanValue'
          type: 'u64'
        },
        {
          name: 'amountOfLoans'
          type: 'u64'
        },
      ]
    },
    {
      name: 'updateInterestPerpetualMarket'
      accounts: [
        {
          name: 'hadoMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'minMarketFee'
          type: 'u64'
        },
      ]
    },
    {
      name: 'borrowPerpetual'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'perpetualBorrowParams'
          type: {
            vec: {
              defined: 'BorrowPerpetualParams'
            }
          }
        },
        {
          name: 'optimizeIntoReserves'
          type: 'bool'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
      ]
    },
    {
      name: 'claimPerpetualLoanTest'
      accounts: [
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedOldBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK old_bond_offer_v2']
        },
      ]
      args: []
    },
    {
      name: 'terminatePerpetualLoan'
      accounts: [
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'instantRefinancePerpetualLoan'
      accounts: [
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'uninitializedOldBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK old_bond_offer_v2']
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'oldBondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldBondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
          docs: ['CHECK sponsor vault']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'lenderSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'newApr'
          type: 'u64'
        },
      ]
    },
    {
      name: 'borrowerRefinance'
      accounts: [
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'uninitializedOldBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK old_bond_offer_v2']
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'oldBondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldBondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'lender'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
          docs: ['CHECK sponsor vault']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'lenderSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'solToRefinance'
          type: 'u64'
        },
        {
          name: 'bondOfferRandomSeed'
          type: 'u64'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
      ]
    },
    {
      name: 'borrowStakedBanxPerpetual'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'ownerTokenRecord'
          isMut: true
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'perpetualBorrowParams'
          type: {
            vec: {
              defined: 'BorrowPerpetualParams'
            }
          }
        },
        {
          name: 'optimizeIntoReserves'
          type: 'bool'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
      ]
    },
    {
      name: 'repayStakedBanxPerpetualLoan'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'borrowCnftPerpetual'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol doesnt fit into the instruction']
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'treeAuthority'
          isMut: true
          isSigner: false
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'whitelistEntry'
          isMut: false
          isSigner: false
        },
        {
          name: 'merkleTree'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarketValidation'
          isMut: true
          isSigner: false
        },
        {
          name: 'logWrapper'
          isMut: false
          isSigner: false
        },
        {
          name: 'compressionProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'bubblegumProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'nftMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'perpetualBorrowParam'
          type: {
            defined: 'BorrowPerpetualParams'
          }
        },
        {
          name: 'root'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'dataHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'creatorHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'nonce'
          type: 'u64'
        },
        {
          name: 'index'
          type: 'u32'
        },
        {
          name: 'proofLen'
          type: 'u8'
        },
        {
          name: 'optimizeIntoReserves'
          type: 'bool'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
      ]
    },
    {
      name: 'repayCnftPerpetualLoan'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'uninitializedBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK bond_offer_v2']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'treeAuthority'
          isMut: true
          isSigner: false
        },
        {
          name: 'merkleTree'
          isMut: true
          isSigner: false
        },
        {
          name: 'logWrapper'
          isMut: false
          isSigner: false
        },
        {
          name: 'compressionProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'bubblegumProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'root'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'dataHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'creatorHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'nonce'
          type: 'u64'
        },
        {
          name: 'index'
          type: 'u32'
        },
        {
          name: 'proofLen'
          type: 'u8'
        },
      ]
    },
    {
      name: 'claimCnftPerpetualLoan'
      accounts: [
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'treeAuthority'
          isMut: true
          isSigner: false
        },
        {
          name: 'merkleTree'
          isMut: true
          isSigner: false
        },
        {
          name: 'logWrapper'
          isMut: false
          isSigner: false
        },
        {
          name: 'compressionProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'bubblegumProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedOldBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK old_bond_offer_v2']
        },
      ]
      args: [
        {
          name: 'root'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'dataHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'creatorHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'nonce'
          type: 'u64'
        },
        {
          name: 'index'
          type: 'u32'
        },
        {
          name: 'proofLen'
          type: 'u8'
        },
      ]
    },
    {
      name: 'repayPartialPerpetualLoan'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'lender'
          isMut: true
          isSigner: false
        },
        {
          name: 'uninitializedOldBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK old_bond_offer_v2']
        },
        {
          name: 'oldBondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'repaidBondTradeTransaction'
          isMut: true
          isSigner: true
        },
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'lenderSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'fractionToRepay'
          type: 'u64'
        },
      ]
    },
    {
      name: 'transferToSponsorVault'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
          docs: ['CHECK sponsor vault']
        },
      ]
      args: [
        {
          name: 'solToTransfer'
          type: 'u64'
        },
      ]
    },
    {
      name: 'withdrawFromSponsorVault'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
          docs: ['CHECK sponsor vault']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'amountOfSolToWithdraw'
          type: 'u64'
        },
      ]
    },
    {
      name: 'createPerpetualBondOfferBonding'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'banxSolStakingOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'bondOfferRandomSeed'
          type: 'u64'
        },
        {
          name: 'loanValue'
          type: 'u64'
        },
        {
          name: 'quantityOfLoans'
          type: 'u64'
        },
        {
          name: 'bondingCurveType'
          type: {
            defined: 'BondOfferBondingCurveType'
          }
        },
        {
          name: 'delta'
          type: 'u64'
        },
      ]
    },
    {
      name: 'updatePerpetualOfferBonding'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'banxSolStakingOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'loanValue'
          type: 'u64'
        },
        {
          name: 'quantityOfLoans'
          type: 'u64'
        },
        {
          name: 'delta'
          type: 'u64'
        },
      ]
    },
    {
      name: 'claimPerpetualBondOfferInterest'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'banxSolStakingOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'claimPerpetualBondOfferReserves'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'banxSolStakingOffer'
          isMut: true
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'migrateOldToBondingOffer'
      accounts: [
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldBondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'bondOfferRandomSeed'
          type: 'u64'
        },
      ]
    },
    {
      name: 'borrowerRefinanceToSame'
      accounts: [
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'oldBondOfferVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldBondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'lender'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
          docs: ['CHECK sponsor vault']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'lenderSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'solToRefinance'
          type: 'u64'
        },
        {
          name: 'bondOfferRandomSeed'
          type: 'u64'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
      ]
    },
    {
      name: 'setRepaymentCall'
      accounts: [
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'callAmount'
          type: 'u64'
        },
      ]
    },
    {
      name: 'subscribeBanxAdventure'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'subscribeBanxAdventureParams'
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams'
            }
          }
        },
      ]
    },
    {
      name: 'subscribeBanxAdventureAdmin'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStakeUser'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'subscribeBanxAdventureParams'
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams'
            }
          }
        },
      ]
    },
    {
      name: 'claimStakingRewards'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStakingVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStakingVaultTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'stakeBanxNft'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStake'
          isMut: true
          isSigner: true
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxPointsMap'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoRegistry'
          isMut: false
          isSigner: false
        },
        {
          name: 'whitelistEntry'
          isMut: false
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'editionInfo'
          isMut: false
          isSigner: false
        },
        {
          name: 'nftMetadata'
          isMut: true
          isSigner: false
        },
        {
          name: 'ownerTokenRecord'
          isMut: true
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'currentWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'currentWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
      ]
      args: [
        {
          name: 'subscribeBanxAdventureParams'
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams'
            }
          }
        },
      ]
    },
    {
      name: 'stakeBanxToken'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStakingVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'banxStakingVaultTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'currentWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'currentWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
      ]
      args: [
        {
          name: 'tokensToStake'
          type: 'u64'
        },
        {
          name: 'subscribeBanxAdventureParams'
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams'
            }
          }
        },
      ]
    },
    {
      name: 'unstakeBanxTokens'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStakingVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'banxStakingVaultTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'currentWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'currentWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
      ]
      args: [
        {
          name: 'tokensToUnstake'
          type: 'u64'
        },
      ]
    },
    {
      name: 'unstakeBanxNft'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'editionInfo'
          isMut: false
          isSigner: false
        },
        {
          name: 'nftMetadata'
          isMut: true
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'authRules'
          isMut: false
          isSigner: false
        },
        {
          name: 'ownerTokenRecord'
          isMut: true
          isSigner: false
        },
        {
          name: 'destTokenRecord'
          isMut: true
          isSigner: false
        },
        {
          name: 'currentWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'currentWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
      ]
      args: []
    },
    {
      name: 'claimPerpetualLoanV2'
      accounts: [
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'collateralOwner'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'collateralTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'authRules'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'editionInfo'
          isMut: false
          isSigner: false
        },
        {
          name: 'nftMetadata'
          isMut: true
          isSigner: false
        },
        {
          name: 'ownerTokenRecord'
          isMut: true
          isSigner: false
        },
        {
          name: 'middleTokenRecord'
          isMut: true
          isSigner: false
        },
        {
          name: 'destTokenRecord'
          isMut: true
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedOldBondOfferV2'
          isMut: true
          isSigner: false
          docs: ['CHECK old_bond_offer_v2']
        },
        {
          name: 'currentWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventure'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'currentWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'firstWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'secondWeekBanxAdventureSubscription'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
      ]
      args: [
        {
          name: 'authorizationData'
          type: {
            option: {
              defined: 'AuthorizationDataLocal'
            }
          }
        },
      ]
    },
    {
      name: 'updateBanxStakingSettings'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'maxTokenStakeAmount'
          type: 'u64'
        },
        {
          name: 'tokensPerPartnerPoints'
          type: 'u64'
        },
        {
          name: 'tokensPerWeek'
          type: 'u64'
        },
      ]
    },
    {
      name: 'createBanxTokenStake'
      accounts: [
        {
          name: 'banxStakingSettings'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxTokenStakeUser'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'banxNftsStakedQuantity'
          type: 'u64'
        },
        {
          name: 'partnerPoints'
          type: 'u64'
        },
        {
          name: 'playerPoints'
          type: 'u64'
        },
      ]
    },
    {
      name: 'withdrawRewardAdmin'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStakingVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'banxStakingVaultTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'amountOfTokensToWithdraw'
          type: 'u64'
        },
      ]
    },
    {
      name: 'changeBanxAdventureRevAdmin'
      accounts: [
        {
          name: 'banxAdventure'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'newwRev'
          type: 'u64'
        },
      ]
    },
    {
      name: 'createPerpetualListingCnft'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'fraktBond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'whitelistEntry'
          isMut: false
          isSigner: false
        },
        {
          name: 'merkleTree'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarketValidation'
          isMut: true
          isSigner: false
        },
        {
          name: 'logWrapper'
          isMut: false
          isSigner: false
        },
        {
          name: 'compressionProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'bubblegumProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedTokenMint'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedHadoMarket'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'treeAuthority'
          isMut: true
          isSigner: false
          docs: ['CHECK tree_authority']
        },
      ]
      args: [
        {
          name: 'randomSeed'
          type: 'u64'
        },
        {
          name: 'amountOfSolToGet'
          type: 'u64'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
        {
          name: 'isBorrowerListing'
          type: 'bool'
        },
        {
          name: 'lendingToken'
          type: {
            defined: 'LendingTokenType'
          }
        },
        {
          name: 'terminationFreeze'
          type: 'u64'
        },
        {
          name: 'root'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'dataHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'creatorHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'nonce'
          type: 'u64'
        },
        {
          name: 'index'
          type: 'u32'
        },
        {
          name: 'proofLen'
          type: 'u8'
        },
      ]
    },
    {
      name: 'createPerpetualListing'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'fraktBond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedTokenMint'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedHadoMarket'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedBanxPointMap'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedUserTokenAccount'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
      ]
      args: [
        {
          name: 'randomSeed'
          type: 'u64'
        },
        {
          name: 'amountOfSolToGet'
          type: 'u64'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
        {
          name: 'isBorrowerListing'
          type: 'bool'
        },
        {
          name: 'lendingToken'
          type: {
            defined: 'LendingTokenType'
          }
        },
        {
          name: 'terminationFreeze'
          type: 'u64'
        },
      ]
    },
    {
      name: 'createPerpetualListingStakedBanx'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'fraktBond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedTokenMint'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedHadoMarket'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedBanxPointMap'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedUserTokenAccount'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
      ]
      args: [
        {
          name: 'randomSeed'
          type: 'u64'
        },
        {
          name: 'amountOfSolToGet'
          type: 'u64'
        },
        {
          name: 'aprRate'
          type: 'u64'
        },
        {
          name: 'isBorrowerListing'
          type: 'bool'
        },
        {
          name: 'lendingToken'
          type: {
            defined: 'LendingTokenType'
          }
        },
        {
          name: 'terminationFreeze'
          type: 'u64'
        },
      ]
    },
    {
      name: 'lendToBorrowerListing'
      accounts: [
        {
          name: 'fbond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOfferV2'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldBondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'hadoMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'protocolFeeReceiver'
          isMut: true
          isSigner: false
        },
        {
          name: 'sponsorVault'
          isMut: true
          isSigner: false
          docs: ['CHECK sponsor vault']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'borrower'
          isMut: true
          isSigner: false
        },
        {
          name: 'userSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'borrowerSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized'
          isMut: true
          isSigner: false
        },
        {
          name: 'splTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'removePerpetualListingCnft'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'fraktBond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedTokenMint'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'treeAuthority'
          isMut: true
          isSigner: false
        },
        {
          name: 'merkleTree'
          isMut: true
          isSigner: false
        },
        {
          name: 'logWrapper'
          isMut: false
          isSigner: false
        },
        {
          name: 'compressionProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'bubblegumProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'isBorrowerListing'
          type: 'bool'
        },
        {
          name: 'root'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'dataHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'creatorHash'
          type: {
            array: ['u8', 32]
          }
        },
        {
          name: 'nonce'
          type: 'u64'
        },
        {
          name: 'index'
          type: 'u32'
        },
        {
          name: 'proofLen'
          type: 'u8'
        },
      ]
    },
    {
      name: 'removePerpetualListingStakedBanx'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'fraktBond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'banxStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'isBorrowerListing'
          type: 'bool'
        },
      ]
    },
    {
      name: 'removePerpetualListing'
      accounts: [
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'bondTradeTransaction'
          isMut: true
          isSigner: false
        },
        {
          name: 'fraktBond'
          isMut: true
          isSigner: false
        },
        {
          name: 'bondOffer'
          isMut: true
          isSigner: false
        },
        {
          name: 'mutualBondTradeTxnVault'
          isMut: true
          isSigner: false
          docs: ['CHECK vault for sol']
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'instructions'
          isMut: false
          isSigner: false
        },
        {
          name: 'authorizationRulesProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'uninitializedTokenMint'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
        {
          name: 'uninitializedUserTokenAccount'
          isMut: true
          isSigner: false
          docs: ['CHECK token_mint']
        },
      ]
      args: [
        {
          name: 'isBorrowerListing'
          type: 'bool'
        },
      ]
    },
    {
      name: 'patchBanxTokenStakeAdmin'
      accounts: [
        {
          name: 'banxTokenStake'
          isMut: true
          isSigner: false
        },
        {
          name: 'user'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'nftsAmount'
          type: 'u64'
        },
        {
          name: 'partnerPointsAmount'
          type: 'u64'
        },
        {
          name: 'playerPointsAmount'
          type: 'u64'
        },
      ]
    },
  ]
  accounts: [
    {
      name: 'banxAdventureSubscription'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'adventureSubscriptionState'
            type: {
              defined: 'BanxAdventureSubscriptionState'
            }
          },
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'adventure'
            type: 'publicKey'
          },
          {
            name: 'banxTokenStake'
            type: 'publicKey'
          },
          {
            name: 'stakeTokensAmount'
            type: 'u64'
          },
          {
            name: 'stakeNftAmount'
            type: 'u64'
          },
          {
            name: 'stakePartnerPointsAmount'
            type: 'u64'
          },
          {
            name: 'stakePlayerPointsAmount'
            type: 'u64'
          },
          {
            name: 'subscribedAt'
            type: 'u64'
          },
          {
            name: 'unsubscribedAt'
            type: 'u64'
          },
          {
            name: 'harvestedAt'
            type: 'u64'
          },
          {
            name: 'amountOfTokensHarvested'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'u64'
          },
          {
            name: 'placeholderTwo'
            type: 'u64'
          },
          {
            name: 'placeholderThree'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'banxAdventure'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'adventureState'
            type: {
              defined: 'BanxAdventureState'
            }
          },
          {
            name: 'tokensPerPoints'
            type: 'u64'
          },
          {
            name: 'week'
            type: 'u64'
          },
          {
            name: 'periodStartedAt'
            type: 'u64'
          },
          {
            name: 'periodEndingAt'
            type: 'u64'
          },
          {
            name: 'rewardsToBeDistributed'
            type: 'u64'
          },
          {
            name: 'totalPartnerPoints'
            type: 'u64'
          },
          {
            name: 'totalPlayerPoints'
            type: 'u64'
          },
          {
            name: 'totalTokensStaked'
            type: 'u64'
          },
          {
            name: 'totalBanxSubscribed'
            type: 'u64'
          },
          {
            name: 'amountOfTokensHarvested'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'banxStakingSettings'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'banxStakingSettingsState'
            type: {
              defined: 'BanxStakingSettingsState'
            }
          },
          {
            name: 'maxTokenStakeAmount'
            type: 'u64'
          },
          {
            name: 'tokensPerPartnerPoints'
            type: 'u64'
          },
          {
            name: 'tokensStaked'
            type: 'u64'
          },
          {
            name: 'banxStaked'
            type: 'u64'
          },
          {
            name: 'tokensPerWeek'
            type: 'u64'
          },
          {
            name: 'rewardsHarvested'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'banxTokenStake'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'banxStakeState'
            type: {
              defined: 'BanxTokenStakeState'
            }
          },
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'adventureSubscriptionsQuantity'
            type: 'u64'
          },
          {
            name: 'tokensStaked'
            type: 'u64'
          },
          {
            name: 'partnerPointsStaked'
            type: 'u64'
          },
          {
            name: 'playerPointsStaked'
            type: 'u64'
          },
          {
            name: 'banxNftsStakedQuantity'
            type: 'u64'
          },
          {
            name: 'stakedAt'
            type: 'u64'
          },
          {
            name: 'unstakedAt'
            type: 'u64'
          },
          {
            name: 'farmedAmount'
            type: 'u64'
          },
          {
            name: 'nftsStakedAt'
            type: 'u64'
          },
          {
            name: 'nftsUnstakedAt'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'collateralBox'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'fbond'
            type: 'publicKey'
          },
          {
            name: 'collateralBoxType'
            type: {
              defined: 'CollateralBoxType'
            }
          },
          {
            name: 'collateralTokenMint'
            type: 'publicKey'
          },
          {
            name: 'collateralTokenAccount'
            type: 'publicKey'
          },
          {
            name: 'collateralAmount'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'fraktBond'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'fraktBondState'
            type: {
              defined: 'FraktBondState'
            }
          },
          {
            name: 'bondTradeTransactionsCounter'
            type: 'u8'
          },
          {
            name: 'borrowedAmount'
            type: 'u64'
          },
          {
            name: 'banxStake'
            type: 'publicKey'
          },
          {
            name: 'fraktMarket'
            type: 'publicKey'
          },
          {
            name: 'amountToReturn'
            type: 'u64'
          },
          {
            name: 'actualReturnedAmount'
            type: 'u64'
          },
          {
            name: 'terminatedCounter'
            type: 'u8'
          },
          {
            name: 'fbondTokenMint'
            type: 'publicKey'
          },
          {
            name: 'fbondTokenSupply'
            type: 'u64'
          },
          {
            name: 'activatedAt'
            type: 'u64'
          },
          {
            name: 'liquidatingAt'
            type: 'u64'
          },
          {
            name: 'fbondIssuer'
            type: 'publicKey'
          },
          {
            name: 'repaidOrLiquidatedAt'
            type: 'u64'
          },
          {
            name: 'currentPerpetualBorrowed'
            type: 'u64'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'refinanceAuctionStartedAt'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'flashLoanPool'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'authority'
            type: 'publicKey'
          },
          {
            name: 'borrowing'
            type: 'bool'
          },
          {
            name: 'balance'
            type: 'u64'
          },
          {
            name: 'loanFeePoints'
            type: 'u16'
          },
        ]
      }
    },
    {
      name: 'hadespinLeaderboardEntry'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'totalSolDeposited'
            type: 'u64'
          },
          {
            name: 'totalSolInNftDeposited'
            type: 'u64'
          },
          {
            name: 'totalNftDeposited'
            type: 'u64'
          },
          {
            name: 'totalFeePayed'
            type: 'u64'
          },
          {
            name: 'totalSolWon'
            type: 'u64'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
          {
            name: 'placeholderTwo'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'hadespinLeaderboardWeekEntry'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'week'
            type: 'u64'
          },
          {
            name: 'totalSolDeposited'
            type: 'u64'
          },
          {
            name: 'totalSolInNftDeposited'
            type: 'u64'
          },
          {
            name: 'totalNftDeposited'
            type: 'u64'
          },
          {
            name: 'totalFeePayed'
            type: 'u64'
          },
          {
            name: 'totalSolWon'
            type: 'u64'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
          {
            name: 'placeholderTwo'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'hadespinRakeback'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'hadesToClaimAmount'
            type: 'u64'
          },
          {
            name: 'claimTimestamp'
            type: 'u64'
          },
          {
            name: 'claimedAt'
            type: 'u64'
          },
          {
            name: 'claimed'
            type: 'bool'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'roundSetting'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'completedRounds'
            type: 'u64'
          },
          {
            name: 'totalSolDeposited'
            type: 'u64'
          },
          {
            name: 'totalFeeCollected'
            type: 'u64'
          },
          {
            name: 'totalParticipants'
            type: 'u64'
          },
          {
            name: 'roundDuration'
            type: 'u64'
          },
          {
            name: 'minSolToDeposit'
            type: 'u64'
          },
          {
            name: 'feePercent'
            type: 'u64'
          },
          {
            name: 'canInitializeNextRound'
            type: 'bool'
          },
          {
            name: 'lastRoundEndsAt'
            type: 'u64'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'rakebackHadesForSol'
            type: 'u64'
          },
          {
            name: 'contractBid'
            type: 'u64'
          },
          {
            name: 'placeholdeOne'
            type: 'u64'
          },
          {
            name: 'placeholdeTwo'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'round'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'roundState'
            type: {
              defined: 'RoundState'
            }
          },
          {
            name: 'roundValue'
            type: 'u64'
          },
          {
            name: 'startedAt'
            type: 'u64'
          },
          {
            name: 'solAmount'
            type: 'u64'
          },
          {
            name: 'feeAmount'
            type: 'u64'
          },
          {
            name: 'participants'
            type: 'u64'
          },
          {
            name: 'roundEndsAt'
            type: 'u64'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'winner'
            type: 'publicKey'
          },
          {
            name: 'roundNumber'
            type: 'u64'
          },
          {
            name: 'solInNftAmount'
            type: 'u64'
          },
          {
            name: 'contractBid'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'u64'
          },
          {
            name: 'placeholderTwo'
            type: 'u64'
          },
          {
            name: 'placeholderThree'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'userRound'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'round'
            type: 'publicKey'
          },
          {
            name: 'solDeposited'
            type: 'u64'
          },
          {
            name: 'startSolPosition'
            type: 'u64'
          },
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'depositedAt'
            type: 'u64'
          },
          {
            name: 'nftMint'
            type: 'publicKey'
          },
          {
            name: 'jackpotSolAmount'
            type: 'u64'
          },
          {
            name: 'jackpotClaimedAt'
            type: 'u64'
          },
          {
            name: 'jackpotClaimed'
            type: 'bool'
          },
          {
            name: 'placeholderOne'
            type: 'u64'
          },
          {
            name: 'placeholderTwo'
            type: 'u32'
          },
          {
            name: 'placeholderThree'
            type: 'bool'
          },
          {
            name: 'placeholderFour'
            type: 'bool'
          },
          {
            name: 'placeholderFive'
            type: 'bool'
          },
        ]
      }
    },
    {
      name: 'hadoMarketRegistry'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'hadoMarket'
            type: 'publicKey'
          },
          {
            name: 'fraktMarket'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'hadoMarketValidation'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'hadoMarket'
            type: 'publicKey'
          },
          {
            name: 'creatorHash'
            type: {
              array: ['u8', 32]
            }
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
          {
            name: 'placeholderTwo'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'hadoMarket'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'marketAuthority'
            type: 'publicKey'
          },
          {
            name: 'marketState'
            type: {
              defined: 'MarketState'
            }
          },
          {
            name: 'marketTrustType'
            type: {
              defined: 'MarketTrustType'
            }
          },
          {
            name: 'pairValidationType'
            type: {
              defined: 'PairValidationType'
            }
          },
          {
            name: 'fraktMarket'
            type: 'publicKey'
          },
          {
            name: 'minBidCap'
            type: 'u64'
          },
          {
            name: 'minMarketFee'
            type: 'u64'
          },
          {
            name: 'whitelistType'
            type: {
              defined: 'NftValidationWhitelistTypeHado'
            }
          },
          {
            name: 'whitelistedAddress'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'banxSolStakingOffer'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'banxSolStakingOfferState'
            type: {
              defined: 'BanxSolStakingOfferState'
            }
          },
          {
            name: 'lastClaimedAt'
            type: 'u64'
          },
          {
            name: 'totalClaimedAmount'
            type: 'u64'
          },
          {
            name: 'totalInterestRewards'
            type: 'u64'
          },
          {
            name: 'createdAt'
            type: 'u64'
          },
          {
            name: 'totalLent'
            type: 'u64'
          },
          {
            name: 'currentInOffer'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'bondOfferV2'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'hadoMarket'
            type: 'publicKey'
          },
          {
            name: 'pairState'
            type: {
              defined: 'PairState'
            }
          },
          {
            name: 'bondingCurve'
            type: {
              defined: 'BondOfferBondingCurve'
            }
          },
          {
            name: 'baseSpotPrice'
            type: 'u64'
          },
          {
            name: 'mathCounter'
            type: 'i64'
          },
          {
            name: 'currentSpotPrice'
            type: 'u64'
          },
          {
            name: 'concentrationIndex'
            type: 'u64'
          },
          {
            name: 'bidCap'
            type: 'u64'
          },
          {
            name: 'bidSettlement'
            type: 'i64'
          },
          {
            name: 'edgeSettlement'
            type: 'u64'
          },
          {
            name: 'fundsSolOrTokenBalance'
            type: 'u64'
          },
          {
            name: 'buyOrdersQuantity'
            type: 'u64'
          },
          {
            name: 'lastTransactedAt'
            type: 'u64'
          },
          {
            name: 'assetReceiver'
            type: 'publicKey'
          },
          {
            name: 'validation'
            type: {
              defined: 'BondOfferValidation'
            }
          },
        ]
      }
    },
    {
      name: 'bondTradeTransactionV2'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bondTradeTransactionState'
            type: {
              defined: 'BondTradeTransactionV2State'
            }
          },
          {
            name: 'bondOffer'
            type: 'publicKey'
          },
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'amountOfBonds'
            type: 'u64'
          },
          {
            name: 'solAmount'
            type: 'u64'
          },
          {
            name: 'feeAmount'
            type: 'u64'
          },
          {
            name: 'bondTradeTransactionType'
            type: {
              defined: 'BondTradeTransactionV2Type'
            }
          },
          {
            name: 'fbondTokenMint'
            type: 'publicKey'
          },
          {
            name: 'soldAt'
            type: 'u64'
          },
          {
            name: 'redeemedAt'
            type: 'u64'
          },
          {
            name: 'redeemResult'
            type: {
              defined: 'RedeemResult'
            }
          },
          {
            name: 'seller'
            type: 'publicKey'
          },
          {
            name: 'isDirectSell'
            type: 'bool'
          },
        ]
      }
    },
    {
      name: 'bondTradeTransactionV3'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bondTradeTransactionState'
            type: {
              defined: 'BondTradeTransactionV2State'
            }
          },
          {
            name: 'bondOffer'
            type: 'publicKey'
          },
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'amountOfBonds'
            type: 'u64'
          },
          {
            name: 'solAmount'
            type: 'u64'
          },
          {
            name: 'feeAmount'
            type: 'u64'
          },
          {
            name: 'bondTradeTransactionType'
            type: {
              defined: 'BondTradeTransactionV2Type'
            }
          },
          {
            name: 'fbondTokenMint'
            type: 'publicKey'
          },
          {
            name: 'soldAt'
            type: 'u64'
          },
          {
            name: 'redeemedAt'
            type: 'u64'
          },
          {
            name: 'redeemResult'
            type: {
              defined: 'RedeemResult'
            }
          },
          {
            name: 'seller'
            type: 'publicKey'
          },
          {
            name: 'isDirectSell'
            type: 'bool'
          },
          {
            name: 'lendingToken'
            type: {
              defined: 'LendingTokenType'
            }
          },
          {
            name: 'currentRemainingLent'
            type: 'u64'
          },
          {
            name: 'interestSnapshot'
            type: 'u64'
          },
          {
            name: 'partialRepaySnapshot'
            type: 'u64'
          },
          {
            name: 'terminationStartedAt'
            type: 'u64'
          },
          {
            name: 'lenderOriginalLent'
            type: 'u64'
          },
          {
            name: 'lenderFullRepaidAmount'
            type: 'u64'
          },
          {
            name: 'borrowerOriginalLent'
            type: 'u64'
          },
          {
            name: 'borrowerFullRepaidAmount'
            type: 'u64'
          },
          {
            name: 'repayDestination'
            type: {
              defined: 'RepayDestination'
            }
          },
          {
            name: 'repaymentCallAmount'
            type: 'u64'
          },
          {
            name: 'terminationFreeze'
            type: 'u64'
          },
          {
            name: 'placeholder3'
            type: 'u64'
          },
          {
            name: 'placeholder4'
            type: 'u64'
          },
          {
            name: 'placeholder5'
            type: 'u64'
          },
          {
            name: 'placeholder6'
            type: 'u64'
          },
          {
            name: 'placeholder7'
            type: 'u64'
          },
          {
            name: 'placeholder8'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'repaymentCall'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'callState'
            type: {
              defined: 'CallState'
            }
          },
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'bond'
            type: 'publicKey'
          },
          {
            name: 'bondTradeTransaction'
            type: 'publicKey'
          },
          {
            name: 'callAmount'
            type: 'u64'
          },
          {
            name: 'lastUpdatedAt'
            type: 'u64'
          },
          {
            name: 'lastCallAt'
            type: 'u64'
          },
          {
            name: 'lastRepaidAt'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'adventureSubscription'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'stake'
            type: 'publicKey'
          },
          {
            name: 'adventure'
            type: 'publicKey'
          },
          {
            name: 'subscribedAt'
            type: 'u64'
          },
          {
            name: 'unsubscribedAt'
            type: 'u64'
          },
          {
            name: 'harvestedAt'
            type: 'u64'
          },
          {
            name: 'amountOfSolHarvested'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'adventure'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'adventureState'
            type: {
              defined: 'AdventureState'
            }
          },
          {
            name: 'periodStartedAt'
            type: 'u64'
          },
          {
            name: 'periodEndingAt'
            type: 'u64'
          },
          {
            name: 'rewardsUpperLimit'
            type: 'u64'
          },
          {
            name: 'rewardsLowerLimit'
            type: 'u64'
          },
          {
            name: 'totalPeriodRevenue'
            type: 'u64'
          },
          {
            name: 'rewardsToBeDistributed'
            type: 'u64'
          },
          {
            name: 'totalBanxSubscribed'
            type: 'u64'
          },
          {
            name: 'totalPartnerPoints'
            type: 'u64'
          },
          {
            name: 'totalPlayerPoints'
            type: 'u64'
          },
          {
            name: 'banxSubscribedLeft'
            type: 'u64'
          },
          {
            name: 'partnerPointsLeft'
            type: 'u64'
          },
          {
            name: 'playerPointsLeft'
            type: 'u64'
          },
          {
            name: 'rewardsLeft'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'banxPointsMap'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'banxMint'
            type: 'publicKey'
          },
          {
            name: 'playerPoints'
            type: 'u64'
          },
          {
            name: 'partnerPoints'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'banxStake'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'banxStakeState'
            type: {
              defined: 'BanxStakeState'
            }
          },
          {
            name: 'adventureSubscriptionsQuantity'
            type: 'u64'
          },
          {
            name: 'nftMint'
            type: 'publicKey'
          },
          {
            name: 'collateralTokenAccount'
            type: 'publicKey'
          },
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'stakedAt'
            type: 'u64'
          },
          {
            name: 'unstakedOrLiquidatedAt'
            type: 'u64'
          },
          {
            name: 'isLoaned'
            type: 'bool'
          },
          {
            name: 'bond'
            type: 'publicKey'
          },
          {
            name: 'playerPoints'
            type: 'u64'
          },
          {
            name: 'partnerPoints'
            type: 'u64'
          },
          {
            name: 'farmedAmount'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'banxUser'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'publicKey'
          },
          {
            name: 'stakedPlayerPoints'
            type: 'u64'
          },
          {
            name: 'stakedPartnerPoints'
            type: 'u64'
          },
          {
            name: 'stakedBanx'
            type: 'u64'
          },
          {
            name: 'totalHarvestedRewards'
            type: 'u64'
          },
          {
            name: 'freeLiquidityCurrent'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'stakingSettings'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'mainVaultBalance'
            type: 'u64'
          },
          {
            name: 'upperRewardsLimit'
            type: 'u64'
          },
          {
            name: 'lowerRewardsLimit'
            type: 'u64'
          },
          {
            name: 'placeholderOne'
            type: 'publicKey'
          },
        ]
      }
    },
  ]
  types: [
    {
      name: 'InitializeHadoMarketParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'minBidCap'
            type: 'u64'
          },
          {
            name: 'minMarketFee'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'BorrowPerpetualParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'minAmountToGet'
            type: 'u64'
          },
          {
            name: 'amountOfSolToGet'
            type: 'u64'
          },
          {
            name: 'bondTradeTransactionBump'
            type: 'u8'
          },
          {
            name: 'fraktBondBump'
            type: 'u8'
          },
          {
            name: 'bondOfferVaultBump'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'MakePerpetualMarketParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'minBidCap'
            type: 'u64'
          },
          {
            name: 'minMarketFee'
            type: 'u64'
          },
          {
            name: 'marketState'
            type: {
              defined: 'MarketState'
            }
          },
        ]
      }
    },
    {
      name: 'SubscribeBanxAdventureParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'week'
            type: 'u64'
          },
          {
            name: 'adventureBump'
            type: 'u8'
          },
          {
            name: 'subscriptionBump'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'BondOfferValidation'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'loanToValueFilter'
            type: 'u64'
          },
          {
            name: 'durationFilter'
            type: 'u64'
          },
          {
            name: 'maxReturnAmountFilter'
            type: 'u64'
          },
          {
            name: 'bondFeatures'
            type: {
              defined: 'BondFeatures'
            }
          },
        ]
      }
    },
    {
      name: 'BondOfferBondingCurve'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'delta'
            type: 'u64'
          },
          {
            name: 'bondingType'
            type: {
              defined: 'BondOfferBondingCurveType'
            }
          },
        ]
      }
    },
    {
      name: 'AuthorizationDataLocal'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'payload'
            type: {
              vec: {
                defined: 'TaggedPayload'
              }
            }
          },
        ]
      }
    },
    {
      name: 'TaggedPayload'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'name'
            type: 'string'
          },
          {
            name: 'payload'
            type: {
              defined: 'PayloadTypeLocal'
            }
          },
        ]
      }
    },
    {
      name: 'SeedsVecLocal'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'seeds'
            docs: ['The vector of derivation seeds.']
            type: {
              vec: 'bytes'
            }
          },
        ]
      }
    },
    {
      name: 'ProofInfoLocal'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'proof'
            docs: ['The merkle proof.']
            type: {
              vec: {
                array: ['u8', 32]
              }
            }
          },
        ]
      }
    },
    {
      name: 'BanxAdventureSubscriptionState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'Active'
          },
          {
            name: 'Claimed'
          },
        ]
      }
    },
    {
      name: 'BanxAdventureState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'Active'
          },
        ]
      }
    },
    {
      name: 'BanxStakingSettingsState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'Active'
          },
        ]
      }
    },
    {
      name: 'BanxTokenStakeState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'Staked'
          },
          {
            name: 'Unstaked'
          },
        ]
      }
    },
    {
      name: 'CollateralBoxType'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Escrow'
          },
          {
            name: 'Escrowless'
          },
        ]
      }
    },
    {
      name: 'FraktBondState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Initialized'
          },
          {
            name: 'Active'
          },
          {
            name: 'Repaid'
          },
          {
            name: 'Liquidating'
          },
          {
            name: 'Liquidated'
          },
          {
            name: 'PerpetualActive'
          },
          {
            name: 'PerpetualRepaid'
          },
          {
            name: 'PerpetualLiquidatedByAuction'
          },
          {
            name: 'PerpetualLiquidatedByClaim'
          },
        ]
      }
    },
    {
      name: 'RoundState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Uninitialized'
          },
          {
            name: 'Initialized'
          },
          {
            name: 'Open'
          },
          {
            name: 'Drawn'
          },
        ]
      }
    },
    {
      name: 'NftValidationWhitelistTypeHado'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Creator'
          },
          {
            name: 'Nft'
          },
          {
            name: 'MerkleTree'
          },
          {
            name: 'CollectionId'
          },
        ]
      }
    },
    {
      name: 'MarketTrustType'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Unverified'
          },
          {
            name: 'Verified'
          },
        ]
      }
    },
    {
      name: 'MarketState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Initializing'
          },
          {
            name: 'Available'
          },
          {
            name: 'InitializingPerpetual'
          },
          {
            name: 'AvailablePerpetual'
          },
          {
            name: 'PrivateAvailablePerpetual'
          },
        ]
      }
    },
    {
      name: 'PairValidationType'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'ClassicValidation'
          },
          {
            name: 'CustomValidation'
          },
        ]
      }
    },
    {
      name: 'PairTokenType'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'NativeSol'
          },
          {
            name: 'Spl'
          },
        ]
      }
    },
    {
      name: 'BanxSolStakingOfferState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Uninitialized'
          },
          {
            name: 'Initialized'
          },
          {
            name: 'Closed'
          },
        ]
      }
    },
    {
      name: 'BondFeatures'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'Autocompound'
          },
          {
            name: 'ReceiveNftOnLiquidation'
          },
          {
            name: 'AutoreceiveSol'
          },
          {
            name: 'AutoCompoundAndReceiveNft'
          },
          {
            name: 'AutoReceiveAndReceiveNft'
          },
        ]
      }
    },
    {
      name: 'PairState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Initializing'
          },
          {
            name: 'OnMarketVirtual'
          },
          {
            name: 'OnMarketTokenized'
          },
          {
            name: 'Frozen'
          },
          {
            name: 'Closed'
          },
          {
            name: 'PerpetualOnMarket'
          },
          {
            name: 'PerpetualClosed'
          },
          {
            name: 'PerpetualBondingCurveOnMarket'
          },
          {
            name: 'PerpetualMigrated'
          },
          {
            name: 'PerpetualBondingCurveClosed'
          },
          {
            name: 'PerpetualListing'
          },
        ]
      }
    },
    {
      name: 'BondOfferBondingCurveType'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Linear'
          },
          {
            name: 'Exponential'
          },
          {
            name: 'LinearUsdc'
          },
          {
            name: 'ExponentialUsdc'
          },
          {
            name: 'LinearBanxSol'
          },
          {
            name: 'ExponentialBanxSol'
          },
        ]
      }
    },
    {
      name: 'BondTradeTransactionV2State'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'NotActive'
          },
          {
            name: 'Active'
          },
          {
            name: 'PerpetualActive'
          },
          {
            name: 'PerpetualRepaid'
          },
          {
            name: 'PerpetualLiquidatedByAuction'
          },
          {
            name: 'PerpetualLiquidatedByClaim'
          },
          {
            name: 'PerpetualManualTerminating'
          },
          {
            name: 'PerpetualPartialRepaid'
          },
          {
            name: 'PerpetualRefinanceRepaid'
          },
          {
            name: 'PerpetualRefinancedActive'
          },
          {
            name: 'Migrated'
          },
          {
            name: 'PerpetualBorrowerListing'
          },
          {
            name: 'PerpetualLenderListing'
          },
        ]
      }
    },
    {
      name: 'BondTradeTransactionV2Type'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'Autocompound'
          },
          {
            name: 'ReceiveNftOnLiquidation'
          },
          {
            name: 'AutoreceiveSol'
          },
          {
            name: 'AutoCompoundAndReceiveNft'
          },
          {
            name: 'AutoReceiveAndReceiveNft'
          },
        ]
      }
    },
    {
      name: 'RedeemResult'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'DirectBorrow'
          },
          {
            name: 'Reborrow'
          },
          {
            name: 'InstantRefinanced'
          },
          {
            name: 'RefinancedByAuction'
          },
          {
            name: 'PartialRepay'
          },
          {
            name: 'DirectRepaid'
          },
          {
            name: 'Claimed'
          },
          {
            name: 'DirectBorrowAndDirectRepaid'
          },
          {
            name: 'DirectBorrowAndReborrowRepaid'
          },
          {
            name: 'DirectBorrowAndInstantRefinancedRepaid'
          },
          {
            name: 'DirectBorrowAndRefinancedByAuctionRepaid'
          },
          {
            name: 'DirectBorrowAndPartialRepaid'
          },
          {
            name: 'DirectBorrowAndClaimed'
          },
          {
            name: 'ReborrowAndDirectRepaid'
          },
          {
            name: 'ReborrowAndReborrowRepaid'
          },
          {
            name: 'ReborrowAndInstantRefinancedRepaid'
          },
          {
            name: 'ReborrowAndRefinancedByAuctionRepaid'
          },
          {
            name: 'ReborrowAndPartialRepaid'
          },
          {
            name: 'ReborrowAndClaimed'
          },
          {
            name: 'InstantRefinancedAndDirectRepaid'
          },
          {
            name: 'InstantRefinancedAndReborrowRepaid'
          },
          {
            name: 'InstantRefinancedAndInstantRefinancedRepaid'
          },
          {
            name: 'InstantRefinancedAndRefinancedByAuctionRepaid'
          },
          {
            name: 'InstantRefinancedAndPartialRepaid'
          },
          {
            name: 'InstantRefinancedAndClaimed'
          },
          {
            name: 'RefinancedByAuctionAndDirectRepaid'
          },
          {
            name: 'RefinancedByAuctionAndReborrowRepaid'
          },
          {
            name: 'RefinancedByAuctionAndInstantRefinancedRepaid'
          },
          {
            name: 'RefinancedByAuctionAndRefinancedByAuctionRepaid'
          },
          {
            name: 'RefinancedByAuctionAndPartialRepaid'
          },
          {
            name: 'RefinancedByAuctionAndClaimed'
          },
          {
            name: 'PartialRepaidAndDirectRepaid'
          },
          {
            name: 'PartialRepaidAndReborrowRepaid'
          },
          {
            name: 'PartialRepaidAndInstantRefinancedRepaid'
          },
          {
            name: 'PartialRepaidAndRefinancedByAuctionRepaid'
          },
          {
            name: 'PartialRepaidAndPartialRepaid'
          },
          {
            name: 'PartialRepaidAndClaimed'
          },
        ]
      }
    },
    {
      name: 'LendingTokenType'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'NativeSol'
          },
          {
            name: 'Usdc'
          },
          {
            name: 'BanxSol'
          },
        ]
      }
    },
    {
      name: 'RepayDestination'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'Offer'
          },
          {
            name: 'Wallet'
          },
          {
            name: 'Vault'
          },
        ]
      }
    },
    {
      name: 'CallState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Uninitialized'
          },
          {
            name: 'Initialized'
          },
        ]
      }
    },
    {
      name: 'AdventureState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Uninitialized'
          },
          {
            name: 'Initialized'
          },
          {
            name: 'DistributingInitialized'
          },
        ]
      }
    },
    {
      name: 'BanxStakeState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Staked'
          },
          {
            name: 'Unstaked'
          },
          {
            name: 'Liquidated'
          },
        ]
      }
    },
    {
      name: 'PayloadTypeLocal'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Pubkey'
            fields: ['publicKey']
          },
          {
            name: 'Seeds'
            fields: [
              {
                defined: 'SeedsVecLocal'
              },
            ]
          },
          {
            name: 'MerkleProof'
            fields: [
              {
                defined: 'ProofInfoLocal'
              },
            ]
          },
          {
            name: 'Number'
            fields: ['u64']
          },
        ]
      }
    },
  ]
  errors: [
    {
      code: 6000
      name: 'MetadataDoesntExist'
      msg: 'MetadataDoesntExist'
    },
    {
      code: 6001
      name: 'DerivedKeyInvalid'
      msg: 'DerivedKeyInvalid'
    },
    {
      code: 6002
      name: 'InvalidCollectionDetails'
      msg: 'InvalidCollectionDetails'
    },
    {
      code: 6003
      name: 'InvalidCollection'
      msg: 'InvalidCollection'
    },
    {
      code: 6004
      name: 'InvalidCollectionMint'
      msg: 'InvalidCollectionMint'
    },
    {
      code: 6005
      name: 'NftNotVerified'
      msg: 'NftNotVerified'
    },
    {
      code: 6006
      name: 'InvalidOwner'
      msg: 'InvalidOwner'
    },
    {
      code: 6007
      name: 'InvalidDelta'
      msg: 'InvalidDelta'
    },
    {
      code: 6008
      name: 'InvalidFee'
      msg: 'InvalidFee'
    },
    {
      code: 6009
      name: 'InvalidPairType'
      msg: 'InvalidPairType'
    },
    {
      code: 6010
      name: 'NotEnoughInTokenAccount'
      msg: 'NotEnoughInTokenAccount'
    },
    {
      code: 6011
      name: 'InvalidMint'
      msg: 'InvalidMint'
    },
    {
      code: 6012
      name: 'InvalidSolVault'
      msg: 'InvalidSolVault'
    },
    {
      code: 6013
      name: 'InvalidFundingAmount'
      msg: 'InvalidFundingAmount'
    },
    {
      code: 6014
      name: 'NotEnoughLamports'
      msg: 'NotEnoughLamports'
    },
    {
      code: 6015
      name: 'InvalidJpegOwner'
      msg: 'InvalidJpegOwner'
    },
    {
      code: 6016
      name: 'InvalidTokenAccount'
      msg: 'InvalidTokenAccount'
    },
    {
      code: 6017
      name: 'InvalidPayer'
      msg: 'InvalidPayer'
    },
    {
      code: 6018
      name: 'ShouldBeActive'
      msg: 'ShouldBeActive'
    },
    {
      code: 6019
      name: 'CantMakeZeroOrders'
      msg: "Can't make 0 orders"
    },
    {
      code: 6020
      name: 'OnlyClassicAuthority'
      msg: 'OnlyClassicAuthority'
    },
    {
      code: 6021
      name: 'NotValidAuthorityAdapter'
      msg: 'NotValidAuthorityAdapter'
    },
    {
      code: 6022
      name: 'UserDoesntHaveAuthority'
      msg: 'UserDoesntHaveAuthority'
    },
    {
      code: 6023
      name: 'WrongSeed'
      msg: 'WrongSeed'
    },
    {
      code: 6024
      name: 'CanDepositSolOnlyToTokenToNft'
      msg: 'CanDepositSolOnlyToTokenToNft'
    },
    {
      code: 6025
      name: 'MaxAmountOfOrdersSucceeded'
      msg: 'MaxAmountOfOrdersSucceeded'
    },
    {
      code: 6026
      name: 'CanDepositNftOnlyToNftToToken'
      msg: 'CanDepositNftOnlyToNftToToken'
    },
    {
      code: 6027
      name: 'TokenAccountDoesntContainNft'
      msg: 'TokenAccountDoesntContainNft'
    },
    {
      code: 6028
      name: 'MarketAuthorityIncorrect'
      msg: 'MarketAuthorityIncorrect'
    },
    {
      code: 6029
      name: 'CanAddWhitelistOnlyToInitializingMarket'
      msg: 'CanAddWhitelistOnlyToInitializingMarket'
    },
    {
      code: 6030
      name: 'CanPutPairsOnlyToAvailableMarkets'
      msg: 'CanPutPairsOnlyToAvailableMarkets'
    },
    {
      code: 6031
      name: 'PairAndNftValidationMarketDoesntMatch'
      msg: 'PairAndNftValidationMarketDoesntMatch'
    },
    {
      code: 6032
      name: 'OnlyMarketScopeSupported'
      msg: 'OnlyMarketScopeSupported'
    },
    {
      code: 6033
      name: 'NotWhitelistedNftForThisMarket'
      msg: 'NotWhitelistedNftForThisMarket'
    },
    {
      code: 6034
      name: 'CanDepositOnlyToLiquidityProvision'
      msg: 'CanDepositOnlyToLiquidityProvision'
    },
    {
      code: 6035
      name: 'NftBoxDoesntMatchPair'
      msg: 'NftBoxDoesntMatchPair'
    },
    {
      code: 6036
      name: 'NftBoxShouldBeActive'
      msg: 'NftBoxShouldBeActive'
    },
    {
      code: 6037
      name: 'NftBoxDoesntMatchMint'
      msg: 'NftBoxDoesntMatchMint'
    },
    {
      code: 6038
      name: 'CantBuyNftFromTokenForNft'
      msg: 'CantBuyNftFromTokenForNft'
    },
    {
      code: 6039
      name: 'OnlyTokenForNftIsEligibleForThisSell'
      msg: 'OnlyTokenForNftIsEligibleForThisSell'
    },
    {
      code: 6040
      name: 'NoBuyOrdersOnThisPair'
      msg: 'NoBuyOrdersOnThisPair'
    },
    {
      code: 6041
      name: 'OnlyLiquidityProvisionIsEligibleForThisSell'
      msg: 'OnlyLiquidityProvisionIsEligibleForThisSell'
    },
    {
      code: 6042
      name: 'OnlyTokenForNftIsEligibleForThisWithdrawal'
      msg: 'OnlyTokenForNftIsEligibleForThisWithdrawal'
    },
    {
      code: 6043
      name: 'OnlyNftForTokenIsEligibleForThisWithdrawal'
      msg: 'OnlyNftForTokenIsEligibleForThisWithdrawal'
    },
    {
      code: 6044
      name: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal'
      msg: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal'
    },
    {
      code: 6045
      name: 'InstructionIsNotSupported'
      msg: 'InstructionIsNotSupported'
    },
    {
      code: 6046
      name: 'CanTradeOnlyWithPairsOnMarket'
      msg: 'CanTradeOnlyWithPairsOnMarket'
    },
    {
      code: 6047
      name: 'NoLiquidityFeesToWithdraw'
      msg: 'NoLiquidityFeesToWithdraw'
    },
    {
      code: 6048
      name: 'MaxAmountToPayExceeded'
      msg: 'MaxAmountToPayExceeded'
    },
    {
      code: 6049
      name: 'GettingLessThanMinAmountToGet'
      msg: 'GettingLessThanMinAmountToGet'
    },
    {
      code: 6050
      name: 'UserDoesntHaveHadomarketAuthority'
      msg: 'UserDoesntHaveHadomarketAuthority'
    },
    {
      code: 6051
      name: 'HadomarketAlreadyFinished'
      msg: 'HadomarketAlreadyFinished'
    },
    {
      code: 6052
      name: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs'
      msg: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs'
    },
    {
      code: 6053
      name: 'CanModifyOnlyToVirtualOrInitializingPairs'
      msg: 'CanModifyOnlyToVirtualOrInitializingPairs'
    },
    {
      code: 6054
      name: 'LiquidityProvisionOrderPairDoesntMatch'
      msg: 'LiquidityProvisionOrderPairDoesntMatch'
    },
    {
      code: 6055
      name: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction'
      msg: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction'
    },
    {
      code: 6056
      name: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction'
      msg: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction'
    },
    {
      code: 6057
      name: 'LiquidityProvisionOrderNotEdge'
      msg: 'LiquidityProvisionOrderNotEdge'
    },
    {
      code: 6058
      name: 'NftPairBoxNotParsingFromRemaining'
      msg: 'NftPairBoxNotParsingFromRemaining'
    },
    {
      code: 6059
      name: 'VaultNftTokenAccountNotParsingFromRemaining'
      msg: 'VaultNftTokenAccountNotParsingFromRemaining'
    },
    {
      code: 6060
      name: 'UserTokenAccountNotParsingFromRemaining'
      msg: 'UserTokenAccountNotParsingFromRemaining'
    },
    {
      code: 6061
      name: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs'
      msg: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs'
    },
    {
      code: 6062
      name: 'VaultDoesntMatchBox'
      msg: 'VaultDoesntMatchBox'
    },
    {
      code: 6063
      name: 'WithdrawingOnlyBuyOrdersPairs'
      msg: 'WithdrawingOnlyBuyOrdersPairs'
    },
    {
      code: 6064
      name: 'WithdrawingOnlySellOrdersPairs'
      msg: 'WithdrawingOnlySellOrdersPairs'
    },
    {
      code: 6065
      name: 'LiquidityProvisionOrderIsWithdrawn'
      msg: 'LiquidityProvisionOrderIsWithdrawn'
    },
    {
      code: 6066
      name: 'LiquidityProvisionOrderIsNotCorrectOrderForPair'
      msg: 'LiquidityProvisionOrderIsNotCorrectOrderForPair'
    },
    {
      code: 6067
      name: 'OnlyMarketVirtualPairsCanBeTokenized'
      msg: 'OnlyMarketVirtualPairsCanBeTokenized'
    },
    {
      code: 6068
      name: 'OnlyLiquidityProvisionPairsCanBeTokenized'
      msg: 'OnlyLiquidityProvisionPairsCanBeTokenized'
    },
    {
      code: 6069
      name: 'OnlyInitializingPairsCanBePutOnMarket'
      msg: 'OnlyInitializingPairsCanBePutOnMarket'
    },
    {
      code: 6070
      name: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair'
      msg: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair'
    },
    {
      code: 6071
      name: 'OnlyVirtualLpOrderCanBeTokenized'
      msg: 'OnlyVirtualLpOrderCanBeTokenized'
    },
    {
      code: 6072
      name: 'OnlyTokenizedLpOrdersCanWithdrawFees'
      msg: 'OnlyTokenizedLpOrdersCanWithdrawFees'
    },
    {
      code: 6073
      name: 'UserLpTokenAccountDoesntContainNft'
      msg: 'UserLpTokenAccountDoesntContainNft'
    },
    {
      code: 6074
      name: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction'
      msg: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction'
    },
    {
      code: 6075
      name: 'LpTokenMintDoesntMatchOrder'
      msg: 'LpTokenMintDoesntMatchOrder'
    },
    {
      code: 6076
      name: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft'
      msg: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft'
    },
    {
      code: 6077
      name: 'CantSetBidCapSmallerThanMarketMinimum'
      msg: 'CantSetBidCapSmallerThanMarketMinimum'
    },
    {
      code: 6078
      name: 'CantDepositNftWithNotMarketDecimals'
      msg: 'CantDepositNftWithNotMarketDecimals'
    },
    {
      code: 6079
      name: 'FndAmountCantExceedBidCap'
      msg: 'FndAmountCantExceedBidCap'
    },
    {
      code: 6080
      name: 'CantBuyMoreThatRemainingBidSettlement'
      msg: 'CantBuyMoreThatRemainingBidSettlement'
    },
    {
      code: 6081
      name: 'CantBuyMoreThanActiveTokensAmount'
      msg: 'CantBuyMoreThanActiveTokensAmount'
    },
    {
      code: 6082
      name: 'CantSellMoreThanActiveTokensAmount'
      msg: 'CantSellMoreThanActiveTokensAmount'
    },
    {
      code: 6083
      name: 'CantDepositMoreThanBidCap'
      msg: 'CantDepositMoreThanBidCap'
    },
    {
      code: 6084
      name: 'CantDepositZero'
      msg: 'CantDepositZero'
    },
    {
      code: 6085
      name: 'CantWithdrawMoreThanBidCap'
      msg: 'CantWithdrawMoreThanBidCap'
    },
    {
      code: 6086
      name: 'CantWithdrawZero'
      msg: 'CantWithdrawZero'
    },
    {
      code: 6087
      name: 'CantWithdrawMoreThanNftBoxActiveTokens'
      msg: 'CantWithdrawMoreThanNftBoxActiveTokens'
    },
    {
      code: 6088
      name: 'CantSetReturnAmountLessThanMinimum'
      msg: 'CantSetReturnAmountLessThanMinimum'
    },
    {
      code: 6089
      name: 'CantSetBondDurationNotStandart'
      msg: 'CantSetBondDurationNotStandart'
    },
    {
      code: 6090
      name: 'CanAddCollateralOnlyToInitializedFBond'
      msg: 'CanAddCollateralOnlyToInitializedFBond'
    },
    {
      code: 6091
      name: 'OnlyIssuerCanAddCollateralBox'
      msg: 'OnlyIssuerCanAddCollateralBox'
    },
    {
      code: 6092
      name: 'FBondTokenMintDoesntMatch'
      msg: 'FBondTokenMintDoesntMatch'
    },
    {
      code: 6093
      name: 'CanActivateOnlyInitializedBond'
      msg: 'CanActivateOnlyInitializedBond'
    },
    {
      code: 6094
      name: 'BondAuthorityIssuerDoesntMatch'
      msg: 'BondAuthorityIssuerDoesntMatch'
    },
    {
      code: 6095
      name: 'CanRepayOnlyActivatedBond'
      msg: 'CanRepayOnlyActivatedBond'
    },
    {
      code: 6096
      name: 'CanRedeemOnlyRepaidFBond'
      msg: 'CanRedeemOnlyRepaidFBond'
    },
    {
      code: 6097
      name: 'CantSetNotRoundedAmountToReturn'
      msg: 'CantSetNotRoundedAmountToReturn'
    },
    {
      code: 6098
      name: 'CanGetOnlyRepaidCollateral'
      msg: 'CanGetOnlyRepaidCollateral'
    },
    {
      code: 6099
      name: 'CollateralTokenMintDoesntMatchBox'
      msg: 'CollateralTokenMintDoesntMatchBox'
    },
    {
      code: 6100
      name: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation'
      msg: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation'
    },
    {
      code: 6101
      name: 'WrongAdmin'
      msg: 'WrongAdmin'
    },
    {
      code: 6102
      name: 'CanBurnEntireSupplyOnlyForActiveBond'
      msg: 'CanBurnEntireSupplyOnlyForActiveBond'
    },
    {
      code: 6103
      name: 'UserDoesntOwnAllSupply'
      msg: 'UserDoesntOwnAllSupply'
    },
    {
      code: 6104
      name: 'WrongAllSupplyBurner'
      msg: 'WrongAllSupplyBurner'
    },
    {
      code: 6105
      name: 'LoanToValueFilterOutOfBound'
      msg: 'LoanToValueFilterOutOfBound'
    },
    {
      code: 6106
      name: 'ValidationDoesntMatchPair'
      msg: 'ValidationDoesntMatchPair'
    },
    {
      code: 6107
      name: 'CollateralBoxDoesntBelongFbond'
      msg: 'CollateralBoxDoesntBelongFbond'
    },
    {
      code: 6108
      name: 'FraktMarketDoesntMatchHadoMarketRegistry'
      msg: 'FraktMarketDoesntMatchHadoMarketRegistry'
    },
    {
      code: 6109
      name: 'FraktMarketNotActive'
      msg: 'FraktMarketNotActive'
    },
    {
      code: 6110
      name: 'OracleFloorDoesntMatchFraktMarket'
      msg: 'OracleFloorDoesntMatchFraktMarket'
    },
    {
      code: 6111
      name: 'FraktMarketDoesntMatchWhitelistEntry'
      msg: 'FraktMarketDoesntMatchWhitelistEntry'
    },
    {
      code: 6112
      name: 'ActualLoanToValueExceedsFilter'
      msg: 'ActualLoanToValueExceedsFilter'
    },
    {
      code: 6113
      name: 'PairDoesntMatchHadomarket'
      msg: 'PairDoesntMatchHadomarket'
    },
    {
      code: 6114
      name: 'ActualLoanDurationExceedsFilter'
      msg: 'ActualLoanDurationExceedsFilter'
    },
    {
      code: 6115
      name: 'NftIsNotMasterEdition'
      msg: 'NftIsNotMasterEdition'
    },
    {
      code: 6116
      name: 'NftValidationAdapterIsExpired'
      msg: 'NftValidationAdapterIsExpired'
    },
    {
      code: 6117
      name: 'CustomValidationAdapterProgramDoesntMatchUser'
      msg: 'CustomValidationAdapterProgramDoesntMatchUser'
    },
    {
      code: 6118
      name: 'OnlyAdminCanInitializeFlashLoanPool'
      msg: 'OnlyAdminCanInitializeFlashLoanPool'
    },
    {
      code: 6119
      name: 'CantSetLoanFeePointsGreaterThanBasePoints'
      msg: 'CantSetLoanFeePointsGreaterThanBasePoints'
    },
    {
      code: 6120
      name: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity'
      msg: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity'
    },
    {
      code: 6121
      name: 'CantWithdrawMoreThanPoolBalance'
      msg: 'CantWithdrawMoreThanPoolBalance'
    },
    {
      code: 6122
      name: 'CantBorrowAndRepayByCpi'
      msg: 'CantBorrowAndRepayByCpi'
    },
    {
      code: 6123
      name: 'RepayAmountDoesntCorrespondBorrowAmount'
      msg: 'RepayAmountDoesntCorrespondBorrowAmount'
    },
    {
      code: 6124
      name: 'TransactionDoesntContainRepayInstruction'
      msg: 'TransactionDoesntContainRepayInstruction'
    },
    {
      code: 6125
      name: 'AlreadyBorrowing'
      msg: 'AlreadyBorrowing'
    },
    {
      code: 6126
      name: 'WrongHadeswapProgramId'
      msg: 'WrongHadeswapProgramId'
    },
    {
      code: 6127
      name: 'AmountToReturnIsHigherThanMax'
      msg: 'AmountToReturnIsHigherThanMax'
    },
    {
      code: 6128
      name: 'AutocompoundNotSupportedYet'
      msg: 'AutocompoundNotSupportedYet'
    },
    {
      code: 6129
      name: 'AutocompoundDepositIsNotActive'
      msg: 'AutocompoundDepositIsNotActive'
    },
    {
      code: 6130
      name: 'AutocompoundDepositDoesntMatchPair'
      msg: 'AutocompoundDepositDoesntMatchPair'
    },
    {
      code: 6131
      name: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair'
      msg: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair'
    },
    {
      code: 6132
      name: 'InvalidAssetReceiverTokenAccount'
      msg: 'InvalidAssetReceiverTokenAccount'
    },
    {
      code: 6133
      name: 'AutoreceiveSolToUserFeatureNotEnabled'
      msg: 'AutoreceiveSolToUserFeatureNotEnabled'
    },
    {
      code: 6134
      name: 'AutocompoundFeatureNotEnabled'
      msg: 'AutocompoundFeatureNotEnabled'
    },
    {
      code: 6135
      name: 'InvalidAssetReceiver'
      msg: 'InvalidAssetReceiver'
    },
    {
      code: 6136
      name: 'BondCollateralOrSolReceiverNotUser'
      msg: 'BondCollateralOrSolReceiverNotUser'
    },
    {
      code: 6137
      name: 'OnlyBuyPairsAreSupported'
      msg: 'OnlyBuyPairsAreSupported'
    },
    {
      code: 6138
      name: 'CanModifyOnlyTokenForNftPairs'
      msg: 'CanModifyOnlyTokenForNftPairs'
    },
    {
      code: 6139
      name: 'OraclePriceIsStale'
      msg: 'OraclePriceIsStale'
    },
    {
      code: 6140
      name: 'NftLiquidationTimeNotPassed'
      msg: 'NftLiquidationTimeNotPassed'
    },
    {
      code: 6141
      name: 'CanDepositReturnedSolOnlyToLiquidatingBond'
      msg: 'CanDepositReturnedSolOnlyToLiquidatingBond'
    },
    {
      code: 6142
      name: 'Debugger'
      msg: 'Debugger'
    },
    {
      code: 6143
      name: 'NotSupportedSellCase'
      msg: 'NotSupportedSellCase'
    },
    {
      code: 6144
      name: 'CollateralTokenMintDoesntMatchAutocompoundDeposit'
      msg: 'CollateralTokenMintDoesntMatchAutocompoundDeposit'
    },
    {
      code: 6145
      name: 'NotCorrectAutocompoundType'
      msg: 'NotCorrectAutocompoundType'
    },
    {
      code: 6146
      name: 'BadRuleSet'
      msg: 'BadRuleSet'
    },
    {
      code: 6147
      name: 'DelegateBuilderFailed'
      msg: 'DelegateBuilderFailed'
    },
    {
      code: 6148
      name: 'LockBuilderFailed'
      msg: 'LockBuilderFailed'
    },
    {
      code: 6149
      name: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed'
      msg: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed'
    },
    {
      code: 6150
      name: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit'
      msg: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit'
    },
    {
      code: 6151
      name: 'CollateralOwnerDoesntMatchCollateralTokenAccount'
      msg: 'CollateralOwnerDoesntMatchCollateralTokenAccount'
    },
    {
      code: 6152
      name: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver'
      msg: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver'
    },
    {
      code: 6153
      name: 'MerkleTreeIsNotSupported'
      msg: 'MerkleTreeIsNotSupported'
    },
    {
      code: 6154
      name: 'UserDoesntHaveEnoughBalance'
      msg: 'UserDoesntHaveEnoughBalance'
    },
    {
      code: 6155
      name: 'CantSellToBuggedNegativeInterestPair'
      msg: 'CantSellToBuggedNegativeInterestPair'
    },
    {
      code: 6156
      name: 'ThisCollectionIsDisabled'
      msg: 'ThisCollectionIsDisabled'
    },
    {
      code: 6157
      name: 'InvalidMutualBondOfferDepositVault'
      msg: 'InvalidMutualBondOfferDepositVault'
    },
    {
      code: 6158
      name: 'OnlyBondOfferDepositsAndFullBondAreSupported'
      msg: 'OnlyBondOfferDepositsAndFullBondAreSupported'
    },
    {
      code: 6159
      name: 'MerkleTreeWhitelistIsNotSupported'
      msg: 'MerkleTreeWhitelistIsNotSupported'
    },
    {
      code: 6160
      name: 'CantSellZero'
      msg: 'CantSellZero'
    },
    {
      code: 6161
      name: 'BondOfferHadoMarketDoesntMatch'
      msg: 'BondOfferHadoMarketDoesntMatch'
    },
    {
      code: 6162
      name: 'FundsSolVaultPdaIsIncorrect'
      msg: 'FundsSolVaultPdaIsIncorrect'
    },
    {
      code: 6163
      name: 'BondOfferVaultPdaIsIncorrect'
      msg: 'BondOfferVaultPdaIsIncorrect'
    },
    {
      code: 6164
      name: 'BondTradeTransactionV3PdaIsIncorrect'
      msg: 'BondTradeTransactionV3PdaIsIncorrect'
    },
    {
      code: 6165
      name: 'BondBalancesBeforeAndAfterInstructionDontMatch'
      msg: 'BondBalancesBeforeAndAfterInstructionDontMatch'
    },
    {
      code: 6166
      name: 'NotAuthorizedToRemoveBondOffer'
      msg: 'NotAuthorizedToRemoveBondOffer'
    },
    {
      code: 6167
      name: 'CantUpdateRemovedBondOffer'
      msg: 'CantUpdateRemovedBondOffer'
    },
    {
      code: 6168
      name: 'BondTradeTransactionNotActive'
      msg: 'BondTradeTransactionNotActive'
    },
    {
      code: 6169
      name: 'BondOfferDoesntMatchTradeTransaction'
      msg: 'BondOfferDoesntMatchTradeTransaction'
    },
    {
      code: 6170
      name: 'ReceiveNftIsNotOption'
      msg: 'ReceiveNftIsNotOption'
    },
    {
      code: 6171
      name: 'CanLiquidateOnlyActiveBond'
      msg: 'CanLiquidateOnlyActiveBond'
    },
    {
      code: 6172
      name: 'CollateralBoxDoesntMatchFbond'
      msg: 'CollateralBoxDoesntMatchFbond'
    },
    {
      code: 6173
      name: 'AutocompoundPairShouldBeOnMarketVirtual'
      msg: 'AutocompoundPairShouldBeOnMarketVirtual'
    },
    {
      code: 6174
      name: 'UserDoesntOwnHisBondTradeTransaction'
      msg: 'UserDoesntOwnHisBondTradeTransaction'
    },
    {
      code: 6175
      name: 'UsersBondTradeTransactionHasIncorrectFbondTokenMint'
      msg: 'UsersBondTradeTransactionHasIncorrectFbondTokenMint'
    },
    {
      code: 6176
      name: 'UsersBondTradeTransactionIsInactive'
      msg: 'UsersBondTradeTransactionIsInactive'
    },
    {
      code: 6177
      name: 'SumOfBondsInExitingTradeTransactionsDoesntMatchTotalAmountToSell'
      msg: 'SumOfBondsInExitingTradeTransactionsDoesntMatchTotalAmountToSell'
    },
    {
      code: 6178
      name: 'CantSellNotFullBondsSupplyOnRefinance'
      msg: 'CantSellNotFullBondsSupplyOnRefinance'
    },
    {
      code: 6179
      name: 'OnlyAdminCanMigrate'
      msg: 'OnlyAdminCanMigrate'
    },
    {
      code: 6180
      name: 'BondFeaturesNoneAndReceiveNftOnLiquidationAreNotSupported'
      msg: 'BondFeaturesNoneAndReceiveNftOnLiquidationAreNotSupported'
    },
    {
      code: 6181
      name: 'SomethingWrongWithMigrationBondOfferIsMissing'
      msg: 'SomethingWrongWithMigrationBondOfferIsMissing'
    },
    {
      code: 6182
      name: 'SecondAddressIsNotUserOrBondOffer'
      msg: 'SecondAddressIsNotUserOrBondOffer'
    },
    {
      code: 6183
      name: 'SumOfBondsInRepayDoesntMatchBondsSupply'
      msg: 'SumOfBondsInRepayDoesntMatchBondsSupply'
    },
    {
      code: 6184
      name: 'CantBuyoutForLowerThanMinimumPrice'
      msg: 'CantBuyoutForLowerThanMinimumPrice'
    },
    {
      code: 6185
      name: 'CantBuyoutNftOnDutchAuctionWhenThereAreOnlyOneLender'
      msg: 'CantBuyoutNftOnDutchAuctionWhenThereAreOnlyOneLender'
    },
    {
      code: 6186
      name: 'ThereAreMoreThanOneLenderOfThisBond'
      msg: 'ThereAreMoreThanOneLenderOfThisBond'
    },
    {
      code: 6187
      name: 'TradeTransactionDoesntMatchBond'
      msg: 'TradeTransactionDoesntMatchBond'
    },
    {
      code: 6188
      name: 'CantLiquidatePerpetualBonds'
      msg: 'CantLiquidatePerpetualBonds'
    },
    {
      code: 6189
      name: 'CantRepayExpiredReceivingCollateralLoan'
      msg: 'CantRepayExpiredReceivingCollateralLoan'
    },
    {
      code: 6190
      name: 'DisabledPairsWithMoreThanOneOrder'
      msg: 'DisabledPairsWithMoreThanOneOrder'
    },
    {
      code: 6191
      name: 'CollectionIsDisabled'
      msg: 'CollectionIsDisabled'
    },
    {
      code: 6192
      name: 'ShouldBeEscrow'
      msg: 'ShouldBeEscrow'
    },
    {
      code: 6193
      name: 'EscrowLoansNotSupported'
      msg: 'EscrowLoansNotSupported'
    },
    {
      code: 6194
      name: 'OnlyBanxIsSupportedForStaking'
      msg: 'OnlyBanxIsSupportedForStaking'
    },
    {
      code: 6195
      name: 'UserDoesntOwnStake'
      msg: 'UserDoesntOwnStake'
    },
    {
      code: 6196
      name: 'BanxIsNotStaked'
      msg: 'BanxIsNotStaked'
    },
    {
      code: 6197
      name: 'CantUnstakeLoanedBanx'
      msg: 'CantUnstakeLoanedBanx'
    },
    {
      code: 6198
      name: 'WrongCollateralTokenAccount'
      msg: 'WrongCollateralTokenAccount'
    },
    {
      code: 6199
      name: 'WrongNftMint'
      msg: 'WrongNftMint'
    },
    {
      code: 6200
      name: 'CantUnstakeWithActiveSubscriptions'
      msg: 'CantUnstakeWithActiveSubscriptions'
    },
    {
      code: 6201
      name: 'AdventureDoesntLayOnCurve'
      msg: 'AdventureDoesntLayOnCurve'
    },
    {
      code: 6202
      name: 'CantSubscribeToPassedWeek'
      msg: 'CantSubscribeToPassedWeek'
    },
    {
      code: 6203
      name: 'CantHaveMoreThanThreeSubscriptions'
      msg: 'CantHaveMoreThanThreeSubscriptions'
    },
    {
      code: 6204
      name: 'CantSubscribeMoreThanThreeWeeksAhead'
      msg: 'CantSubscribeMoreThanThreeWeeksAhead'
    },
    {
      code: 6205
      name: 'CantUnsubscribeFromPassedAdventureNeedToHarvest'
      msg: 'CantUnsubscribeFromPassedAdventureNeedToHarvest'
    },
    {
      code: 6206
      name: 'AlreadyUnsubscribedOrHarvested'
      msg: 'AlreadyUnsubscribedOrHarvested'
    },
    {
      code: 6207
      name: 'CantHarvestNotEndedAdventures'
      msg: 'CantHarvestNotEndedAdventures'
    },
    {
      code: 6208
      name: 'SubscriptionDoesntMatchAdventure'
      msg: 'SubscriptionDoesntMatchAdventure'
    },
    {
      code: 6209
      name: 'RefinanceAuctionNotStartedYet'
      msg: 'RefinanceAuctionNotStartedYet'
    },
    {
      code: 6210
      name: 'AdventureSubscriptionPdaIsIncorrect'
      msg: 'AdventureSubscriptionPdaIsIncorrect'
    },
    {
      code: 6211
      name: 'BanxIsAlreadyLoaned'
      msg: 'BanxIsAlreadyLoaned'
    },
    {
      code: 6212
      name: 'CantStandartRepayStakedBanx'
      msg: 'CantStandartRepayStakedBanx'
    },
    {
      code: 6213
      name: 'StakeDoesntBelongToBond'
      msg: 'StakeDoesntBelongToBond'
    },
    {
      code: 6214
      name: 'FirstAdventureNotFound'
      msg: 'FirstAdventureNotFound'
    },
    {
      code: 6215
      name: 'BanxUserIsntFbondIssuer'
      msg: 'BanxUserIsntFbondIssuer'
    },
    {
      code: 6216
      name: 'ConstantBidCapExceeded'
      msg: 'ConstantBidCapExceeded'
    },
    {
      code: 6217
      name: 'TotalLoanValueIsMoreThanMaxOfferValue'
      msg: 'TotalLoanValueIsMoreThanMaxOfferValue'
    },
    {
      code: 6218
      name: 'NeedToRepayAllTradeTransactions'
      msg: 'NeedToRepayAllTradeTransactions'
    },
    {
      code: 6219
      name: 'SubscriptionDoesntBelongToStake'
      msg: 'SubscriptionDoesntBelongToStake'
    },
    {
      code: 6220
      name: 'OnlyMerkleTreeWhitelistTypeAllowedForCnft'
      msg: 'OnlyMerkleTreeWhitelistTypeAllowedForCnft'
    },
    {
      code: 6221
      name: 'BanxIsNotCnft'
      msg: 'BanxIsNotCnft'
    },
    {
      code: 6222
      name: 'OnlyPerpetualMarketsAreSupported'
      msg: 'OnlyPerpetualMarketsAreSupported'
    },
    {
      code: 6223
      name: 'UserDoesntOwnHadomarket'
      msg: 'UserDoesntOwnHadomarket'
    },
    {
      code: 6224
      name: 'TokenAccountDoentMatchUserOrToken'
      msg: 'TokenAccountDoentMatchUserOrToken'
    },
    {
      code: 6225
      name: 'FraktBondPdaIsIncorrect'
      msg: 'FraktBondPdaIsIncorrect'
    },
    {
      code: 6226
      name: 'FinishAllGood'
      msg: 'FinishAllGood'
    },
    {
      code: 6227
      name: 'UserDoesntOwnLiquidatedBond'
      msg: 'UserDoesntOwnLiquidatedBond'
    },
    {
      code: 6228
      name: 'BondTradeTransactionIsNotTerminating'
      msg: 'BondTradeTransactionIsNotTerminating'
    },
    {
      code: 6229
      name: 'LoanIsNotLiquidatedYet'
      msg: 'LoanIsNotLiquidatedYet'
    },
    {
      code: 6230
      name: 'TokenMintDoesntBelongBond'
      msg: 'TokenMintDoesntBelongBond'
    },
    {
      code: 6231
      name: 'LoanIsAlreadyTerminated'
      msg: 'LoanIsAlreadyTerminated'
    },
    {
      code: 6232
      name: 'LenderDoesntMatchTradeTxn'
      msg: 'LenderDoesntMatchTradeTxn'
    },
    {
      code: 6233
      name: 'CanRefinanceOnlyActiveLoan'
      msg: 'CanRefinanceOnlyActiveLoan'
    },
    {
      code: 6234
      name: 'HadoMarketDoesntMatchBond'
      msg: 'HadoMarketDoesntMatchBond'
    },
    {
      code: 6235
      name: 'BondOfferDoesntMatchHadoMarket'
      msg: 'BondOfferDoesntMatchHadoMarket'
    },
    {
      code: 6236
      name: 'LoanIsNotActive'
      msg: 'LoanIsNotActive'
    },
    {
      code: 6237
      name: 'CantBorrowZero'
      msg: 'CantBorrowZero'
    },
    {
      code: 6238
      name: 'LoanIsAlreadyLiquidated'
      msg: 'LoanIsAlreadyLiquidated'
    },
    {
      code: 6239
      name: 'RepayFractionIsIncorrect'
      msg: "Can't repay partial 0 or 100%+"
    },
    {
      code: 6240
      name: 'WrongStakedBanxHadoMarket'
      msg: 'WrongStakedBanxHadoMarket'
    },
    {
      code: 6241
      name: 'StakedBanxHadoMarket'
      msg: 'StakedBanxHadoMarket'
    },
    {
      code: 6242
      name: 'Not63PointsBanx'
      msg: 'Not63PointsBanx'
    },
    {
      code: 6243
      name: 'BanxStakeDoesntMatchBond'
      msg: 'BanxStakeDoesntMatchBond'
    },
    {
      code: 6244
      name: 'BondOfferShouldBeBondingCurve'
      msg: 'BondOfferShouldBeBondingCurve'
    },
    {
      code: 6245
      name: 'BondOfferShouldBePerpetualOffer'
      msg: 'BondOfferShouldBePerpetualOffer'
    },
    {
      code: 6246
      name: 'ProtocolFeeReceiverIsIncorrect'
      msg: 'ProtocolFeeReceiverIsIncorrect'
    },
    {
      code: 6247
      name: 'RoundIsNotOpen'
      msg: 'RoundIsNotOpen'
    },
    {
      code: 6248
      name: 'RoundIsOpen'
      msg: 'RoundIsOpen'
    },
    {
      code: 6249
      name: 'LessThenMinDeposit'
      msg: 'LessThenMinDeposit'
    },
    {
      code: 6250
      name: 'LastRoundIsOpen'
      msg: 'LastRoundIsOpen'
    },
    {
      code: 6251
      name: 'RoundPdaIsIncorrect'
      msg: 'RoundPdaIsIncorrect'
    },
    {
      code: 6252
      name: 'WrongRoundNumber'
      msg: 'WrongRoundNumber'
    },
    {
      code: 6253
      name: 'UserIsNotWinner'
      msg: 'UserIsNotWinner'
    },
    {
      code: 6254
      name: 'RewardsAlreadyClaimed'
      msg: 'RewardsAlreadyClaimed'
    },
    {
      code: 6255
      name: 'AddressMismatch'
      msg: 'Address Mismatch'
    },
    {
      code: 6256
      name: 'ProgramMismatch'
      msg: 'Program Mismatch'
    },
    {
      code: 6257
      name: 'MissingRepay'
      msg: 'Missing Repay'
    },
    {
      code: 6258
      name: 'IncorrectOwner'
      msg: 'Incorrect Owner'
    },
    {
      code: 6259
      name: 'IncorrectProgramAuthority'
      msg: 'Incorrect Program Authority'
    },
    {
      code: 6260
      name: 'CannotBorrowBeforeRepay'
      msg: 'Cannot Borrow Before Repay'
    },
    {
      code: 6261
      name: 'UnknownInstruction'
      msg: 'Unknown Instruction'
    },
    {
      code: 6262
      name: 'ToNewBondOffer'
      msg: 'ToNewBondOffer'
    },
    {
      code: 6263
      name: 'JackpotAlreadyClaimed'
      msg: 'JackpotAlreadyClaimed'
    },
    {
      code: 6264
      name: 'UserDoNotHaveJackpot'
      msg: 'UserDoNotHaveJackpot'
    },
    {
      code: 6265
      name: 'RakebackAlreadyClaimed'
      msg: 'RakebackAlreadyClaimed'
    },
    {
      code: 6266
      name: 'RakebackLocked'
      msg: 'RakebackLocked'
    },
    {
      code: 6267
      name: 'LastOrderIsLowerThanZero'
      msg: 'LastOrderIsLowerThanZero'
    },
    {
      code: 6268
      name: 'OnlyLinearCurveIsSupported'
      msg: 'OnlyLinearCurveIsSupported'
    },
    {
      code: 6269
      name: 'CantRefinanceFromSameOffer'
      msg: 'CantRefinanceFromSameOffer'
    },
    {
      code: 6270
      name: 'CantRefinanceFromNotSameTypeOffers'
      msg: 'CantRefinanceFromNotSameTypeOffers'
    },
    {
      code: 6271
      name: 'ReservesCantBecomeNegative'
      msg: "Reserves are negative somehow, it's error"
    },
    {
      code: 6272
      name: 'FacelessShouldBeMigratedInSpecialWay'
      msg: 'FacelessShouldBeMigratedInSpecialWay'
    },
    {
      code: 6273
      name: 'OfferDoesntBelongToTradeTransaction'
      msg: 'OfferDoesntBelongToTradeTransaction'
    },
    {
      code: 6274
      name: 'IncorrectAdditionalParticipant'
      msg: 'IncorrectAdditionalParticipant'
    },
    {
      code: 6275
      name: 'BanxIsNotLocked'
      msg: 'BanxIsNotLocked'
    },
    {
      code: 6276
      name: 'InstructionIsDisabled'
      msg: 'InstructionIsDisabled'
    },
    {
      code: 6277
      name: 'WrongCreator'
      msg: 'WrongCreator'
    },
    {
      code: 6278
      name: 'ThisUserCantRepay'
      msg: 'ThisUserCantRepay'
    },
    {
      code: 6279
      name: 'AprIsOutOfBound'
      msg: 'AprIsOutOfBound'
    },
    {
      code: 6280
      name: 'CanNotCallMoreThanBorrowedAmount'
      msg: 'CanNotCallMoreThanBorrowedAmount'
    },
    {
      code: 6281
      name: 'IncorrectRedeemResult'
      msg: 'IncorrectRedeemResult'
    },
    {
      code: 6282
      name: 'AlreadyMigrated'
      msg: 'AlreadyMigrated'
    },
    {
      code: 6283
      name: 'WrongFbond'
      msg: 'WrongFbond'
    },
    {
      code: 6284
      name: 'NothingToSubscribe'
      msg: 'NothingToSubscribe'
    },
    {
      code: 6285
      name: 'BanxAdventurePdaIsIncorrect'
      msg: 'BanxAdventurePdaIsIncorrect'
    },
    {
      code: 6286
      name: 'BanxTokensInTwoWeeksLock'
      msg: 'Banx tokens in two weeks lock'
    },
    {
      code: 6287
      name: 'BanxAdventureInProgress'
      msg: "Can't claim before end adventure"
    },
    {
      code: 6288
      name: 'MaxTokensStaked'
      msg: 'Max amount of tokens staked'
    },
    {
      code: 6289
      name: 'WrongVaultTokenAccount'
      msg: 'Wrong vault token account'
    },
    {
      code: 6290
      name: 'WrongBondOfferBondingType'
      msg: 'Wrong bond offer bonding type'
    },
    {
      code: 6291
      name: 'InvalidLendingTokenMint'
      msg: 'InvalidLendingTokenMint'
    },
    {
      code: 6292
      name: 'NotBorrowerListing'
      msg: 'Not borrower listing'
    },
    {
      code: 6293
      name: 'TerminationFreezePeriod'
      msg: 'TerminationFreezePeriod'
    },
    {
      code: 6294
      name: 'NotSplToken'
      msg: 'NotSplToken'
    },
  ]
}

export const IDL: Bonds = {
  version: '0.1.0',
  name: 'bonds',
  instructions: [
    {
      name: 'migrateBondTradeTransaction',
      accounts: [
        {
          name: 'fraktBond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondTradeTransactionV3',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondTransactionUser',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'seller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'originalLent',
          type: 'u64',
        },
        {
          name: 'fullRepaidAmount',
          type: 'u64',
        },
        {
          name: 'partialRepaySnapshot',
          type: 'u64',
        },
        {
          name: 'bondTradeTransactionState',
          type: {
            defined: 'BondTradeTransactionV2State',
          },
        },
        {
          name: 'amountOfBonds',
          type: 'u64',
        },
        {
          name: 'solAmount',
          type: 'u64',
        },
        {
          name: 'feeAmount',
          type: 'u64',
        },
        {
          name: 'bondTradeTransactionType',
          type: {
            defined: 'BondTradeTransactionV2Type',
          },
        },
        {
          name: 'soldAt',
          type: 'u64',
        },
        {
          name: 'redeemedAt',
          type: 'u64',
        },
        {
          name: 'redeemResult',
          type: {
            defined: 'RedeemResult',
          },
        },
        {
          name: 'isDirectSell',
          type: 'bool',
        },
      ],
    },
    {
      name: 'boundHadoMarketToFraktMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fraktMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'hadoRegistry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'depositToBondOfferStandard',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountOfSolToDeposit',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawFromBondOfferStandard',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountOfTokensToWithdraw',
          type: 'u64',
        },
      ],
    },
    {
      name: 'initializeHadoMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'validationAdapterProgram',
          isMut: false,
          isSigner: false,
          docs: ['CHECK Custom validation adapter'],
        },
        {
          name: 'pairTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['CHECK Custom token mint'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'marketParams',
          type: {
            defined: 'InitializeHadoMarketParams',
          },
        },
      ],
    },
    {
      name: 'finishHadoMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'updateHadoMarketFee',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newFee',
          type: 'u64',
        },
      ],
    },
    {
      name: 'removeBondOfferV2',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'initializeFlashLoanPool',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'loanFeePoints',
          type: 'u16',
        },
      ],
    },
    {
      name: 'depositSolToFlashLoanPool',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToDeposit',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawSolFromFlashLoanPool',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToWithdraw',
          type: 'u64',
        },
      ],
    },
    {
      name: 'takeFlashLoan',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
          docs: ['CHECK : instructions'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToBorrow',
          type: 'u64',
        },
      ],
    },
    {
      name: 'repayFlashLoan',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
          docs: ['CHECK : instructions'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToRepay',
          type: 'u64',
        },
      ],
    },
    {
      name: 'createBondOfferStandard',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bondOfferRandomSeed',
          type: 'u64',
        },
        {
          name: 'amountOfSolToDeposit',
          type: 'u64',
        },
        {
          name: 'loanToValueFilter',
          type: 'u64',
        },
        {
          name: 'maxReturnAmountFilter',
          type: 'u64',
        },
        {
          name: 'bondFeatures',
          type: {
            defined: 'BondFeatures',
          },
        },
      ],
    },
    {
      name: 'updateBondOfferStandard',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'loanToValueFilter',
          type: 'u64',
        },
        {
          name: 'maxReturnAmountFilter',
          type: 'u64',
        },
      ],
    },
    {
      name: 'borrowPerpetualTest',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'perpetualBorrowParams',
          type: {
            vec: {
              defined: 'BorrowPerpetualParams',
            },
          },
        },
        {
          name: 'optimizeIntoReserves',
          type: 'bool',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'mapBanxToPoints',
      accounts: [
        {
          name: 'banxPointsMap',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'playerPoints',
          type: 'u64',
        },
        {
          name: 'partnerPoints',
          type: 'u64',
        },
      ],
    },
    {
      name: 'fixBrokenBanxStake',
      accounts: [
        {
          name: 'banxStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'createPerpetualBondOffer',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'banxSolStakingOffer',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bondOfferRandomSeed',
          type: 'u64',
        },
        {
          name: 'loanValue',
          type: 'u64',
        },
        {
          name: 'amountOfLoans',
          type: 'u64',
        },
      ],
    },
    {
      name: 'removePerpetualOffer',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'banxSolStakingOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'repayPerpetualLoan',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'repayPerpetualLoanTest',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'refinancePerpetualLoan',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'uninitializedOldBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK old_bond_offer_v2'],
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldBondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lender',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK sponsor vault'],
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'oldBondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lenderSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bondOfferRandomSeed',
          type: 'u64',
        },
        {
          name: 'newApr',
          type: 'u64',
        },
      ],
    },
    {
      name: 'makePerpetualMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fraktMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'hadoRegistry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'whitelistEntry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'marketParams',
          type: {
            defined: 'MakePerpetualMarketParams',
          },
        },
      ],
    },
    {
      name: 'makePerpetualMarketValidation',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarketValidation',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'creatorHash',
          type: {
            array: ['u8', 32],
          },
        },
      ],
    },
    {
      name: 'updatePerpetualMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fraktMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'hadoRegistry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'whitelistEntry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'updatePerpetualOffer',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'banxSolStakingOffer',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newLoanValue',
          type: 'u64',
        },
        {
          name: 'amountOfLoans',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateInterestPerpetualMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'minMarketFee',
          type: 'u64',
        },
      ],
    },
    {
      name: 'borrowPerpetual',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'perpetualBorrowParams',
          type: {
            vec: {
              defined: 'BorrowPerpetualParams',
            },
          },
        },
        {
          name: 'optimizeIntoReserves',
          type: 'bool',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'claimPerpetualLoanTest',
      accounts: [
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedOldBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK old_bond_offer_v2'],
        },
      ],
      args: [],
    },
    {
      name: 'terminatePerpetualLoan',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'instantRefinancePerpetualLoan',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'uninitializedOldBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK old_bond_offer_v2'],
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'oldBondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldBondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK sponsor vault'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lenderSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newApr',
          type: 'u64',
        },
      ],
    },
    {
      name: 'borrowerRefinance',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'uninitializedOldBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK old_bond_offer_v2'],
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'oldBondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldBondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lender',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK sponsor vault'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lenderSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solToRefinance',
          type: 'u64',
        },
        {
          name: 'bondOfferRandomSeed',
          type: 'u64',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'borrowStakedBanxPerpetual',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'perpetualBorrowParams',
          type: {
            vec: {
              defined: 'BorrowPerpetualParams',
            },
          },
        },
        {
          name: 'optimizeIntoReserves',
          type: 'bool',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'repayStakedBanxPerpetualLoan',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'borrowCnftPerpetual',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol doesnt fit into the instruction'],
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'treeAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'whitelistEntry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'merkleTree',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarketValidation',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'logWrapper',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'compressionProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bubblegumProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'perpetualBorrowParam',
          type: {
            defined: 'BorrowPerpetualParams',
          },
        },
        {
          name: 'root',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'dataHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'creatorHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'nonce',
          type: 'u64',
        },
        {
          name: 'index',
          type: 'u32',
        },
        {
          name: 'proofLen',
          type: 'u8',
        },
        {
          name: 'optimizeIntoReserves',
          type: 'bool',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'repayCnftPerpetualLoan',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'uninitializedBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK bond_offer_v2'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'treeAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'merkleTree',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'logWrapper',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'compressionProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bubblegumProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'root',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'dataHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'creatorHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'nonce',
          type: 'u64',
        },
        {
          name: 'index',
          type: 'u32',
        },
        {
          name: 'proofLen',
          type: 'u8',
        },
      ],
    },
    {
      name: 'claimCnftPerpetualLoan',
      accounts: [
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'treeAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'merkleTree',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'logWrapper',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'compressionProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bubblegumProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedOldBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK old_bond_offer_v2'],
        },
      ],
      args: [
        {
          name: 'root',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'dataHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'creatorHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'nonce',
          type: 'u64',
        },
        {
          name: 'index',
          type: 'u32',
        },
        {
          name: 'proofLen',
          type: 'u8',
        },
      ],
    },
    {
      name: 'repayPartialPerpetualLoan',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lender',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'uninitializedOldBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK old_bond_offer_v2'],
        },
        {
          name: 'oldBondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'repaidBondTradeTransaction',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lenderSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'fractionToRepay',
          type: 'u64',
        },
      ],
    },
    {
      name: 'transferToSponsorVault',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK sponsor vault'],
        },
      ],
      args: [
        {
          name: 'solToTransfer',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawFromSponsorVault',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK sponsor vault'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountOfSolToWithdraw',
          type: 'u64',
        },
      ],
    },
    {
      name: 'createPerpetualBondOfferBonding',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'banxSolStakingOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bondOfferRandomSeed',
          type: 'u64',
        },
        {
          name: 'loanValue',
          type: 'u64',
        },
        {
          name: 'quantityOfLoans',
          type: 'u64',
        },
        {
          name: 'bondingCurveType',
          type: {
            defined: 'BondOfferBondingCurveType',
          },
        },
        {
          name: 'delta',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updatePerpetualOfferBonding',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'banxSolStakingOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'loanValue',
          type: 'u64',
        },
        {
          name: 'quantityOfLoans',
          type: 'u64',
        },
        {
          name: 'delta',
          type: 'u64',
        },
      ],
    },
    {
      name: 'claimPerpetualBondOfferInterest',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'banxSolStakingOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'claimPerpetualBondOfferReserves',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'banxSolStakingOffer',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'migrateOldToBondingOffer',
      accounts: [
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldBondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bondOfferRandomSeed',
          type: 'u64',
        },
      ],
    },
    {
      name: 'borrowerRefinanceToSame',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'oldBondOfferVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldBondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lender',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK sponsor vault'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lenderSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solToRefinance',
          type: 'u64',
        },
        {
          name: 'bondOfferRandomSeed',
          type: 'u64',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'setRepaymentCall',
      accounts: [
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'callAmount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'subscribeBanxAdventure',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'subscribeBanxAdventureParams',
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams',
            },
          },
        },
      ],
    },
    {
      name: 'subscribeBanxAdventureAdmin',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStakeUser',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'subscribeBanxAdventureParams',
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams',
            },
          },
        },
      ],
    },
    {
      name: 'claimStakingRewards',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStakingVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStakingVaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'stakeBanxNft',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStake',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxPointsMap',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoRegistry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'whitelistEntry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'currentWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'currentWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
      ],
      args: [
        {
          name: 'subscribeBanxAdventureParams',
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams',
            },
          },
        },
      ],
    },
    {
      name: 'stakeBanxToken',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStakingVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'banxStakingVaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'currentWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'currentWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
      ],
      args: [
        {
          name: 'tokensToStake',
          type: 'u64',
        },
        {
          name: 'subscribeBanxAdventureParams',
          type: {
            vec: {
              defined: 'SubscribeBanxAdventureParams',
            },
          },
        },
      ],
    },
    {
      name: 'unstakeBanxTokens',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStakingVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'banxStakingVaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'currentWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'currentWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
      ],
      args: [
        {
          name: 'tokensToUnstake',
          type: 'u64',
        },
      ],
    },
    {
      name: 'unstakeBanxNft',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authRules',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'currentWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'currentWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
      ],
      args: [],
    },
    {
      name: 'claimPerpetualLoanV2',
      accounts: [
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authRules',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'middleTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedOldBondOfferV2',
          isMut: true,
          isSigner: false,
          docs: ['CHECK old_bond_offer_v2'],
        },
        {
          name: 'currentWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventure',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'currentWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'firstWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'secondWeekBanxAdventureSubscription',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
      ],
      args: [
        {
          name: 'authorizationData',
          type: {
            option: {
              defined: 'AuthorizationDataLocal',
            },
          },
        },
      ],
    },
    {
      name: 'updateBanxStakingSettings',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'maxTokenStakeAmount',
          type: 'u64',
        },
        {
          name: 'tokensPerPartnerPoints',
          type: 'u64',
        },
        {
          name: 'tokensPerWeek',
          type: 'u64',
        },
      ],
    },
    {
      name: 'createBanxTokenStake',
      accounts: [
        {
          name: 'banxStakingSettings',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxTokenStakeUser',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'banxNftsStakedQuantity',
          type: 'u64',
        },
        {
          name: 'partnerPoints',
          type: 'u64',
        },
        {
          name: 'playerPoints',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawRewardAdmin',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStakingVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'banxStakingVaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountOfTokensToWithdraw',
          type: 'u64',
        },
      ],
    },
    {
      name: 'changeBanxAdventureRevAdmin',
      accounts: [
        {
          name: 'banxAdventure',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newwRev',
          type: 'u64',
        },
      ],
    },
    {
      name: 'createPerpetualListingCnft',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fraktBond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'whitelistEntry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'merkleTree',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarketValidation',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'logWrapper',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'compressionProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bubblegumProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedHadoMarket',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'treeAuthority',
          isMut: true,
          isSigner: false,
          docs: ['CHECK tree_authority'],
        },
      ],
      args: [
        {
          name: 'randomSeed',
          type: 'u64',
        },
        {
          name: 'amountOfSolToGet',
          type: 'u64',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
        {
          name: 'isBorrowerListing',
          type: 'bool',
        },
        {
          name: 'lendingToken',
          type: {
            defined: 'LendingTokenType',
          },
        },
        {
          name: 'terminationFreeze',
          type: 'u64',
        },
        {
          name: 'root',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'dataHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'creatorHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'nonce',
          type: 'u64',
        },
        {
          name: 'index',
          type: 'u32',
        },
        {
          name: 'proofLen',
          type: 'u8',
        },
      ],
    },
    {
      name: 'createPerpetualListing',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fraktBond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedHadoMarket',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedBanxPointMap',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedUserTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
      ],
      args: [
        {
          name: 'randomSeed',
          type: 'u64',
        },
        {
          name: 'amountOfSolToGet',
          type: 'u64',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
        {
          name: 'isBorrowerListing',
          type: 'bool',
        },
        {
          name: 'lendingToken',
          type: {
            defined: 'LendingTokenType',
          },
        },
        {
          name: 'terminationFreeze',
          type: 'u64',
        },
      ],
    },
    {
      name: 'createPerpetualListingStakedBanx',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fraktBond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedHadoMarket',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedBanxPointMap',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedUserTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
      ],
      args: [
        {
          name: 'randomSeed',
          type: 'u64',
        },
        {
          name: 'amountOfSolToGet',
          type: 'u64',
        },
        {
          name: 'aprRate',
          type: 'u64',
        },
        {
          name: 'isBorrowerListing',
          type: 'bool',
        },
        {
          name: 'lendingToken',
          type: {
            defined: 'LendingTokenType',
          },
        },
        {
          name: 'terminationFreeze',
          type: 'u64',
        },
      ],
    },
    {
      name: 'lendToBorrowerListing',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOfferV2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldBondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sponsorVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK sponsor vault'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'borrower',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'borrowerSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'splTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'removePerpetualListingCnft',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fraktBond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'treeAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'merkleTree',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'logWrapper',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'compressionProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bubblegumProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'isBorrowerListing',
          type: 'bool',
        },
        {
          name: 'root',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'dataHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'creatorHash',
          type: {
            array: ['u8', 32],
          },
        },
        {
          name: 'nonce',
          type: 'u64',
        },
        {
          name: 'index',
          type: 'u32',
        },
        {
          name: 'proofLen',
          type: 'u8',
        },
      ],
    },
    {
      name: 'removePerpetualListingStakedBanx',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fraktBond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'banxStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'isBorrowerListing',
          type: 'bool',
        },
      ],
    },
    {
      name: 'removePerpetualListing',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondTradeTransaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fraktBond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondOffer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mutualBondTradeTxnVault',
          isMut: true,
          isSigner: false,
          docs: ['CHECK vault for sol'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'uninitializedTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
        {
          name: 'uninitializedUserTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['CHECK token_mint'],
        },
      ],
      args: [
        {
          name: 'isBorrowerListing',
          type: 'bool',
        },
      ],
    },
    {
      name: 'patchBanxTokenStakeAdmin',
      accounts: [
        {
          name: 'banxTokenStake',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'nftsAmount',
          type: 'u64',
        },
        {
          name: 'partnerPointsAmount',
          type: 'u64',
        },
        {
          name: 'playerPointsAmount',
          type: 'u64',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'banxAdventureSubscription',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'adventureSubscriptionState',
            type: {
              defined: 'BanxAdventureSubscriptionState',
            },
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'adventure',
            type: 'publicKey',
          },
          {
            name: 'banxTokenStake',
            type: 'publicKey',
          },
          {
            name: 'stakeTokensAmount',
            type: 'u64',
          },
          {
            name: 'stakeNftAmount',
            type: 'u64',
          },
          {
            name: 'stakePartnerPointsAmount',
            type: 'u64',
          },
          {
            name: 'stakePlayerPointsAmount',
            type: 'u64',
          },
          {
            name: 'subscribedAt',
            type: 'u64',
          },
          {
            name: 'unsubscribedAt',
            type: 'u64',
          },
          {
            name: 'harvestedAt',
            type: 'u64',
          },
          {
            name: 'amountOfTokensHarvested',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'u64',
          },
          {
            name: 'placeholderTwo',
            type: 'u64',
          },
          {
            name: 'placeholderThree',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'banxAdventure',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'adventureState',
            type: {
              defined: 'BanxAdventureState',
            },
          },
          {
            name: 'tokensPerPoints',
            type: 'u64',
          },
          {
            name: 'week',
            type: 'u64',
          },
          {
            name: 'periodStartedAt',
            type: 'u64',
          },
          {
            name: 'periodEndingAt',
            type: 'u64',
          },
          {
            name: 'rewardsToBeDistributed',
            type: 'u64',
          },
          {
            name: 'totalPartnerPoints',
            type: 'u64',
          },
          {
            name: 'totalPlayerPoints',
            type: 'u64',
          },
          {
            name: 'totalTokensStaked',
            type: 'u64',
          },
          {
            name: 'totalBanxSubscribed',
            type: 'u64',
          },
          {
            name: 'amountOfTokensHarvested',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'banxStakingSettings',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'banxStakingSettingsState',
            type: {
              defined: 'BanxStakingSettingsState',
            },
          },
          {
            name: 'maxTokenStakeAmount',
            type: 'u64',
          },
          {
            name: 'tokensPerPartnerPoints',
            type: 'u64',
          },
          {
            name: 'tokensStaked',
            type: 'u64',
          },
          {
            name: 'banxStaked',
            type: 'u64',
          },
          {
            name: 'tokensPerWeek',
            type: 'u64',
          },
          {
            name: 'rewardsHarvested',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'banxTokenStake',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'banxStakeState',
            type: {
              defined: 'BanxTokenStakeState',
            },
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'adventureSubscriptionsQuantity',
            type: 'u64',
          },
          {
            name: 'tokensStaked',
            type: 'u64',
          },
          {
            name: 'partnerPointsStaked',
            type: 'u64',
          },
          {
            name: 'playerPointsStaked',
            type: 'u64',
          },
          {
            name: 'banxNftsStakedQuantity',
            type: 'u64',
          },
          {
            name: 'stakedAt',
            type: 'u64',
          },
          {
            name: 'unstakedAt',
            type: 'u64',
          },
          {
            name: 'farmedAmount',
            type: 'u64',
          },
          {
            name: 'nftsStakedAt',
            type: 'u64',
          },
          {
            name: 'nftsUnstakedAt',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'collateralBox',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'fbond',
            type: 'publicKey',
          },
          {
            name: 'collateralBoxType',
            type: {
              defined: 'CollateralBoxType',
            },
          },
          {
            name: 'collateralTokenMint',
            type: 'publicKey',
          },
          {
            name: 'collateralTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'collateralAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'fraktBond',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'fraktBondState',
            type: {
              defined: 'FraktBondState',
            },
          },
          {
            name: 'bondTradeTransactionsCounter',
            type: 'u8',
          },
          {
            name: 'borrowedAmount',
            type: 'u64',
          },
          {
            name: 'banxStake',
            type: 'publicKey',
          },
          {
            name: 'fraktMarket',
            type: 'publicKey',
          },
          {
            name: 'amountToReturn',
            type: 'u64',
          },
          {
            name: 'actualReturnedAmount',
            type: 'u64',
          },
          {
            name: 'terminatedCounter',
            type: 'u8',
          },
          {
            name: 'fbondTokenMint',
            type: 'publicKey',
          },
          {
            name: 'fbondTokenSupply',
            type: 'u64',
          },
          {
            name: 'activatedAt',
            type: 'u64',
          },
          {
            name: 'liquidatingAt',
            type: 'u64',
          },
          {
            name: 'fbondIssuer',
            type: 'publicKey',
          },
          {
            name: 'repaidOrLiquidatedAt',
            type: 'u64',
          },
          {
            name: 'currentPerpetualBorrowed',
            type: 'u64',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'refinanceAuctionStartedAt',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'flashLoanPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'borrowing',
            type: 'bool',
          },
          {
            name: 'balance',
            type: 'u64',
          },
          {
            name: 'loanFeePoints',
            type: 'u16',
          },
        ],
      },
    },
    {
      name: 'hadespinLeaderboardEntry',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'totalSolDeposited',
            type: 'u64',
          },
          {
            name: 'totalSolInNftDeposited',
            type: 'u64',
          },
          {
            name: 'totalNftDeposited',
            type: 'u64',
          },
          {
            name: 'totalFeePayed',
            type: 'u64',
          },
          {
            name: 'totalSolWon',
            type: 'u64',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
          {
            name: 'placeholderTwo',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'hadespinLeaderboardWeekEntry',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'week',
            type: 'u64',
          },
          {
            name: 'totalSolDeposited',
            type: 'u64',
          },
          {
            name: 'totalSolInNftDeposited',
            type: 'u64',
          },
          {
            name: 'totalNftDeposited',
            type: 'u64',
          },
          {
            name: 'totalFeePayed',
            type: 'u64',
          },
          {
            name: 'totalSolWon',
            type: 'u64',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
          {
            name: 'placeholderTwo',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'hadespinRakeback',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'hadesToClaimAmount',
            type: 'u64',
          },
          {
            name: 'claimTimestamp',
            type: 'u64',
          },
          {
            name: 'claimedAt',
            type: 'u64',
          },
          {
            name: 'claimed',
            type: 'bool',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'roundSetting',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'completedRounds',
            type: 'u64',
          },
          {
            name: 'totalSolDeposited',
            type: 'u64',
          },
          {
            name: 'totalFeeCollected',
            type: 'u64',
          },
          {
            name: 'totalParticipants',
            type: 'u64',
          },
          {
            name: 'roundDuration',
            type: 'u64',
          },
          {
            name: 'minSolToDeposit',
            type: 'u64',
          },
          {
            name: 'feePercent',
            type: 'u64',
          },
          {
            name: 'canInitializeNextRound',
            type: 'bool',
          },
          {
            name: 'lastRoundEndsAt',
            type: 'u64',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'rakebackHadesForSol',
            type: 'u64',
          },
          {
            name: 'contractBid',
            type: 'u64',
          },
          {
            name: 'placeholdeOne',
            type: 'u64',
          },
          {
            name: 'placeholdeTwo',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'round',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'roundState',
            type: {
              defined: 'RoundState',
            },
          },
          {
            name: 'roundValue',
            type: 'u64',
          },
          {
            name: 'startedAt',
            type: 'u64',
          },
          {
            name: 'solAmount',
            type: 'u64',
          },
          {
            name: 'feeAmount',
            type: 'u64',
          },
          {
            name: 'participants',
            type: 'u64',
          },
          {
            name: 'roundEndsAt',
            type: 'u64',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'winner',
            type: 'publicKey',
          },
          {
            name: 'roundNumber',
            type: 'u64',
          },
          {
            name: 'solInNftAmount',
            type: 'u64',
          },
          {
            name: 'contractBid',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'u64',
          },
          {
            name: 'placeholderTwo',
            type: 'u64',
          },
          {
            name: 'placeholderThree',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'userRound',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'round',
            type: 'publicKey',
          },
          {
            name: 'solDeposited',
            type: 'u64',
          },
          {
            name: 'startSolPosition',
            type: 'u64',
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'depositedAt',
            type: 'u64',
          },
          {
            name: 'nftMint',
            type: 'publicKey',
          },
          {
            name: 'jackpotSolAmount',
            type: 'u64',
          },
          {
            name: 'jackpotClaimedAt',
            type: 'u64',
          },
          {
            name: 'jackpotClaimed',
            type: 'bool',
          },
          {
            name: 'placeholderOne',
            type: 'u64',
          },
          {
            name: 'placeholderTwo',
            type: 'u32',
          },
          {
            name: 'placeholderThree',
            type: 'bool',
          },
          {
            name: 'placeholderFour',
            type: 'bool',
          },
          {
            name: 'placeholderFive',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'hadoMarketRegistry',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'fraktMarket',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'hadoMarketValidation',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'creatorHash',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
          {
            name: 'placeholderTwo',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'hadoMarket',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'marketAuthority',
            type: 'publicKey',
          },
          {
            name: 'marketState',
            type: {
              defined: 'MarketState',
            },
          },
          {
            name: 'marketTrustType',
            type: {
              defined: 'MarketTrustType',
            },
          },
          {
            name: 'pairValidationType',
            type: {
              defined: 'PairValidationType',
            },
          },
          {
            name: 'fraktMarket',
            type: 'publicKey',
          },
          {
            name: 'minBidCap',
            type: 'u64',
          },
          {
            name: 'minMarketFee',
            type: 'u64',
          },
          {
            name: 'whitelistType',
            type: {
              defined: 'NftValidationWhitelistTypeHado',
            },
          },
          {
            name: 'whitelistedAddress',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'banxSolStakingOffer',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'banxSolStakingOfferState',
            type: {
              defined: 'BanxSolStakingOfferState',
            },
          },
          {
            name: 'lastClaimedAt',
            type: 'u64',
          },
          {
            name: 'totalClaimedAmount',
            type: 'u64',
          },
          {
            name: 'totalInterestRewards',
            type: 'u64',
          },
          {
            name: 'createdAt',
            type: 'u64',
          },
          {
            name: 'totalLent',
            type: 'u64',
          },
          {
            name: 'currentInOffer',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'bondOfferV2',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'pairState',
            type: {
              defined: 'PairState',
            },
          },
          {
            name: 'bondingCurve',
            type: {
              defined: 'BondOfferBondingCurve',
            },
          },
          {
            name: 'baseSpotPrice',
            type: 'u64',
          },
          {
            name: 'mathCounter',
            type: 'i64',
          },
          {
            name: 'currentSpotPrice',
            type: 'u64',
          },
          {
            name: 'concentrationIndex',
            type: 'u64',
          },
          {
            name: 'bidCap',
            type: 'u64',
          },
          {
            name: 'bidSettlement',
            type: 'i64',
          },
          {
            name: 'edgeSettlement',
            type: 'u64',
          },
          {
            name: 'fundsSolOrTokenBalance',
            type: 'u64',
          },
          {
            name: 'buyOrdersQuantity',
            type: 'u64',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'assetReceiver',
            type: 'publicKey',
          },
          {
            name: 'validation',
            type: {
              defined: 'BondOfferValidation',
            },
          },
        ],
      },
    },
    {
      name: 'bondTradeTransactionV2',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bondTradeTransactionState',
            type: {
              defined: 'BondTradeTransactionV2State',
            },
          },
          {
            name: 'bondOffer',
            type: 'publicKey',
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'amountOfBonds',
            type: 'u64',
          },
          {
            name: 'solAmount',
            type: 'u64',
          },
          {
            name: 'feeAmount',
            type: 'u64',
          },
          {
            name: 'bondTradeTransactionType',
            type: {
              defined: 'BondTradeTransactionV2Type',
            },
          },
          {
            name: 'fbondTokenMint',
            type: 'publicKey',
          },
          {
            name: 'soldAt',
            type: 'u64',
          },
          {
            name: 'redeemedAt',
            type: 'u64',
          },
          {
            name: 'redeemResult',
            type: {
              defined: 'RedeemResult',
            },
          },
          {
            name: 'seller',
            type: 'publicKey',
          },
          {
            name: 'isDirectSell',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'bondTradeTransactionV3',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bondTradeTransactionState',
            type: {
              defined: 'BondTradeTransactionV2State',
            },
          },
          {
            name: 'bondOffer',
            type: 'publicKey',
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'amountOfBonds',
            type: 'u64',
          },
          {
            name: 'solAmount',
            type: 'u64',
          },
          {
            name: 'feeAmount',
            type: 'u64',
          },
          {
            name: 'bondTradeTransactionType',
            type: {
              defined: 'BondTradeTransactionV2Type',
            },
          },
          {
            name: 'fbondTokenMint',
            type: 'publicKey',
          },
          {
            name: 'soldAt',
            type: 'u64',
          },
          {
            name: 'redeemedAt',
            type: 'u64',
          },
          {
            name: 'redeemResult',
            type: {
              defined: 'RedeemResult',
            },
          },
          {
            name: 'seller',
            type: 'publicKey',
          },
          {
            name: 'isDirectSell',
            type: 'bool',
          },
          {
            name: 'lendingToken',
            type: {
              defined: 'LendingTokenType',
            },
          },
          {
            name: 'currentRemainingLent',
            type: 'u64',
          },
          {
            name: 'interestSnapshot',
            type: 'u64',
          },
          {
            name: 'partialRepaySnapshot',
            type: 'u64',
          },
          {
            name: 'terminationStartedAt',
            type: 'u64',
          },
          {
            name: 'lenderOriginalLent',
            type: 'u64',
          },
          {
            name: 'lenderFullRepaidAmount',
            type: 'u64',
          },
          {
            name: 'borrowerOriginalLent',
            type: 'u64',
          },
          {
            name: 'borrowerFullRepaidAmount',
            type: 'u64',
          },
          {
            name: 'repayDestination',
            type: {
              defined: 'RepayDestination',
            },
          },
          {
            name: 'repaymentCallAmount',
            type: 'u64',
          },
          {
            name: 'terminationFreeze',
            type: 'u64',
          },
          {
            name: 'placeholder3',
            type: 'u64',
          },
          {
            name: 'placeholder4',
            type: 'u64',
          },
          {
            name: 'placeholder5',
            type: 'u64',
          },
          {
            name: 'placeholder6',
            type: 'u64',
          },
          {
            name: 'placeholder7',
            type: 'u64',
          },
          {
            name: 'placeholder8',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'repaymentCall',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'callState',
            type: {
              defined: 'CallState',
            },
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'bond',
            type: 'publicKey',
          },
          {
            name: 'bondTradeTransaction',
            type: 'publicKey',
          },
          {
            name: 'callAmount',
            type: 'u64',
          },
          {
            name: 'lastUpdatedAt',
            type: 'u64',
          },
          {
            name: 'lastCallAt',
            type: 'u64',
          },
          {
            name: 'lastRepaidAt',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'adventureSubscription',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'stake',
            type: 'publicKey',
          },
          {
            name: 'adventure',
            type: 'publicKey',
          },
          {
            name: 'subscribedAt',
            type: 'u64',
          },
          {
            name: 'unsubscribedAt',
            type: 'u64',
          },
          {
            name: 'harvestedAt',
            type: 'u64',
          },
          {
            name: 'amountOfSolHarvested',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'adventure',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'adventureState',
            type: {
              defined: 'AdventureState',
            },
          },
          {
            name: 'periodStartedAt',
            type: 'u64',
          },
          {
            name: 'periodEndingAt',
            type: 'u64',
          },
          {
            name: 'rewardsUpperLimit',
            type: 'u64',
          },
          {
            name: 'rewardsLowerLimit',
            type: 'u64',
          },
          {
            name: 'totalPeriodRevenue',
            type: 'u64',
          },
          {
            name: 'rewardsToBeDistributed',
            type: 'u64',
          },
          {
            name: 'totalBanxSubscribed',
            type: 'u64',
          },
          {
            name: 'totalPartnerPoints',
            type: 'u64',
          },
          {
            name: 'totalPlayerPoints',
            type: 'u64',
          },
          {
            name: 'banxSubscribedLeft',
            type: 'u64',
          },
          {
            name: 'partnerPointsLeft',
            type: 'u64',
          },
          {
            name: 'playerPointsLeft',
            type: 'u64',
          },
          {
            name: 'rewardsLeft',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'banxPointsMap',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'banxMint',
            type: 'publicKey',
          },
          {
            name: 'playerPoints',
            type: 'u64',
          },
          {
            name: 'partnerPoints',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'banxStake',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'banxStakeState',
            type: {
              defined: 'BanxStakeState',
            },
          },
          {
            name: 'adventureSubscriptionsQuantity',
            type: 'u64',
          },
          {
            name: 'nftMint',
            type: 'publicKey',
          },
          {
            name: 'collateralTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'stakedAt',
            type: 'u64',
          },
          {
            name: 'unstakedOrLiquidatedAt',
            type: 'u64',
          },
          {
            name: 'isLoaned',
            type: 'bool',
          },
          {
            name: 'bond',
            type: 'publicKey',
          },
          {
            name: 'playerPoints',
            type: 'u64',
          },
          {
            name: 'partnerPoints',
            type: 'u64',
          },
          {
            name: 'farmedAmount',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'banxUser',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'stakedPlayerPoints',
            type: 'u64',
          },
          {
            name: 'stakedPartnerPoints',
            type: 'u64',
          },
          {
            name: 'stakedBanx',
            type: 'u64',
          },
          {
            name: 'totalHarvestedRewards',
            type: 'u64',
          },
          {
            name: 'freeLiquidityCurrent',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'stakingSettings',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'mainVaultBalance',
            type: 'u64',
          },
          {
            name: 'upperRewardsLimit',
            type: 'u64',
          },
          {
            name: 'lowerRewardsLimit',
            type: 'u64',
          },
          {
            name: 'placeholderOne',
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'InitializeHadoMarketParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'minBidCap',
            type: 'u64',
          },
          {
            name: 'minMarketFee',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'BorrowPerpetualParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'minAmountToGet',
            type: 'u64',
          },
          {
            name: 'amountOfSolToGet',
            type: 'u64',
          },
          {
            name: 'bondTradeTransactionBump',
            type: 'u8',
          },
          {
            name: 'fraktBondBump',
            type: 'u8',
          },
          {
            name: 'bondOfferVaultBump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'MakePerpetualMarketParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'minBidCap',
            type: 'u64',
          },
          {
            name: 'minMarketFee',
            type: 'u64',
          },
          {
            name: 'marketState',
            type: {
              defined: 'MarketState',
            },
          },
        ],
      },
    },
    {
      name: 'SubscribeBanxAdventureParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'week',
            type: 'u64',
          },
          {
            name: 'adventureBump',
            type: 'u8',
          },
          {
            name: 'subscriptionBump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'BondOfferValidation',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'loanToValueFilter',
            type: 'u64',
          },
          {
            name: 'durationFilter',
            type: 'u64',
          },
          {
            name: 'maxReturnAmountFilter',
            type: 'u64',
          },
          {
            name: 'bondFeatures',
            type: {
              defined: 'BondFeatures',
            },
          },
        ],
      },
    },
    {
      name: 'BondOfferBondingCurve',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'delta',
            type: 'u64',
          },
          {
            name: 'bondingType',
            type: {
              defined: 'BondOfferBondingCurveType',
            },
          },
        ],
      },
    },
    {
      name: 'AuthorizationDataLocal',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'payload',
            type: {
              vec: {
                defined: 'TaggedPayload',
              },
            },
          },
        ],
      },
    },
    {
      name: 'TaggedPayload',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'payload',
            type: {
              defined: 'PayloadTypeLocal',
            },
          },
        ],
      },
    },
    {
      name: 'SeedsVecLocal',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'seeds',
            docs: ['The vector of derivation seeds.'],
            type: {
              vec: 'bytes',
            },
          },
        ],
      },
    },
    {
      name: 'ProofInfoLocal',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'proof',
            docs: ['The merkle proof.'],
            type: {
              vec: {
                array: ['u8', 32],
              },
            },
          },
        ],
      },
    },
    {
      name: 'BanxAdventureSubscriptionState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Active',
          },
          {
            name: 'Claimed',
          },
        ],
      },
    },
    {
      name: 'BanxAdventureState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Active',
          },
        ],
      },
    },
    {
      name: 'BanxStakingSettingsState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Active',
          },
        ],
      },
    },
    {
      name: 'BanxTokenStakeState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Staked',
          },
          {
            name: 'Unstaked',
          },
        ],
      },
    },
    {
      name: 'CollateralBoxType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Escrow',
          },
          {
            name: 'Escrowless',
          },
        ],
      },
    },
    {
      name: 'FraktBondState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Initialized',
          },
          {
            name: 'Active',
          },
          {
            name: 'Repaid',
          },
          {
            name: 'Liquidating',
          },
          {
            name: 'Liquidated',
          },
          {
            name: 'PerpetualActive',
          },
          {
            name: 'PerpetualRepaid',
          },
          {
            name: 'PerpetualLiquidatedByAuction',
          },
          {
            name: 'PerpetualLiquidatedByClaim',
          },
        ],
      },
    },
    {
      name: 'RoundState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Uninitialized',
          },
          {
            name: 'Initialized',
          },
          {
            name: 'Open',
          },
          {
            name: 'Drawn',
          },
        ],
      },
    },
    {
      name: 'NftValidationWhitelistTypeHado',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Creator',
          },
          {
            name: 'Nft',
          },
          {
            name: 'MerkleTree',
          },
          {
            name: 'CollectionId',
          },
        ],
      },
    },
    {
      name: 'MarketTrustType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Unverified',
          },
          {
            name: 'Verified',
          },
        ],
      },
    },
    {
      name: 'MarketState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Initializing',
          },
          {
            name: 'Available',
          },
          {
            name: 'InitializingPerpetual',
          },
          {
            name: 'AvailablePerpetual',
          },
          {
            name: 'PrivateAvailablePerpetual',
          },
        ],
      },
    },
    {
      name: 'PairValidationType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'ClassicValidation',
          },
          {
            name: 'CustomValidation',
          },
        ],
      },
    },
    {
      name: 'PairTokenType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NativeSol',
          },
          {
            name: 'Spl',
          },
        ],
      },
    },
    {
      name: 'BanxSolStakingOfferState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Uninitialized',
          },
          {
            name: 'Initialized',
          },
          {
            name: 'Closed',
          },
        ],
      },
    },
    {
      name: 'BondFeatures',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Autocompound',
          },
          {
            name: 'ReceiveNftOnLiquidation',
          },
          {
            name: 'AutoreceiveSol',
          },
          {
            name: 'AutoCompoundAndReceiveNft',
          },
          {
            name: 'AutoReceiveAndReceiveNft',
          },
        ],
      },
    },
    {
      name: 'PairState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Initializing',
          },
          {
            name: 'OnMarketVirtual',
          },
          {
            name: 'OnMarketTokenized',
          },
          {
            name: 'Frozen',
          },
          {
            name: 'Closed',
          },
          {
            name: 'PerpetualOnMarket',
          },
          {
            name: 'PerpetualClosed',
          },
          {
            name: 'PerpetualBondingCurveOnMarket',
          },
          {
            name: 'PerpetualMigrated',
          },
          {
            name: 'PerpetualBondingCurveClosed',
          },
          {
            name: 'PerpetualListing',
          },
        ],
      },
    },
    {
      name: 'BondOfferBondingCurveType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Linear',
          },
          {
            name: 'Exponential',
          },
          {
            name: 'LinearUsdc',
          },
          {
            name: 'ExponentialUsdc',
          },
          {
            name: 'LinearBanxSol',
          },
          {
            name: 'ExponentialBanxSol',
          },
        ],
      },
    },
    {
      name: 'BondTradeTransactionV2State',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NotActive',
          },
          {
            name: 'Active',
          },
          {
            name: 'PerpetualActive',
          },
          {
            name: 'PerpetualRepaid',
          },
          {
            name: 'PerpetualLiquidatedByAuction',
          },
          {
            name: 'PerpetualLiquidatedByClaim',
          },
          {
            name: 'PerpetualManualTerminating',
          },
          {
            name: 'PerpetualPartialRepaid',
          },
          {
            name: 'PerpetualRefinanceRepaid',
          },
          {
            name: 'PerpetualRefinancedActive',
          },
          {
            name: 'Migrated',
          },
          {
            name: 'PerpetualBorrowerListing',
          },
          {
            name: 'PerpetualLenderListing',
          },
        ],
      },
    },
    {
      name: 'BondTradeTransactionV2Type',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Autocompound',
          },
          {
            name: 'ReceiveNftOnLiquidation',
          },
          {
            name: 'AutoreceiveSol',
          },
          {
            name: 'AutoCompoundAndReceiveNft',
          },
          {
            name: 'AutoReceiveAndReceiveNft',
          },
        ],
      },
    },
    {
      name: 'RedeemResult',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'DirectBorrow',
          },
          {
            name: 'Reborrow',
          },
          {
            name: 'InstantRefinanced',
          },
          {
            name: 'RefinancedByAuction',
          },
          {
            name: 'PartialRepay',
          },
          {
            name: 'DirectRepaid',
          },
          {
            name: 'Claimed',
          },
          {
            name: 'DirectBorrowAndDirectRepaid',
          },
          {
            name: 'DirectBorrowAndReborrowRepaid',
          },
          {
            name: 'DirectBorrowAndInstantRefinancedRepaid',
          },
          {
            name: 'DirectBorrowAndRefinancedByAuctionRepaid',
          },
          {
            name: 'DirectBorrowAndPartialRepaid',
          },
          {
            name: 'DirectBorrowAndClaimed',
          },
          {
            name: 'ReborrowAndDirectRepaid',
          },
          {
            name: 'ReborrowAndReborrowRepaid',
          },
          {
            name: 'ReborrowAndInstantRefinancedRepaid',
          },
          {
            name: 'ReborrowAndRefinancedByAuctionRepaid',
          },
          {
            name: 'ReborrowAndPartialRepaid',
          },
          {
            name: 'ReborrowAndClaimed',
          },
          {
            name: 'InstantRefinancedAndDirectRepaid',
          },
          {
            name: 'InstantRefinancedAndReborrowRepaid',
          },
          {
            name: 'InstantRefinancedAndInstantRefinancedRepaid',
          },
          {
            name: 'InstantRefinancedAndRefinancedByAuctionRepaid',
          },
          {
            name: 'InstantRefinancedAndPartialRepaid',
          },
          {
            name: 'InstantRefinancedAndClaimed',
          },
          {
            name: 'RefinancedByAuctionAndDirectRepaid',
          },
          {
            name: 'RefinancedByAuctionAndReborrowRepaid',
          },
          {
            name: 'RefinancedByAuctionAndInstantRefinancedRepaid',
          },
          {
            name: 'RefinancedByAuctionAndRefinancedByAuctionRepaid',
          },
          {
            name: 'RefinancedByAuctionAndPartialRepaid',
          },
          {
            name: 'RefinancedByAuctionAndClaimed',
          },
          {
            name: 'PartialRepaidAndDirectRepaid',
          },
          {
            name: 'PartialRepaidAndReborrowRepaid',
          },
          {
            name: 'PartialRepaidAndInstantRefinancedRepaid',
          },
          {
            name: 'PartialRepaidAndRefinancedByAuctionRepaid',
          },
          {
            name: 'PartialRepaidAndPartialRepaid',
          },
          {
            name: 'PartialRepaidAndClaimed',
          },
        ],
      },
    },
    {
      name: 'LendingTokenType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NativeSol',
          },
          {
            name: 'Usdc',
          },
          {
            name: 'BanxSol',
          },
        ],
      },
    },
    {
      name: 'RepayDestination',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Offer',
          },
          {
            name: 'Wallet',
          },
          {
            name: 'Vault',
          },
        ],
      },
    },
    {
      name: 'CallState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Uninitialized',
          },
          {
            name: 'Initialized',
          },
        ],
      },
    },
    {
      name: 'AdventureState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Uninitialized',
          },
          {
            name: 'Initialized',
          },
          {
            name: 'DistributingInitialized',
          },
        ],
      },
    },
    {
      name: 'BanxStakeState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Staked',
          },
          {
            name: 'Unstaked',
          },
          {
            name: 'Liquidated',
          },
        ],
      },
    },
    {
      name: 'PayloadTypeLocal',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Pubkey',
            fields: ['publicKey'],
          },
          {
            name: 'Seeds',
            fields: [
              {
                defined: 'SeedsVecLocal',
              },
            ],
          },
          {
            name: 'MerkleProof',
            fields: [
              {
                defined: 'ProofInfoLocal',
              },
            ],
          },
          {
            name: 'Number',
            fields: ['u64'],
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'MetadataDoesntExist',
      msg: 'MetadataDoesntExist',
    },
    {
      code: 6001,
      name: 'DerivedKeyInvalid',
      msg: 'DerivedKeyInvalid',
    },
    {
      code: 6002,
      name: 'InvalidCollectionDetails',
      msg: 'InvalidCollectionDetails',
    },
    {
      code: 6003,
      name: 'InvalidCollection',
      msg: 'InvalidCollection',
    },
    {
      code: 6004,
      name: 'InvalidCollectionMint',
      msg: 'InvalidCollectionMint',
    },
    {
      code: 6005,
      name: 'NftNotVerified',
      msg: 'NftNotVerified',
    },
    {
      code: 6006,
      name: 'InvalidOwner',
      msg: 'InvalidOwner',
    },
    {
      code: 6007,
      name: 'InvalidDelta',
      msg: 'InvalidDelta',
    },
    {
      code: 6008,
      name: 'InvalidFee',
      msg: 'InvalidFee',
    },
    {
      code: 6009,
      name: 'InvalidPairType',
      msg: 'InvalidPairType',
    },
    {
      code: 6010,
      name: 'NotEnoughInTokenAccount',
      msg: 'NotEnoughInTokenAccount',
    },
    {
      code: 6011,
      name: 'InvalidMint',
      msg: 'InvalidMint',
    },
    {
      code: 6012,
      name: 'InvalidSolVault',
      msg: 'InvalidSolVault',
    },
    {
      code: 6013,
      name: 'InvalidFundingAmount',
      msg: 'InvalidFundingAmount',
    },
    {
      code: 6014,
      name: 'NotEnoughLamports',
      msg: 'NotEnoughLamports',
    },
    {
      code: 6015,
      name: 'InvalidJpegOwner',
      msg: 'InvalidJpegOwner',
    },
    {
      code: 6016,
      name: 'InvalidTokenAccount',
      msg: 'InvalidTokenAccount',
    },
    {
      code: 6017,
      name: 'InvalidPayer',
      msg: 'InvalidPayer',
    },
    {
      code: 6018,
      name: 'ShouldBeActive',
      msg: 'ShouldBeActive',
    },
    {
      code: 6019,
      name: 'CantMakeZeroOrders',
      msg: "Can't make 0 orders",
    },
    {
      code: 6020,
      name: 'OnlyClassicAuthority',
      msg: 'OnlyClassicAuthority',
    },
    {
      code: 6021,
      name: 'NotValidAuthorityAdapter',
      msg: 'NotValidAuthorityAdapter',
    },
    {
      code: 6022,
      name: 'UserDoesntHaveAuthority',
      msg: 'UserDoesntHaveAuthority',
    },
    {
      code: 6023,
      name: 'WrongSeed',
      msg: 'WrongSeed',
    },
    {
      code: 6024,
      name: 'CanDepositSolOnlyToTokenToNft',
      msg: 'CanDepositSolOnlyToTokenToNft',
    },
    {
      code: 6025,
      name: 'MaxAmountOfOrdersSucceeded',
      msg: 'MaxAmountOfOrdersSucceeded',
    },
    {
      code: 6026,
      name: 'CanDepositNftOnlyToNftToToken',
      msg: 'CanDepositNftOnlyToNftToToken',
    },
    {
      code: 6027,
      name: 'TokenAccountDoesntContainNft',
      msg: 'TokenAccountDoesntContainNft',
    },
    {
      code: 6028,
      name: 'MarketAuthorityIncorrect',
      msg: 'MarketAuthorityIncorrect',
    },
    {
      code: 6029,
      name: 'CanAddWhitelistOnlyToInitializingMarket',
      msg: 'CanAddWhitelistOnlyToInitializingMarket',
    },
    {
      code: 6030,
      name: 'CanPutPairsOnlyToAvailableMarkets',
      msg: 'CanPutPairsOnlyToAvailableMarkets',
    },
    {
      code: 6031,
      name: 'PairAndNftValidationMarketDoesntMatch',
      msg: 'PairAndNftValidationMarketDoesntMatch',
    },
    {
      code: 6032,
      name: 'OnlyMarketScopeSupported',
      msg: 'OnlyMarketScopeSupported',
    },
    {
      code: 6033,
      name: 'NotWhitelistedNftForThisMarket',
      msg: 'NotWhitelistedNftForThisMarket',
    },
    {
      code: 6034,
      name: 'CanDepositOnlyToLiquidityProvision',
      msg: 'CanDepositOnlyToLiquidityProvision',
    },
    {
      code: 6035,
      name: 'NftBoxDoesntMatchPair',
      msg: 'NftBoxDoesntMatchPair',
    },
    {
      code: 6036,
      name: 'NftBoxShouldBeActive',
      msg: 'NftBoxShouldBeActive',
    },
    {
      code: 6037,
      name: 'NftBoxDoesntMatchMint',
      msg: 'NftBoxDoesntMatchMint',
    },
    {
      code: 6038,
      name: 'CantBuyNftFromTokenForNft',
      msg: 'CantBuyNftFromTokenForNft',
    },
    {
      code: 6039,
      name: 'OnlyTokenForNftIsEligibleForThisSell',
      msg: 'OnlyTokenForNftIsEligibleForThisSell',
    },
    {
      code: 6040,
      name: 'NoBuyOrdersOnThisPair',
      msg: 'NoBuyOrdersOnThisPair',
    },
    {
      code: 6041,
      name: 'OnlyLiquidityProvisionIsEligibleForThisSell',
      msg: 'OnlyLiquidityProvisionIsEligibleForThisSell',
    },
    {
      code: 6042,
      name: 'OnlyTokenForNftIsEligibleForThisWithdrawal',
      msg: 'OnlyTokenForNftIsEligibleForThisWithdrawal',
    },
    {
      code: 6043,
      name: 'OnlyNftForTokenIsEligibleForThisWithdrawal',
      msg: 'OnlyNftForTokenIsEligibleForThisWithdrawal',
    },
    {
      code: 6044,
      name: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal',
      msg: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal',
    },
    {
      code: 6045,
      name: 'InstructionIsNotSupported',
      msg: 'InstructionIsNotSupported',
    },
    {
      code: 6046,
      name: 'CanTradeOnlyWithPairsOnMarket',
      msg: 'CanTradeOnlyWithPairsOnMarket',
    },
    {
      code: 6047,
      name: 'NoLiquidityFeesToWithdraw',
      msg: 'NoLiquidityFeesToWithdraw',
    },
    {
      code: 6048,
      name: 'MaxAmountToPayExceeded',
      msg: 'MaxAmountToPayExceeded',
    },
    {
      code: 6049,
      name: 'GettingLessThanMinAmountToGet',
      msg: 'GettingLessThanMinAmountToGet',
    },
    {
      code: 6050,
      name: 'UserDoesntHaveHadomarketAuthority',
      msg: 'UserDoesntHaveHadomarketAuthority',
    },
    {
      code: 6051,
      name: 'HadomarketAlreadyFinished',
      msg: 'HadomarketAlreadyFinished',
    },
    {
      code: 6052,
      name: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs',
      msg: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs',
    },
    {
      code: 6053,
      name: 'CanModifyOnlyToVirtualOrInitializingPairs',
      msg: 'CanModifyOnlyToVirtualOrInitializingPairs',
    },
    {
      code: 6054,
      name: 'LiquidityProvisionOrderPairDoesntMatch',
      msg: 'LiquidityProvisionOrderPairDoesntMatch',
    },
    {
      code: 6055,
      name: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction',
      msg: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction',
    },
    {
      code: 6056,
      name: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction',
      msg: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction',
    },
    {
      code: 6057,
      name: 'LiquidityProvisionOrderNotEdge',
      msg: 'LiquidityProvisionOrderNotEdge',
    },
    {
      code: 6058,
      name: 'NftPairBoxNotParsingFromRemaining',
      msg: 'NftPairBoxNotParsingFromRemaining',
    },
    {
      code: 6059,
      name: 'VaultNftTokenAccountNotParsingFromRemaining',
      msg: 'VaultNftTokenAccountNotParsingFromRemaining',
    },
    {
      code: 6060,
      name: 'UserTokenAccountNotParsingFromRemaining',
      msg: 'UserTokenAccountNotParsingFromRemaining',
    },
    {
      code: 6061,
      name: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs',
      msg: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs',
    },
    {
      code: 6062,
      name: 'VaultDoesntMatchBox',
      msg: 'VaultDoesntMatchBox',
    },
    {
      code: 6063,
      name: 'WithdrawingOnlyBuyOrdersPairs',
      msg: 'WithdrawingOnlyBuyOrdersPairs',
    },
    {
      code: 6064,
      name: 'WithdrawingOnlySellOrdersPairs',
      msg: 'WithdrawingOnlySellOrdersPairs',
    },
    {
      code: 6065,
      name: 'LiquidityProvisionOrderIsWithdrawn',
      msg: 'LiquidityProvisionOrderIsWithdrawn',
    },
    {
      code: 6066,
      name: 'LiquidityProvisionOrderIsNotCorrectOrderForPair',
      msg: 'LiquidityProvisionOrderIsNotCorrectOrderForPair',
    },
    {
      code: 6067,
      name: 'OnlyMarketVirtualPairsCanBeTokenized',
      msg: 'OnlyMarketVirtualPairsCanBeTokenized',
    },
    {
      code: 6068,
      name: 'OnlyLiquidityProvisionPairsCanBeTokenized',
      msg: 'OnlyLiquidityProvisionPairsCanBeTokenized',
    },
    {
      code: 6069,
      name: 'OnlyInitializingPairsCanBePutOnMarket',
      msg: 'OnlyInitializingPairsCanBePutOnMarket',
    },
    {
      code: 6070,
      name: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair',
      msg: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair',
    },
    {
      code: 6071,
      name: 'OnlyVirtualLpOrderCanBeTokenized',
      msg: 'OnlyVirtualLpOrderCanBeTokenized',
    },
    {
      code: 6072,
      name: 'OnlyTokenizedLpOrdersCanWithdrawFees',
      msg: 'OnlyTokenizedLpOrdersCanWithdrawFees',
    },
    {
      code: 6073,
      name: 'UserLpTokenAccountDoesntContainNft',
      msg: 'UserLpTokenAccountDoesntContainNft',
    },
    {
      code: 6074,
      name: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction',
      msg: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction',
    },
    {
      code: 6075,
      name: 'LpTokenMintDoesntMatchOrder',
      msg: 'LpTokenMintDoesntMatchOrder',
    },
    {
      code: 6076,
      name: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft',
      msg: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft',
    },
    {
      code: 6077,
      name: 'CantSetBidCapSmallerThanMarketMinimum',
      msg: 'CantSetBidCapSmallerThanMarketMinimum',
    },
    {
      code: 6078,
      name: 'CantDepositNftWithNotMarketDecimals',
      msg: 'CantDepositNftWithNotMarketDecimals',
    },
    {
      code: 6079,
      name: 'FndAmountCantExceedBidCap',
      msg: 'FndAmountCantExceedBidCap',
    },
    {
      code: 6080,
      name: 'CantBuyMoreThatRemainingBidSettlement',
      msg: 'CantBuyMoreThatRemainingBidSettlement',
    },
    {
      code: 6081,
      name: 'CantBuyMoreThanActiveTokensAmount',
      msg: 'CantBuyMoreThanActiveTokensAmount',
    },
    {
      code: 6082,
      name: 'CantSellMoreThanActiveTokensAmount',
      msg: 'CantSellMoreThanActiveTokensAmount',
    },
    {
      code: 6083,
      name: 'CantDepositMoreThanBidCap',
      msg: 'CantDepositMoreThanBidCap',
    },
    {
      code: 6084,
      name: 'CantDepositZero',
      msg: 'CantDepositZero',
    },
    {
      code: 6085,
      name: 'CantWithdrawMoreThanBidCap',
      msg: 'CantWithdrawMoreThanBidCap',
    },
    {
      code: 6086,
      name: 'CantWithdrawZero',
      msg: 'CantWithdrawZero',
    },
    {
      code: 6087,
      name: 'CantWithdrawMoreThanNftBoxActiveTokens',
      msg: 'CantWithdrawMoreThanNftBoxActiveTokens',
    },
    {
      code: 6088,
      name: 'CantSetReturnAmountLessThanMinimum',
      msg: 'CantSetReturnAmountLessThanMinimum',
    },
    {
      code: 6089,
      name: 'CantSetBondDurationNotStandart',
      msg: 'CantSetBondDurationNotStandart',
    },
    {
      code: 6090,
      name: 'CanAddCollateralOnlyToInitializedFBond',
      msg: 'CanAddCollateralOnlyToInitializedFBond',
    },
    {
      code: 6091,
      name: 'OnlyIssuerCanAddCollateralBox',
      msg: 'OnlyIssuerCanAddCollateralBox',
    },
    {
      code: 6092,
      name: 'FBondTokenMintDoesntMatch',
      msg: 'FBondTokenMintDoesntMatch',
    },
    {
      code: 6093,
      name: 'CanActivateOnlyInitializedBond',
      msg: 'CanActivateOnlyInitializedBond',
    },
    {
      code: 6094,
      name: 'BondAuthorityIssuerDoesntMatch',
      msg: 'BondAuthorityIssuerDoesntMatch',
    },
    {
      code: 6095,
      name: 'CanRepayOnlyActivatedBond',
      msg: 'CanRepayOnlyActivatedBond',
    },
    {
      code: 6096,
      name: 'CanRedeemOnlyRepaidFBond',
      msg: 'CanRedeemOnlyRepaidFBond',
    },
    {
      code: 6097,
      name: 'CantSetNotRoundedAmountToReturn',
      msg: 'CantSetNotRoundedAmountToReturn',
    },
    {
      code: 6098,
      name: 'CanGetOnlyRepaidCollateral',
      msg: 'CanGetOnlyRepaidCollateral',
    },
    {
      code: 6099,
      name: 'CollateralTokenMintDoesntMatchBox',
      msg: 'CollateralTokenMintDoesntMatchBox',
    },
    {
      code: 6100,
      name: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation',
      msg: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation',
    },
    {
      code: 6101,
      name: 'WrongAdmin',
      msg: 'WrongAdmin',
    },
    {
      code: 6102,
      name: 'CanBurnEntireSupplyOnlyForActiveBond',
      msg: 'CanBurnEntireSupplyOnlyForActiveBond',
    },
    {
      code: 6103,
      name: 'UserDoesntOwnAllSupply',
      msg: 'UserDoesntOwnAllSupply',
    },
    {
      code: 6104,
      name: 'WrongAllSupplyBurner',
      msg: 'WrongAllSupplyBurner',
    },
    {
      code: 6105,
      name: 'LoanToValueFilterOutOfBound',
      msg: 'LoanToValueFilterOutOfBound',
    },
    {
      code: 6106,
      name: 'ValidationDoesntMatchPair',
      msg: 'ValidationDoesntMatchPair',
    },
    {
      code: 6107,
      name: 'CollateralBoxDoesntBelongFbond',
      msg: 'CollateralBoxDoesntBelongFbond',
    },
    {
      code: 6108,
      name: 'FraktMarketDoesntMatchHadoMarketRegistry',
      msg: 'FraktMarketDoesntMatchHadoMarketRegistry',
    },
    {
      code: 6109,
      name: 'FraktMarketNotActive',
      msg: 'FraktMarketNotActive',
    },
    {
      code: 6110,
      name: 'OracleFloorDoesntMatchFraktMarket',
      msg: 'OracleFloorDoesntMatchFraktMarket',
    },
    {
      code: 6111,
      name: 'FraktMarketDoesntMatchWhitelistEntry',
      msg: 'FraktMarketDoesntMatchWhitelistEntry',
    },
    {
      code: 6112,
      name: 'ActualLoanToValueExceedsFilter',
      msg: 'ActualLoanToValueExceedsFilter',
    },
    {
      code: 6113,
      name: 'PairDoesntMatchHadomarket',
      msg: 'PairDoesntMatchHadomarket',
    },
    {
      code: 6114,
      name: 'ActualLoanDurationExceedsFilter',
      msg: 'ActualLoanDurationExceedsFilter',
    },
    {
      code: 6115,
      name: 'NftIsNotMasterEdition',
      msg: 'NftIsNotMasterEdition',
    },
    {
      code: 6116,
      name: 'NftValidationAdapterIsExpired',
      msg: 'NftValidationAdapterIsExpired',
    },
    {
      code: 6117,
      name: 'CustomValidationAdapterProgramDoesntMatchUser',
      msg: 'CustomValidationAdapterProgramDoesntMatchUser',
    },
    {
      code: 6118,
      name: 'OnlyAdminCanInitializeFlashLoanPool',
      msg: 'OnlyAdminCanInitializeFlashLoanPool',
    },
    {
      code: 6119,
      name: 'CantSetLoanFeePointsGreaterThanBasePoints',
      msg: 'CantSetLoanFeePointsGreaterThanBasePoints',
    },
    {
      code: 6120,
      name: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity',
      msg: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity',
    },
    {
      code: 6121,
      name: 'CantWithdrawMoreThanPoolBalance',
      msg: 'CantWithdrawMoreThanPoolBalance',
    },
    {
      code: 6122,
      name: 'CantBorrowAndRepayByCpi',
      msg: 'CantBorrowAndRepayByCpi',
    },
    {
      code: 6123,
      name: 'RepayAmountDoesntCorrespondBorrowAmount',
      msg: 'RepayAmountDoesntCorrespondBorrowAmount',
    },
    {
      code: 6124,
      name: 'TransactionDoesntContainRepayInstruction',
      msg: 'TransactionDoesntContainRepayInstruction',
    },
    {
      code: 6125,
      name: 'AlreadyBorrowing',
      msg: 'AlreadyBorrowing',
    },
    {
      code: 6126,
      name: 'WrongHadeswapProgramId',
      msg: 'WrongHadeswapProgramId',
    },
    {
      code: 6127,
      name: 'AmountToReturnIsHigherThanMax',
      msg: 'AmountToReturnIsHigherThanMax',
    },
    {
      code: 6128,
      name: 'AutocompoundNotSupportedYet',
      msg: 'AutocompoundNotSupportedYet',
    },
    {
      code: 6129,
      name: 'AutocompoundDepositIsNotActive',
      msg: 'AutocompoundDepositIsNotActive',
    },
    {
      code: 6130,
      name: 'AutocompoundDepositDoesntMatchPair',
      msg: 'AutocompoundDepositDoesntMatchPair',
    },
    {
      code: 6131,
      name: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair',
      msg: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair',
    },
    {
      code: 6132,
      name: 'InvalidAssetReceiverTokenAccount',
      msg: 'InvalidAssetReceiverTokenAccount',
    },
    {
      code: 6133,
      name: 'AutoreceiveSolToUserFeatureNotEnabled',
      msg: 'AutoreceiveSolToUserFeatureNotEnabled',
    },
    {
      code: 6134,
      name: 'AutocompoundFeatureNotEnabled',
      msg: 'AutocompoundFeatureNotEnabled',
    },
    {
      code: 6135,
      name: 'InvalidAssetReceiver',
      msg: 'InvalidAssetReceiver',
    },
    {
      code: 6136,
      name: 'BondCollateralOrSolReceiverNotUser',
      msg: 'BondCollateralOrSolReceiverNotUser',
    },
    {
      code: 6137,
      name: 'OnlyBuyPairsAreSupported',
      msg: 'OnlyBuyPairsAreSupported',
    },
    {
      code: 6138,
      name: 'CanModifyOnlyTokenForNftPairs',
      msg: 'CanModifyOnlyTokenForNftPairs',
    },
    {
      code: 6139,
      name: 'OraclePriceIsStale',
      msg: 'OraclePriceIsStale',
    },
    {
      code: 6140,
      name: 'NftLiquidationTimeNotPassed',
      msg: 'NftLiquidationTimeNotPassed',
    },
    {
      code: 6141,
      name: 'CanDepositReturnedSolOnlyToLiquidatingBond',
      msg: 'CanDepositReturnedSolOnlyToLiquidatingBond',
    },
    {
      code: 6142,
      name: 'Debugger',
      msg: 'Debugger',
    },
    {
      code: 6143,
      name: 'NotSupportedSellCase',
      msg: 'NotSupportedSellCase',
    },
    {
      code: 6144,
      name: 'CollateralTokenMintDoesntMatchAutocompoundDeposit',
      msg: 'CollateralTokenMintDoesntMatchAutocompoundDeposit',
    },
    {
      code: 6145,
      name: 'NotCorrectAutocompoundType',
      msg: 'NotCorrectAutocompoundType',
    },
    {
      code: 6146,
      name: 'BadRuleSet',
      msg: 'BadRuleSet',
    },
    {
      code: 6147,
      name: 'DelegateBuilderFailed',
      msg: 'DelegateBuilderFailed',
    },
    {
      code: 6148,
      name: 'LockBuilderFailed',
      msg: 'LockBuilderFailed',
    },
    {
      code: 6149,
      name: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed',
      msg: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed',
    },
    {
      code: 6150,
      name: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit',
      msg: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit',
    },
    {
      code: 6151,
      name: 'CollateralOwnerDoesntMatchCollateralTokenAccount',
      msg: 'CollateralOwnerDoesntMatchCollateralTokenAccount',
    },
    {
      code: 6152,
      name: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver',
      msg: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver',
    },
    {
      code: 6153,
      name: 'MerkleTreeIsNotSupported',
      msg: 'MerkleTreeIsNotSupported',
    },
    {
      code: 6154,
      name: 'UserDoesntHaveEnoughBalance',
      msg: 'UserDoesntHaveEnoughBalance',
    },
    {
      code: 6155,
      name: 'CantSellToBuggedNegativeInterestPair',
      msg: 'CantSellToBuggedNegativeInterestPair',
    },
    {
      code: 6156,
      name: 'ThisCollectionIsDisabled',
      msg: 'ThisCollectionIsDisabled',
    },
    {
      code: 6157,
      name: 'InvalidMutualBondOfferDepositVault',
      msg: 'InvalidMutualBondOfferDepositVault',
    },
    {
      code: 6158,
      name: 'OnlyBondOfferDepositsAndFullBondAreSupported',
      msg: 'OnlyBondOfferDepositsAndFullBondAreSupported',
    },
    {
      code: 6159,
      name: 'MerkleTreeWhitelistIsNotSupported',
      msg: 'MerkleTreeWhitelistIsNotSupported',
    },
    {
      code: 6160,
      name: 'CantSellZero',
      msg: 'CantSellZero',
    },
    {
      code: 6161,
      name: 'BondOfferHadoMarketDoesntMatch',
      msg: 'BondOfferHadoMarketDoesntMatch',
    },
    {
      code: 6162,
      name: 'FundsSolVaultPdaIsIncorrect',
      msg: 'FundsSolVaultPdaIsIncorrect',
    },
    {
      code: 6163,
      name: 'BondOfferVaultPdaIsIncorrect',
      msg: 'BondOfferVaultPdaIsIncorrect',
    },
    {
      code: 6164,
      name: 'BondTradeTransactionV3PdaIsIncorrect',
      msg: 'BondTradeTransactionV3PdaIsIncorrect',
    },
    {
      code: 6165,
      name: 'BondBalancesBeforeAndAfterInstructionDontMatch',
      msg: 'BondBalancesBeforeAndAfterInstructionDontMatch',
    },
    {
      code: 6166,
      name: 'NotAuthorizedToRemoveBondOffer',
      msg: 'NotAuthorizedToRemoveBondOffer',
    },
    {
      code: 6167,
      name: 'CantUpdateRemovedBondOffer',
      msg: 'CantUpdateRemovedBondOffer',
    },
    {
      code: 6168,
      name: 'BondTradeTransactionNotActive',
      msg: 'BondTradeTransactionNotActive',
    },
    {
      code: 6169,
      name: 'BondOfferDoesntMatchTradeTransaction',
      msg: 'BondOfferDoesntMatchTradeTransaction',
    },
    {
      code: 6170,
      name: 'ReceiveNftIsNotOption',
      msg: 'ReceiveNftIsNotOption',
    },
    {
      code: 6171,
      name: 'CanLiquidateOnlyActiveBond',
      msg: 'CanLiquidateOnlyActiveBond',
    },
    {
      code: 6172,
      name: 'CollateralBoxDoesntMatchFbond',
      msg: 'CollateralBoxDoesntMatchFbond',
    },
    {
      code: 6173,
      name: 'AutocompoundPairShouldBeOnMarketVirtual',
      msg: 'AutocompoundPairShouldBeOnMarketVirtual',
    },
    {
      code: 6174,
      name: 'UserDoesntOwnHisBondTradeTransaction',
      msg: 'UserDoesntOwnHisBondTradeTransaction',
    },
    {
      code: 6175,
      name: 'UsersBondTradeTransactionHasIncorrectFbondTokenMint',
      msg: 'UsersBondTradeTransactionHasIncorrectFbondTokenMint',
    },
    {
      code: 6176,
      name: 'UsersBondTradeTransactionIsInactive',
      msg: 'UsersBondTradeTransactionIsInactive',
    },
    {
      code: 6177,
      name: 'SumOfBondsInExitingTradeTransactionsDoesntMatchTotalAmountToSell',
      msg: 'SumOfBondsInExitingTradeTransactionsDoesntMatchTotalAmountToSell',
    },
    {
      code: 6178,
      name: 'CantSellNotFullBondsSupplyOnRefinance',
      msg: 'CantSellNotFullBondsSupplyOnRefinance',
    },
    {
      code: 6179,
      name: 'OnlyAdminCanMigrate',
      msg: 'OnlyAdminCanMigrate',
    },
    {
      code: 6180,
      name: 'BondFeaturesNoneAndReceiveNftOnLiquidationAreNotSupported',
      msg: 'BondFeaturesNoneAndReceiveNftOnLiquidationAreNotSupported',
    },
    {
      code: 6181,
      name: 'SomethingWrongWithMigrationBondOfferIsMissing',
      msg: 'SomethingWrongWithMigrationBondOfferIsMissing',
    },
    {
      code: 6182,
      name: 'SecondAddressIsNotUserOrBondOffer',
      msg: 'SecondAddressIsNotUserOrBondOffer',
    },
    {
      code: 6183,
      name: 'SumOfBondsInRepayDoesntMatchBondsSupply',
      msg: 'SumOfBondsInRepayDoesntMatchBondsSupply',
    },
    {
      code: 6184,
      name: 'CantBuyoutForLowerThanMinimumPrice',
      msg: 'CantBuyoutForLowerThanMinimumPrice',
    },
    {
      code: 6185,
      name: 'CantBuyoutNftOnDutchAuctionWhenThereAreOnlyOneLender',
      msg: 'CantBuyoutNftOnDutchAuctionWhenThereAreOnlyOneLender',
    },
    {
      code: 6186,
      name: 'ThereAreMoreThanOneLenderOfThisBond',
      msg: 'ThereAreMoreThanOneLenderOfThisBond',
    },
    {
      code: 6187,
      name: 'TradeTransactionDoesntMatchBond',
      msg: 'TradeTransactionDoesntMatchBond',
    },
    {
      code: 6188,
      name: 'CantLiquidatePerpetualBonds',
      msg: 'CantLiquidatePerpetualBonds',
    },
    {
      code: 6189,
      name: 'CantRepayExpiredReceivingCollateralLoan',
      msg: 'CantRepayExpiredReceivingCollateralLoan',
    },
    {
      code: 6190,
      name: 'DisabledPairsWithMoreThanOneOrder',
      msg: 'DisabledPairsWithMoreThanOneOrder',
    },
    {
      code: 6191,
      name: 'CollectionIsDisabled',
      msg: 'CollectionIsDisabled',
    },
    {
      code: 6192,
      name: 'ShouldBeEscrow',
      msg: 'ShouldBeEscrow',
    },
    {
      code: 6193,
      name: 'EscrowLoansNotSupported',
      msg: 'EscrowLoansNotSupported',
    },
    {
      code: 6194,
      name: 'OnlyBanxIsSupportedForStaking',
      msg: 'OnlyBanxIsSupportedForStaking',
    },
    {
      code: 6195,
      name: 'UserDoesntOwnStake',
      msg: 'UserDoesntOwnStake',
    },
    {
      code: 6196,
      name: 'BanxIsNotStaked',
      msg: 'BanxIsNotStaked',
    },
    {
      code: 6197,
      name: 'CantUnstakeLoanedBanx',
      msg: 'CantUnstakeLoanedBanx',
    },
    {
      code: 6198,
      name: 'WrongCollateralTokenAccount',
      msg: 'WrongCollateralTokenAccount',
    },
    {
      code: 6199,
      name: 'WrongNftMint',
      msg: 'WrongNftMint',
    },
    {
      code: 6200,
      name: 'CantUnstakeWithActiveSubscriptions',
      msg: 'CantUnstakeWithActiveSubscriptions',
    },
    {
      code: 6201,
      name: 'AdventureDoesntLayOnCurve',
      msg: 'AdventureDoesntLayOnCurve',
    },
    {
      code: 6202,
      name: 'CantSubscribeToPassedWeek',
      msg: 'CantSubscribeToPassedWeek',
    },
    {
      code: 6203,
      name: 'CantHaveMoreThanThreeSubscriptions',
      msg: 'CantHaveMoreThanThreeSubscriptions',
    },
    {
      code: 6204,
      name: 'CantSubscribeMoreThanThreeWeeksAhead',
      msg: 'CantSubscribeMoreThanThreeWeeksAhead',
    },
    {
      code: 6205,
      name: 'CantUnsubscribeFromPassedAdventureNeedToHarvest',
      msg: 'CantUnsubscribeFromPassedAdventureNeedToHarvest',
    },
    {
      code: 6206,
      name: 'AlreadyUnsubscribedOrHarvested',
      msg: 'AlreadyUnsubscribedOrHarvested',
    },
    {
      code: 6207,
      name: 'CantHarvestNotEndedAdventures',
      msg: 'CantHarvestNotEndedAdventures',
    },
    {
      code: 6208,
      name: 'SubscriptionDoesntMatchAdventure',
      msg: 'SubscriptionDoesntMatchAdventure',
    },
    {
      code: 6209,
      name: 'RefinanceAuctionNotStartedYet',
      msg: 'RefinanceAuctionNotStartedYet',
    },
    {
      code: 6210,
      name: 'AdventureSubscriptionPdaIsIncorrect',
      msg: 'AdventureSubscriptionPdaIsIncorrect',
    },
    {
      code: 6211,
      name: 'BanxIsAlreadyLoaned',
      msg: 'BanxIsAlreadyLoaned',
    },
    {
      code: 6212,
      name: 'CantStandartRepayStakedBanx',
      msg: 'CantStandartRepayStakedBanx',
    },
    {
      code: 6213,
      name: 'StakeDoesntBelongToBond',
      msg: 'StakeDoesntBelongToBond',
    },
    {
      code: 6214,
      name: 'FirstAdventureNotFound',
      msg: 'FirstAdventureNotFound',
    },
    {
      code: 6215,
      name: 'BanxUserIsntFbondIssuer',
      msg: 'BanxUserIsntFbondIssuer',
    },
    {
      code: 6216,
      name: 'ConstantBidCapExceeded',
      msg: 'ConstantBidCapExceeded',
    },
    {
      code: 6217,
      name: 'TotalLoanValueIsMoreThanMaxOfferValue',
      msg: 'TotalLoanValueIsMoreThanMaxOfferValue',
    },
    {
      code: 6218,
      name: 'NeedToRepayAllTradeTransactions',
      msg: 'NeedToRepayAllTradeTransactions',
    },
    {
      code: 6219,
      name: 'SubscriptionDoesntBelongToStake',
      msg: 'SubscriptionDoesntBelongToStake',
    },
    {
      code: 6220,
      name: 'OnlyMerkleTreeWhitelistTypeAllowedForCnft',
      msg: 'OnlyMerkleTreeWhitelistTypeAllowedForCnft',
    },
    {
      code: 6221,
      name: 'BanxIsNotCnft',
      msg: 'BanxIsNotCnft',
    },
    {
      code: 6222,
      name: 'OnlyPerpetualMarketsAreSupported',
      msg: 'OnlyPerpetualMarketsAreSupported',
    },
    {
      code: 6223,
      name: 'UserDoesntOwnHadomarket',
      msg: 'UserDoesntOwnHadomarket',
    },
    {
      code: 6224,
      name: 'TokenAccountDoentMatchUserOrToken',
      msg: 'TokenAccountDoentMatchUserOrToken',
    },
    {
      code: 6225,
      name: 'FraktBondPdaIsIncorrect',
      msg: 'FraktBondPdaIsIncorrect',
    },
    {
      code: 6226,
      name: 'FinishAllGood',
      msg: 'FinishAllGood',
    },
    {
      code: 6227,
      name: 'UserDoesntOwnLiquidatedBond',
      msg: 'UserDoesntOwnLiquidatedBond',
    },
    {
      code: 6228,
      name: 'BondTradeTransactionIsNotTerminating',
      msg: 'BondTradeTransactionIsNotTerminating',
    },
    {
      code: 6229,
      name: 'LoanIsNotLiquidatedYet',
      msg: 'LoanIsNotLiquidatedYet',
    },
    {
      code: 6230,
      name: 'TokenMintDoesntBelongBond',
      msg: 'TokenMintDoesntBelongBond',
    },
    {
      code: 6231,
      name: 'LoanIsAlreadyTerminated',
      msg: 'LoanIsAlreadyTerminated',
    },
    {
      code: 6232,
      name: 'LenderDoesntMatchTradeTxn',
      msg: 'LenderDoesntMatchTradeTxn',
    },
    {
      code: 6233,
      name: 'CanRefinanceOnlyActiveLoan',
      msg: 'CanRefinanceOnlyActiveLoan',
    },
    {
      code: 6234,
      name: 'HadoMarketDoesntMatchBond',
      msg: 'HadoMarketDoesntMatchBond',
    },
    {
      code: 6235,
      name: 'BondOfferDoesntMatchHadoMarket',
      msg: 'BondOfferDoesntMatchHadoMarket',
    },
    {
      code: 6236,
      name: 'LoanIsNotActive',
      msg: 'LoanIsNotActive',
    },
    {
      code: 6237,
      name: 'CantBorrowZero',
      msg: 'CantBorrowZero',
    },
    {
      code: 6238,
      name: 'LoanIsAlreadyLiquidated',
      msg: 'LoanIsAlreadyLiquidated',
    },
    {
      code: 6239,
      name: 'RepayFractionIsIncorrect',
      msg: "Can't repay partial 0 or 100%+",
    },
    {
      code: 6240,
      name: 'WrongStakedBanxHadoMarket',
      msg: 'WrongStakedBanxHadoMarket',
    },
    {
      code: 6241,
      name: 'StakedBanxHadoMarket',
      msg: 'StakedBanxHadoMarket',
    },
    {
      code: 6242,
      name: 'Not63PointsBanx',
      msg: 'Not63PointsBanx',
    },
    {
      code: 6243,
      name: 'BanxStakeDoesntMatchBond',
      msg: 'BanxStakeDoesntMatchBond',
    },
    {
      code: 6244,
      name: 'BondOfferShouldBeBondingCurve',
      msg: 'BondOfferShouldBeBondingCurve',
    },
    {
      code: 6245,
      name: 'BondOfferShouldBePerpetualOffer',
      msg: 'BondOfferShouldBePerpetualOffer',
    },
    {
      code: 6246,
      name: 'ProtocolFeeReceiverIsIncorrect',
      msg: 'ProtocolFeeReceiverIsIncorrect',
    },
    {
      code: 6247,
      name: 'RoundIsNotOpen',
      msg: 'RoundIsNotOpen',
    },
    {
      code: 6248,
      name: 'RoundIsOpen',
      msg: 'RoundIsOpen',
    },
    {
      code: 6249,
      name: 'LessThenMinDeposit',
      msg: 'LessThenMinDeposit',
    },
    {
      code: 6250,
      name: 'LastRoundIsOpen',
      msg: 'LastRoundIsOpen',
    },
    {
      code: 6251,
      name: 'RoundPdaIsIncorrect',
      msg: 'RoundPdaIsIncorrect',
    },
    {
      code: 6252,
      name: 'WrongRoundNumber',
      msg: 'WrongRoundNumber',
    },
    {
      code: 6253,
      name: 'UserIsNotWinner',
      msg: 'UserIsNotWinner',
    },
    {
      code: 6254,
      name: 'RewardsAlreadyClaimed',
      msg: 'RewardsAlreadyClaimed',
    },
    {
      code: 6255,
      name: 'AddressMismatch',
      msg: 'Address Mismatch',
    },
    {
      code: 6256,
      name: 'ProgramMismatch',
      msg: 'Program Mismatch',
    },
    {
      code: 6257,
      name: 'MissingRepay',
      msg: 'Missing Repay',
    },
    {
      code: 6258,
      name: 'IncorrectOwner',
      msg: 'Incorrect Owner',
    },
    {
      code: 6259,
      name: 'IncorrectProgramAuthority',
      msg: 'Incorrect Program Authority',
    },
    {
      code: 6260,
      name: 'CannotBorrowBeforeRepay',
      msg: 'Cannot Borrow Before Repay',
    },
    {
      code: 6261,
      name: 'UnknownInstruction',
      msg: 'Unknown Instruction',
    },
    {
      code: 6262,
      name: 'ToNewBondOffer',
      msg: 'ToNewBondOffer',
    },
    {
      code: 6263,
      name: 'JackpotAlreadyClaimed',
      msg: 'JackpotAlreadyClaimed',
    },
    {
      code: 6264,
      name: 'UserDoNotHaveJackpot',
      msg: 'UserDoNotHaveJackpot',
    },
    {
      code: 6265,
      name: 'RakebackAlreadyClaimed',
      msg: 'RakebackAlreadyClaimed',
    },
    {
      code: 6266,
      name: 'RakebackLocked',
      msg: 'RakebackLocked',
    },
    {
      code: 6267,
      name: 'LastOrderIsLowerThanZero',
      msg: 'LastOrderIsLowerThanZero',
    },
    {
      code: 6268,
      name: 'OnlyLinearCurveIsSupported',
      msg: 'OnlyLinearCurveIsSupported',
    },
    {
      code: 6269,
      name: 'CantRefinanceFromSameOffer',
      msg: 'CantRefinanceFromSameOffer',
    },
    {
      code: 6270,
      name: 'CantRefinanceFromNotSameTypeOffers',
      msg: 'CantRefinanceFromNotSameTypeOffers',
    },
    {
      code: 6271,
      name: 'ReservesCantBecomeNegative',
      msg: "Reserves are negative somehow, it's error",
    },
    {
      code: 6272,
      name: 'FacelessShouldBeMigratedInSpecialWay',
      msg: 'FacelessShouldBeMigratedInSpecialWay',
    },
    {
      code: 6273,
      name: 'OfferDoesntBelongToTradeTransaction',
      msg: 'OfferDoesntBelongToTradeTransaction',
    },
    {
      code: 6274,
      name: 'IncorrectAdditionalParticipant',
      msg: 'IncorrectAdditionalParticipant',
    },
    {
      code: 6275,
      name: 'BanxIsNotLocked',
      msg: 'BanxIsNotLocked',
    },
    {
      code: 6276,
      name: 'InstructionIsDisabled',
      msg: 'InstructionIsDisabled',
    },
    {
      code: 6277,
      name: 'WrongCreator',
      msg: 'WrongCreator',
    },
    {
      code: 6278,
      name: 'ThisUserCantRepay',
      msg: 'ThisUserCantRepay',
    },
    {
      code: 6279,
      name: 'AprIsOutOfBound',
      msg: 'AprIsOutOfBound',
    },
    {
      code: 6280,
      name: 'CanNotCallMoreThanBorrowedAmount',
      msg: 'CanNotCallMoreThanBorrowedAmount',
    },
    {
      code: 6281,
      name: 'IncorrectRedeemResult',
      msg: 'IncorrectRedeemResult',
    },
    {
      code: 6282,
      name: 'AlreadyMigrated',
      msg: 'AlreadyMigrated',
    },
    {
      code: 6283,
      name: 'WrongFbond',
      msg: 'WrongFbond',
    },
    {
      code: 6284,
      name: 'NothingToSubscribe',
      msg: 'NothingToSubscribe',
    },
    {
      code: 6285,
      name: 'BanxAdventurePdaIsIncorrect',
      msg: 'BanxAdventurePdaIsIncorrect',
    },
    {
      code: 6286,
      name: 'BanxTokensInTwoWeeksLock',
      msg: 'Banx tokens in two weeks lock',
    },
    {
      code: 6287,
      name: 'BanxAdventureInProgress',
      msg: "Can't claim before end adventure",
    },
    {
      code: 6288,
      name: 'MaxTokensStaked',
      msg: 'Max amount of tokens staked',
    },
    {
      code: 6289,
      name: 'WrongVaultTokenAccount',
      msg: 'Wrong vault token account',
    },
    {
      code: 6290,
      name: 'WrongBondOfferBondingType',
      msg: 'Wrong bond offer bonding type',
    },
    {
      code: 6291,
      name: 'InvalidLendingTokenMint',
      msg: 'InvalidLendingTokenMint',
    },
    {
      code: 6292,
      name: 'NotBorrowerListing',
      msg: 'Not borrower listing',
    },
    {
      code: 6293,
      name: 'TerminationFreezePeriod',
      msg: 'TerminationFreezePeriod',
    },
    {
      code: 6294,
      name: 'NotSplToken',
      msg: 'NotSplToken',
    },
  ],
}
