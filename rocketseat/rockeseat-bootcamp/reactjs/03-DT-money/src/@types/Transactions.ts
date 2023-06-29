export type TransactionType = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export type CreateTransactionInputType = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
