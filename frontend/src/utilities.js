export function removeTypeName(data) {
    return data.map(d => {
        const { __typename, ...rest } = d;
        return rest;    
    });
}
