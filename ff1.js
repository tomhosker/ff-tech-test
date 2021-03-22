function filterTypes (values) {
    const result = {
        number: [],
        string: [],
        object: [],
        others: []
    }
    
    for(let i = 0; i < values.length; i++)
    {
        if(typeof values[i] === "number")
        {
            result.number.push(values[i]);
        }
        else if(typeof values[i] === "string")
        {
            result.string.push(values[i]);
        }
        else if(typeof values[i] === "object")
        {
            result.object.push(values[i]);
        }
        else
        {
            result.others.push(values[i]);
        }
    }
  
    return result;
}
