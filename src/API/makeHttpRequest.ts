export const makeHttpRequest = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data === undefined) {
      console.log("Results are undefined.");
      return null;
    } else {
      return data;
    }
  } catch (error: any) {
    console.error("An error occurred:", error);
    return error.message;
  }
};
