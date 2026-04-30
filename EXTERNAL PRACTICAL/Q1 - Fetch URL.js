let URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers()
{
    try
    {
        let obj = await fetch(URL);
        
        let data = await obj.json();

        data.slice(0, 5).forEach(d => {
            console.log(d.name);
        });
    }
    
    catch(err)
    {
        console.log("Data not Found:", err.message);
    }
}

getUsers();