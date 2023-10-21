const ABI = [
  {
    constant: false,
    inputs: [{ name: "owner_", type: "address" }],
    name: "setOwner",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "", type: "bytes32" }],
    name: "poke",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "poke",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "compute",
    outputs: [
      { name: "", type: "bytes32" },
      { name: "", type: "bool" },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "wat", type: "address" }],
    name: "set",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "wat", type: "address" }],
    name: "unset",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "indexes",
    outputs: [{ name: "", type: "bytes12" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "next",
    outputs: [{ name: "", type: "bytes12" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "read",
    outputs: [{ name: "", type: "bytes32" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "peek",
    outputs: [
      { name: "", type: "bytes32" },
      { name: "", type: "bool" },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "bytes12" }],
    name: "values",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "min_", type: "uint96" }],
    name: "setMin",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "authority_", type: "address" }],
    name: "setAuthority",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "void",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "pos", type: "bytes12" },
      { name: "wat", type: "address" },
    ],
    name: "set",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "authority",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "pos", type: "bytes12" }],
    name: "unset",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "next_", type: "bytes12" }],
    name: "setNext",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "min",
    outputs: [{ name: "", type: "uint96" }],
    payable: false,
    type: "function",
  },
  {
    anonymous: true,
    inputs: [
      { indexed: true, name: "sig", type: "bytes4" },
      { indexed: true, name: "guy", type: "address" },
      { indexed: true, name: "foo", type: "bytes32" },
      { indexed: true, name: "bar", type: "bytes32" },
      { indexed: false, name: "wad", type: "uint256" },
      { indexed: false, name: "fax", type: "bytes" },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "authority", type: "address" }],
    name: "LogSetAuthority",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "owner", type: "address" }],
    name: "LogSetOwner",
    type: "event",
  },
];
export default ABI;
