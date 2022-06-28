const url: string = 'https://localhost:7014/graphql';

const performGraphQLRequest = async(query: string, variables: any) => {
    return await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            }),
        }
    ).then((response) => response.json());
}

export default performGraphQLRequest;