import { Tezos } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { calculator_json } from './calculator';

// identity1 has been generated using the alphanet faucet
// https://tezos.gitlab.io/alphanet/introduction/howtouse.html
// identity2 is just some existing identity on the network
// Babylonnet

// const identity1_sk = 'edsk3wCATYvr5RkWentwDRbShocUtUsJMQgtLsqrkXP81VRMCnPVsf';
// const identity1 = 'tz1bj2FcWqSqm9VEvuMDP7Y33d7bttRTwquB';
// const identity2 = 'tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh';
// const server = 'http://babylonnet.cryptium.ch:8732';


// Alternatively, one can use a sandbox node (private node running locally)
// See https://tezos.gitlab.io/alphanet/user/sandbox.html
// One should also run a local baker. Make sure you're using the `babylonet`
// branch.
//
// The sandbox node is configured with a few predefined identities with a
// non-null balance.
const identity1_sk = 'edsk3gUfUPyBSfrS9CCgmCiQsTCHGkviBDusMxDJstFtojtc1zcpsh';
const identity1 = 'tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx';  // bootstrap1
const identity2 = 'tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN';  // bootstrap2
const server = 'http://127.0.0.1:18731';
//
// In sandbox mode, change the confirmation parameters for confirmation
// methods. E.g.
// await op.confirmation(0, 0.5, 20);
// await origination.contract(0, 0.5, 20);
// This is needed because baking time is only 1s (compared to 20+ seconds)
// on test network

const f = async x => {

    // sandbox mode
    Tezos.setProvider({
        signer: new InMemorySigner(identity1_sk),
        rpc: server,
    });

    try {

        console.log(`retrieve balance of ${identity2}`)
        const bal1 = await Tezos.tz.getBalance(identity2);
        console.log(bal1.c[0])

        const amount = 0.001;
        console.log(`transfer ${amount} from ${identity1} to ${identity2}`)
        const op1 = await Tezos.contract.transfer({ to: identity2, amount: 0.001 });
        console.log(`wait for confirmation for ${op1.hash}`)

        await op1.confirmation();

        const bal2 = await Tezos.tz.getBalance(identity2);
        console.log(bal2.c[0])

        console.log('originate calculator contract')
        const origination = await Tezos.contract.originate({
            code: calculator_json, balance:1, init: '0'
        });
        console.log(`wait for confirmation for ${origination.hash}`)

        const contract = await origination.contract();

        const x = 5;
        const y = 4;
        console.log(`call multiply method of contract (${x}, ${y})`)
        const op2 = await contract.methods.multiply(x, y).send()
        console.log(`wait for confirmation for ${op2.hash}`)
        await op2.confirmation();

        const storage2 = await contract.storage()
        console.log('Storage', storage2.c)

    } catch (e) {
        console.error(e)
    }
}

f()