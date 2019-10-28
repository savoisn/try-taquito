import { Tezos } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { calculator_json } from './calculator';

const identity1_sk = 'edsk3gUfUPyBSfrS9CCgmCiQsTCHGkviBDusMxDJstFtojtc1zcpsh';
const identity1 = 'tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx';  // bootstrap1
const identity2 = 'tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN';  // bootstrap2
const server = 'http://127.0.0.1:18731';

const f = async x => {

    // sandbox mode
    Tezos.setProvider({
        signer: new InMemorySigner(identity1_sk),
        rpc: server,
    });

    try {

        const contract = await Tezos.contract.at("KT1M75eyHFAjUtbZFF7SaVvHmqv82zLvh4rR")
        const id = 'tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv'

        const op = await contract.provider.transfer({
            to: contract.address,
            amount: 0,
            fee: 10000001,
            parameter: {
                entrypoint: 'booked',
                value: {"address":id},
            },
            rawParam: true,
        })
        const storage = await contract.storage()
        console.log('Storage', storage)

        // const op = await contract.methods.booked({"address":id}).send()
        console.log(`wait for confirmation for ${op.hash}`)
        await op.confirmation()

        const storage2 = await contract.storage()
        console.log('Storage', storage2)


    } catch (e) {
        console.error(e)
    }
}

f()