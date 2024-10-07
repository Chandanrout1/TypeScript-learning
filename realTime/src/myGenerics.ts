const score: Array<number> = []
const names: Array<string> = []

function identityOne (val: boolean | number): boolean| number {
    return val
}

function identitytwo(val : any): any {
    return val
}

function identitythree<Type> (val : Type) : Type {
    return val
}

function identityFour<T> (val : T) : T {
    return val
}