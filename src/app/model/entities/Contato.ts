export class Contato{
    private _nome: string;
    private _telefone: number;
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }

    constructor(nome:string, telefone: number){
        this._nome = nome;
        this._telefone = telefone;
    }
}