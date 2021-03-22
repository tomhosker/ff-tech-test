const MAX_NUMBER = 100;

async function main()
{
    const service = new Service();
    const guessInPromise;

    service.generate();

    for(let i = 0; i <= MAX_NUMBER; i++)
    {
        service.guess(i)
            .then(guessInPromise => service.submit(guessInPromise));
            .catch(err => console.log(err));
    }

    return service;
}
