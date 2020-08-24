
class Cheque {
    constructor(
        public numero: string,
        public valor: number,
        public estado: string,
        public fecha: string,
        public banco: string,
        public hora: string,
        public cuenta: string,
        public cuentaAcreditar: string,
        public comision: string,
        public detalle: string) {}
}
export default Cheque;
