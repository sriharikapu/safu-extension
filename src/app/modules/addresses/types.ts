enum AddressesTypes {
  SET_ADDRESSES = 'SET_ADDRESSES',
  ADD_ADDRESS = 'ADD_ADDRESS',
  REMOVE_ADDRESS = 'REMOVE_ADDRESS',
  UPDATE_ADDRESS = 'UPDATE_ADDRESS',
};

export default AddressesTypes;

export enum AddressSource {
  PRIVATE_KEY = 'PRIVATE_KEY',
  LEDGER = 'LEDGER',
  TREZOR = 'TREZOR',
  KEEPKEY = 'KEEPKEY',
  METAMASK = 'METAMASK',
  VIEW_ONLY = 'VIEW_ONLY',
  OTHER = 'OTHER',
}

export interface AddressConfig {
  address: string;
  label: string;
  source: AddressSource | undefined;
  backup?: string;
}
