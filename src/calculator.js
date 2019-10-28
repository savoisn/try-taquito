
// this is the calculator contract (in json format) provided as a template
// on smartpy website. see https://smartpy.io/demo/

export const calculator_json =
    [{
        "prim": "parameter",
        "args":
            [{
                "prim": "or",
                "args":
                    [{
                        "prim": "or",
                        "args":
                            [{
                                "prim": "or",
                                "args":
                                    [{
                                        "prim": "or",
                                        "args":
                                            [{
                                                "prim": "or",
                                                "args":
                                                    [{
                                                        "prim": "pair",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat",
                                                                "annots":
                                                                    ["%x"]
                                                            },
                                                            {
                                                                "prim":
                                                                    "nat",
                                                                "annots":
                                                                    ["%y"]
                                                            }],
                                                        "annots":
                                                            ["%add"]
                                                    },
                                                    {
                                                        "prim": "nat",
                                                        "annots":
                                                            ["%factorial"]
                                                    }]
                                            },
                                            {
                                                "prim": "nat",
                                                "annots": ["%log2"]
                                            }]
                                    },
                                    {
                                        "prim": "pair",
                                        "args":
                                            [{
                                                "prim": "nat",
                                                "annots": ["%x"]
                                            },
                                            {
                                                "prim": "nat",
                                                "annots": ["%y"]
                                            }],
                                        "annots": ["%multiply"]
                                    }]
                            },
                            {
                                "prim": "nat",
                                "annots": ["%square"]
                            }]
                    },
                    {
                        "prim": "nat",
                        "annots": ["%squareRoot"]
                    }]
            }]
    },
    { "prim": "storage", "args": [{ "prim": "nat" }] },
    {
        "prim": "code",
        "args":
            [[{ "prim": "DUP" }, { "prim": "CDR" },
            { "prim": "SWAP" }, { "prim": "CAR" },
            {
                "prim": "IF_LEFT",
                "args":
                    [[{
                        "prim": "IF_LEFT",
                        "args":
                            [[{
                                "prim": "IF_LEFT",
                                "args":
                                    [[{
                                        "prim": "IF_LEFT",
                                        "args":
                                            [[{
                                                "prim":
                                                    "IF_LEFT",
                                                "args":
                                                    [[{
                                                        "prim":
                                                            "PAIR"
                                                    },
                                                    {
                                                        "prim":
                                                            "DUP"
                                                    },
                                                    {
                                                        "prim":
                                                            "DUP"
                                                    },
                                                    [{
                                                        "prim":
                                                            "CAR"
                                                    },
                                                    {
                                                        "prim":
                                                            "CDR"
                                                    }],
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    },
                                                    [{
                                                        "prim":
                                                            "CAR"
                                                    },
                                                    {
                                                        "prim":
                                                            "CAR"
                                                    }],
                                                    {
                                                        "prim":
                                                            "ADD"
                                                    },
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    },
                                                    {
                                                        "prim":
                                                            "DROP"
                                                    }],
                                                    [{
                                                        "prim":
                                                            "PAIR"
                                                    },
                                                    {
                                                        "prim":
                                                            "CAR"
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "1"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    },
                                                    {
                                                        "prim":
                                                            "PAIR"
                                                    },
                                                    {
                                                        "prim":
                                                            "DUP"
                                                    },
                                                    {
                                                        "prim":
                                                            "CAR"
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "1"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "ADD"
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "1"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "1"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "0"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "COMPARE"
                                                    },
                                                    {
                                                        "prim":
                                                            "EQ"
                                                    },
                                                    {
                                                        "prim":
                                                            "IF",
                                                        "args":
                                                            [[{
                                                                "prim":
                                                                    "DUP"
                                                            },
                                                            [{
                                                                "prim":
                                                                    "DIP",
                                                                "args":
                                                                    [[{
                                                                        "prim":
                                                                            "DIP",
                                                                        "args":
                                                                            [[{
                                                                                "prim":
                                                                                    "DUP"
                                                                            }]]
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "SWAP"
                                                                    }]]
                                                            },
                                                            {
                                                                "prim":
                                                                    "SWAP"
                                                            }],
                                                            {
                                                                "prim":
                                                                    "COMPARE"
                                                            },
                                                            {
                                                                "prim":
                                                                    "LT"
                                                            },
                                                            {
                                                                "prim":
                                                                    "LOOP",
                                                                "args":
                                                                    [[{
                                                                        "prim":
                                                                            "DUP"
                                                                    },
                                                                    [{
                                                                        "prim":
                                                                            "DIP",
                                                                        "args":
                                                                            [[{
                                                                                "prim":
                                                                                    "DIP",
                                                                                "args":
                                                                                    [[{
                                                                                        "prim":
                                                                                            "DIP",
                                                                                        "args":
                                                                                            [[{
                                                                                                "prim":
                                                                                                    "DUP"
                                                                                            }]]
                                                                                    },
                                                                                    {
                                                                                        "prim":
                                                                                            "SWAP"
                                                                                    }]]
                                                                            },
                                                                            {
                                                                                "prim":
                                                                                    "SWAP"
                                                                            }]]
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "SWAP"
                                                                    }],
                                                                    {
                                                                        "prim":
                                                                            "CDR"
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "MUL"
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "SWAP"
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "DIP",
                                                                        "args":
                                                                            [[{
                                                                                "prim":
                                                                                    "SWAP"
                                                                            },
                                                                            {
                                                                                "prim":
                                                                                    "DIP",
                                                                                "args":
                                                                                    [[{
                                                                                        "prim":
                                                                                            "SWAP"
                                                                                    },
                                                                                    {
                                                                                        "prim":
                                                                                            "CAR"
                                                                                    },
                                                                                    {
                                                                                        "prim":
                                                                                            "PAIR"
                                                                                    }]]
                                                                            }]]
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "PUSH",
                                                                        "args":
                                                                            [{
                                                                                "prim":
                                                                                    "nat"
                                                                            },
                                                                            {
                                                                                "int":
                                                                                    "1"
                                                                            }]
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "ADD"
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "DUP"
                                                                    },
                                                                    [{
                                                                        "prim":
                                                                            "DIP",
                                                                        "args":
                                                                            [[{
                                                                                "prim":
                                                                                    "DIP",
                                                                                "args":
                                                                                    [[{
                                                                                        "prim":
                                                                                            "DUP"
                                                                                    }]]
                                                                            },
                                                                            {
                                                                                "prim":
                                                                                    "SWAP"
                                                                            }]]
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "SWAP"
                                                                    }],
                                                                    {
                                                                        "prim":
                                                                            "COMPARE"
                                                                    },
                                                                    {
                                                                        "prim":
                                                                            "LT"
                                                                    }]]
                                                            }],
                                                            [{
                                                                "prim":
                                                                    "PUSH",
                                                                "args":
                                                                    [{
                                                                        "prim":
                                                                            "string"
                                                                    },
                                                                    {
                                                                        "string":
                                                                            "step size is 0"
                                                                    }]
                                                            },
                                                            {
                                                                "prim":
                                                                    "FAILWITH"
                                                            }]]
                                                    },
                                                    {
                                                        "prim":
                                                            "DROP"
                                                    },
                                                    {
                                                        "prim":
                                                            "DROP"
                                                    },
                                                    {
                                                        "prim":
                                                            "CDR"
                                                    }]]
                                            }],
                                            [{
                                                "prim":
                                                    "PAIR"
                                            },
                                            {
                                                "prim":
                                                    "CAR"
                                            },
                                            {
                                                "prim":
                                                    "PUSH",
                                                "args":
                                                    [{
                                                        "prim":
                                                            "nat"
                                                    },
                                                    {
                                                        "int":
                                                            "0"
                                                    }]
                                            },
                                            {
                                                "prim":
                                                    "SWAP"
                                            },
                                            {
                                                "prim":
                                                    "PAIR"
                                            },
                                            {
                                                "prim":
                                                    "DUP"
                                            },
                                            {
                                                "prim":
                                                    "CAR"
                                            },
                                            {
                                                "prim":
                                                    "DUP"
                                            },
                                            {
                                                "prim":
                                                    "PUSH",
                                                "args":
                                                    [{
                                                        "prim":
                                                            "nat"
                                                    },
                                                    {
                                                        "int":
                                                            "0"
                                                    }]
                                            },
                                            {
                                                "prim":
                                                    "SWAP"
                                            },
                                            {
                                                "prim":
                                                    "COMPARE"
                                            },
                                            {
                                                "prim":
                                                    "GT"
                                            },
                                            {
                                                "prim":
                                                    "LOOP",
                                                "args":
                                                    [[[{
                                                        "prim":
                                                            "DIP",
                                                        "args":
                                                            [[{
                                                                "prim":
                                                                    "DUP"
                                                            }]]
                                                    },
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    }],
                                                    {
                                                        "prim":
                                                            "CDR"
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "1"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "ADD"
                                                    },
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    },
                                                    {
                                                        "prim":
                                                            "DIP",
                                                        "args":
                                                            [[{
                                                                "prim":
                                                                    "SWAP"
                                                            },
                                                            {
                                                                "prim":
                                                                    "CAR"
                                                            },
                                                            {
                                                                "prim":
                                                                    "PAIR"
                                                            }]]
                                                    },
                                                    {
                                                        "prim":
                                                            "DUP"
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "2"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    },
                                                    {
                                                        "prim":
                                                            "EDIV"
                                                    },
                                                    [{
                                                        "prim":
                                                            "IF_NONE",
                                                        "args":
                                                            [[{
                                                                "prim":
                                                                    "PUSH",
                                                                "args":
                                                                    [{
                                                                        "prim":
                                                                            "string"
                                                                    },
                                                                    {
                                                                        "string":
                                                                            "division by zero"
                                                                    }]
                                                            },
                                                            {
                                                                "prim":
                                                                    "FAILWITH"
                                                            }],
                                                            [{
                                                                "prim":
                                                                    "CAR"
                                                            }]]
                                                    }],
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    },
                                                    {
                                                        "prim":
                                                            "DROP"
                                                    },
                                                    {
                                                        "prim":
                                                            "DUP"
                                                    },
                                                    {
                                                        "prim":
                                                            "PUSH",
                                                        "args":
                                                            [{
                                                                "prim":
                                                                    "nat"
                                                            },
                                                            {
                                                                "int":
                                                                    "0"
                                                            }]
                                                    },
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    },
                                                    {
                                                        "prim":
                                                            "COMPARE"
                                                    },
                                                    {
                                                        "prim":
                                                            "GT"
                                                    }]]
                                            },
                                            {
                                                "prim":
                                                    "DROP"
                                            },
                                            {
                                                "prim":
                                                    "CDR"
                                            }]]
                                    }],
                                    [{ "prim": "PAIR" },
                                    { "prim": "DUP" },
                                    { "prim": "DUP" },
                                    [{ "prim": "CAR" },
                                    { "prim": "CDR" }],
                                    { "prim": "SWAP" },
                                    [{ "prim": "CAR" },
                                    { "prim": "CAR" }],
                                    { "prim": "MUL" },
                                    { "prim": "SWAP" },
                                    { "prim": "DROP" }]]
                            }],
                            [{ "prim": "PAIR" },
                            { "prim": "DUP" },
                            { "prim": "CAR" },
                            { "prim": "DUP" },
                            { "prim": "MUL" },
                            { "prim": "SWAP" },
                            { "prim": "DROP" }]]
                    }],
                    [{ "prim": "PAIR" },
                    { "prim": "DUP" }, { "prim": "CAR" },
                    {
                        "prim": "PUSH",
                        "args":
                            [{ "prim": "nat" },
                            { "int": "0" }]
                    },
                    { "prim": "SWAP" },
                    { "prim": "COMPARE" },
                    { "prim": "GE" },
                    {
                        "prim": "IF",
                        "args":
                            [[],
                            [{
                                "prim": "PUSH",
                                "args":
                                    [{ "prim": "string" },
                                    {
                                        "string":
                                            "WrongCondition: params >= 0"
                                    }]
                            },
                            { "prim": "FAILWITH" }]]
                    },
                    { "prim": "DUP" }, { "prim": "CAR" },
                    [{
                        "prim": "DIP",
                        "args": [[{ "prim": "DUP" }]]
                    },
                    { "prim": "SWAP" }],
                    {
                        "prim": "DIP",
                        "args": [[{ "prim": "DUP" }]]
                    },
                    { "prim": "CAR" },
                    { "prim": "SWAP" },
                    { "prim": "DUP" }, { "prim": "MUL" },
                    { "prim": "COMPARE" },
                    { "prim": "GT" },
                    {
                        "prim": "LOOP",
                        "args":
                            [[{ "prim": "DUP" },
                            {
                                "prim": "PUSH",
                                "args":
                                    [{ "prim": "nat" },
                                    { "int": "2" }]
                            },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            [{
                                "prim": "DIP",
                                "args":
                                    [[{
                                        "prim": "DIP",
                                        "args":
                                            [[{
                                                "prim":
                                                    "DIP",
                                                "args":
                                                    [[{
                                                        "prim":
                                                            "DIP",
                                                        "args":
                                                            [[{
                                                                "prim":
                                                                    "DUP"
                                                            }]]
                                                    },
                                                    {
                                                        "prim":
                                                            "SWAP"
                                                    }]]
                                            },
                                            {
                                                "prim":
                                                    "SWAP"
                                            }]]
                                    },
                                    { "prim": "SWAP" }]]
                            },
                            { "prim": "SWAP" }],
                            { "prim": "CAR" },
                            { "prim": "EDIV" },
                            [{
                                "prim": "IF_NONE",
                                "args":
                                    [[{
                                        "prim": "PUSH",
                                        "args":
                                            [{
                                                "prim":
                                                    "string"
                                            },
                                            {
                                                "string":
                                                    "division by zero"
                                            }]
                                    },
                                    {
                                        "prim":
                                            "FAILWITH"
                                    }],
                                    [{ "prim": "CAR" }]]
                            }],
                            { "prim": "ADD" },
                            { "prim": "EDIV" },
                            [{
                                "prim": "IF_NONE",
                                "args":
                                    [[{
                                        "prim": "PUSH",
                                        "args":
                                            [{
                                                "prim":
                                                    "string"
                                            },
                                            {
                                                "string":
                                                    "division by zero"
                                            }]
                                    },
                                    {
                                        "prim":
                                            "FAILWITH"
                                    }],
                                    [{ "prim": "CAR" }]]
                            }],
                            { "prim": "SWAP" },
                            { "prim": "DROP" },
                            [{
                                "prim": "DIP",
                                "args":
                                    [[{ "prim": "DUP" }]]
                            },
                            { "prim": "SWAP" }],
                            {
                                "prim": "DIP",
                                "args":
                                    [[{ "prim": "DUP" }]]
                            },
                            { "prim": "CAR" },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "MUL" },
                            { "prim": "COMPARE" },
                            { "prim": "GT" }]]
                    },
                    [{
                        "prim": "DIP",
                        "args": [[{ "prim": "DUP" }]]
                    },
                    { "prim": "SWAP" }],
                    {
                        "prim": "DIP",
                        "args": [[{ "prim": "DUP" }]]
                    },
                    { "prim": "CAR" },
                    { "prim": "SWAP" },
                    { "prim": "DUP" }, { "prim": "MUL" },
                    { "prim": "COMPARE" },
                    { "prim": "LE" },
                    {
                        "prim": "IF",
                        "args":
                            [[{ "prim": "DUP" },
                            {
                                "prim": "PUSH",
                                "args":
                                    [{ "prim": "nat" },
                                    { "int": "1" }]
                            },
                            { "prim": "ADD" },
                            [{
                                "prim": "DIP",
                                "args":
                                    [[{ "prim": "DUP" }]]
                            },
                            { "prim": "SWAP" }],
                            {
                                "prim": "PUSH",
                                "args":
                                    [{ "prim": "nat" },
                                    { "int": "1" }]
                            },
                            { "prim": "ADD" },
                            { "prim": "MUL" },
                            [{
                                "prim": "DIP",
                                "args":
                                    [[{
                                        "prim": "DIP",
                                        "args":
                                            [[{
                                                "prim":
                                                    "DUP"
                                            }]]
                                    },
                                    { "prim": "SWAP" }]]
                            },
                            { "prim": "SWAP" }],
                            { "prim": "CAR" },
                            { "prim": "COMPARE" },
                            { "prim": "LT" }],
                            [{
                                "prim": "PUSH",
                                "args":
                                    [{ "prim": "bool" },
                                    { "prim": "False" }]
                            }]]
                    },
                    {
                        "prim": "IF",
                        "args":
                            [[],
                            [{
                                "prim": "PUSH",
                                "args":
                                    [{ "prim": "string" },
                                    {
                                        "string":
                                            "WrongCondition: ((y * y) <= params) & (params < ((y + 1) * (y + 1)))"
                                    }]
                            },
                            { "prim": "FAILWITH" }]]
                    },
                    { "prim": "SWAP" },
                    { "prim": "DROP" }]]
            },
            {
                "prim": "NIL",
                "args": [{ "prim": "operation" }]
            },
            { "prim": "PAIR" }]]
    }]