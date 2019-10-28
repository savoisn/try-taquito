# Contract operations using Taquito

This is a simple example to show how to interact with a Tezos node
using the [Taquito](https://tezostaquito.io) JS library.

The scripts connects to a Babylonnet Tezos node (with RPC openly available)
and performs simple operations, such as retrieving the balance for a contract,
originating a contract, and calling a contract operation.

The contract used for this example comes from the smartpy [online editor](https://smartpy.io/demo/)
(calculator template). It provides several entrypoints to compute arithmetic
operations. The contract storage is updated with the result of the operation.

The main script is `try-taquito.js`. The contract (JSON representation) is
in `calculator.js`.

## Usage

First install all the packages
```
npm install
```

Then run the script

```
npm run build # transpile to ES2015
node dist/try-taquito.js
```

or,

```
npx babel-node src/try-taquito.js
```

This should result in something like this (this may take a few minutes)
```
▶ npx babel-node src/try-taquito.js
retrieve balance of tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh
374735336843
transfer 0.001 from tz1bj2FcWqSqm9VEvuMDP7Y33d7bttRTwquB to tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh
wait for confirmation for oooxd5b4J9GYxqTdpjuCDVbfULREmwoUmuMqxLfPTwYbXLiDqRK
374660337843
originate calculator contract
wait for confirmation for ooMDriXuJGAUCQZUHMranbqXiCK47FYrAMF8StBrt3XnN4czwA3
call multiply method of contract (5, 4)
wait for confirmation for oorhDAFXb7Yaxdj4ySbWvTnfnPyLzu7SGwSq46GjAV17Xyu7Gmv
Storage [ 20 ]
```

One can see the resulting operations on the *Babylonnet* block chain using
a [block explorer](https://tezos.id).


## Remarks

The script may need some adjusment.

This may need to be replaced by another node, should it become unavailable.
```js
const server = 'http://babylonnet.cryptium.ch:8732';
```

This identity has been generated using the [alphanet faucet](https://tezos.gitlab.io/alphanet/introduction/howtouse.html). It will be invalidated
after a babylonnet reset and need to be regenerated.
```js
const identity1_sk = 'edsk3wCATYvr5RkWentwDRbShocUtUsJMQgtLsqrkXP81VRMCnPVsf';
const identity1 = 'tz1bj2FcWqSqm9VEvuMDP7Y33d7bttRTwquB';
```

The contract in `calculator.js` is a JSON representation of a Michelson
contract. It can be generated using `tezos-client` (Taquito supports
Michelson parsing, but it is still beta).

## Sandbox mode

The script can also be  adjusted to work in sandbox mode, see the comments
in the code, or simply use branch `sandbox`.

To run a node and a baker in sandbox mode, you can use a docker image,
or you can use the following script on the tezos repository branch
`try-taquito`.

```
▶ ./tests_python/scripts/run_node_baker.py
```

This runs a node and a baker, which bakes and displays blocks every 2 seconds.