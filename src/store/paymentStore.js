import { action, makeAutoObservable, observable } from 'mobx'

class PaymentStore {
  state = {
    name: '',
    email: '',
    priceId: '',
    cardExpMonth: null,
    cardExpYear: null,
    cardNumber: '',
    cardCVC: '',
    checkoutPayment: {},
    subscripted: {}
  }
  loading = false

  constructor() {
    makeAutoObservable(this, {
      state: observable,

      setState: action,
      setLoading: action
    })
  }

  setState(key, value) {
    this.state[key] = value
  }

  setLoading(value) {
    this.loading = value
  }
}

export default PaymentStore
