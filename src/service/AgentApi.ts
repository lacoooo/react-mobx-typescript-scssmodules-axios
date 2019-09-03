import Axios from './base'

export default class AgentApi {

  public deleteCustomer(data: { customer_user_id: number }) {
    const url: string = `/customer/delete`
    return Axios(url, data, null, 'POST')
  }

  public getClientInfo() {
    const url: string = `/client-info`
    return Axios(url, null, null, 'GET')
}