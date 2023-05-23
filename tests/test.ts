export function testFunction() {
    /*jrdoc*/ `
    Default description, below should match
    @param where:query type:string name:key | The key to list
    @depreciated
    @optional
    `;
}

export function exampleFunc2() {
    /*jrdoc*/ `
    @param where:query type:string name:key depreciated | This parameter is deprecated
    `;
}

export function exampleFunc3() {
    /*jrdoc*/ `
    @param where:query type:string name:key optional
    `;
}
