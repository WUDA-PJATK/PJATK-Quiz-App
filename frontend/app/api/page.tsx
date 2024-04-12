
async function getData() {
    
    const res = await fetch('http://localhost:8080/api/Questions')
    
    if(!res.ok)
    {
        throw new Error('Failed to fetch data')
    }
    
    return res.json();
    
}

export default async function API() {

    const data = await getData()    
    console.log(data)
    return (
        <main>
            <h1>Data: </h1> 
            <div>{data ? data : "no data"}</div>
        </main>
    )
}