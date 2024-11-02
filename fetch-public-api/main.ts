interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

async function fetchData(): Promise<Beer[] | null> {
  const url = "https://api.sampleapis.com/beers/ale";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: Beer[] = await response.json();
    return json;
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function main() {
  const response = await fetchData();
  console.log("FETCH API 'https://api.sampleapis.com/beers/ale' Results")
  console.log(response);
}

main();
