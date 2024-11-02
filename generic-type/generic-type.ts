
class ApiResponse<T> {
    constructor(readonly data: T, readonly status: number, readonly message: string) {
    }
  }

interface DataResponse {
  id: number;
  name: string;
  address: string
}

type IdField = Pick<DataResponse, 'id'>;

async function fetchData<T>(): Promise<ApiResponse<T>> {
  return new Promise<ApiResponse<T>>((resolve) => {
    setTimeout(() => {
      const responseData = {
        id: 1,
        name: "Andrew Quang",
        address: "Ho Chi Minh City",
      } as T; 

      const apiResponse = new ApiResponse<T>(responseData, 200, "Success");
      resolve(apiResponse);
    }, 1000); 
  });
}

async function main() {
  const response = await fetchData<DataResponse>();
  console.log("Data:", response.data);
  console.log("Status:", response.status);
  console.log("Message:", response.message);

  const pickResponse = await fetchData<IdField>();
  console.log("Pick Data:", pickResponse.data);
}

main();