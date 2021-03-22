function mergeObjects(obj1, obj2)
{
    for(const [key, value] of Object.entries(obj2))
    {
        obj1[key] = value;
    }

    return obj1;
}

function arrayContainsObjWithId(inputArray, id)
{
    for(let i = 0; i < inputArray.length; i++)
    {
        if(inputArray[i].Id === id)
        {
            return true;
        }
    }

    return false;
}

function mergeArrays(array1, array2)
{
    for(let i = 0; i < array1.length; i++)
    {
        if(!array1[i].Id)
        {
            continue;
        }

        for(let j = 0; j < array2.length; j++)
        {
            if(array1[i].Id === array2[j].Id)
            {
                array1[i] = mergeObjects(array1[i], array2[j]);
            }
        }
    }

    for(let i = 0; i < array2.length; i++)
    {
        if(!array2[i].Id)
        {
            continue;
        }
        else if(!arrayContainsObjWithId(array1, array2[i].Id))
        {
            array1.push(array2[i]);
        }
    }

    return array1;
}

// Given example.
console.log(mergeArrays([{Id: "a1"}, {Id: "a2", Name: "Record2", Cost: 4}],
                        [{Id: "a2", Cost: 6}, {Id: "a3"}]));

/*
Expected output:

[ { Id: 'a1' }, { Id: 'a2', Name: 'Record2', Cost: 6 }, { Id: 'a3' } ]
*/
