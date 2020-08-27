import { Injectable } from '@angular/core';
import Cheque from '../models/Cheque';

@Injectable({
    providedIn: 'root'
})
export class  DepositoCheque {

    private cheque: Cheque;

    constructor() { }

    public setCheque(cheque: Cheque) {
        this.cheque = cheque;
    }
    public getCheque(): Cheque {
        return this.cheque;
    }

}
