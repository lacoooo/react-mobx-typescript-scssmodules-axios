import BusinessCardStore from './BusinessCard'

class RootStore {
  public businessCardStore: BusinessCardStore = new BusinessCardStore()
}

export default new RootStore()
export { BusinessCardStore }
