async function fetchGraphQL(query, variables) {

  let url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };

  const response = await fetch(url, options);
  
  if (response.status === 404) {
    throw new Error("api not found");
  }
  
  try {
    const data = await response.json();
    
    return { status: response.status, data: data.data };
  } catch (err) {
    throw new Error("response body is not json");
  }
}

export { fetchGraphQL };
  