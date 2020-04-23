import { useContext } from 'react';

import { StoreContext } from '../context/store';

export default function useStore() {
  return useContext(StoreContext);
}
