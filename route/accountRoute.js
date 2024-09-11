import { Router } from 'express'
import { getAccount, postAccount, depositMoney, withdrawMoney, deleteAccount, getAllACtiveAcounts } from '../controller/accountController.js'

const accountRouter = Router()

accountRouter.get('/', getAccount)
accountRouter.post('/', postAccount)
accountRouter.put('/', depositMoney)
accountRouter.put('/retire', withdrawMoney)
accountRouter.delete('/:id', deleteAccount)
accountRouter.get('/status', getAllACtiveAcounts)

export default accountRouter
