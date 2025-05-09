function duplicate(str)
{
    let result='';
    let seen=new Set();

    for (let i=0;i<str.length;i++)
    {
        if (!seen.has(str[i]))
        {
            
            seen.add(str[i]);
            result+=str[i];
        }
        else
        {
            console.log("Duplicate found: "+str[i]);
        }

    }
    console.log(seen);
    return result;


}


let res=duplicate("hello world");
console.log(res); 


