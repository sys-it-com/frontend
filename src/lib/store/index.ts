import { BaseStore } from '@freenit-framework/core'

class Store extends BaseStore {
  constructor(prefix = '/api/v1') {
    super(prefix)
  }
}

const store = new Store()
export default store
