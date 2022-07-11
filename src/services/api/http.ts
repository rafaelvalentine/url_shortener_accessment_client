import axios from "axios";

/**
 * @name
 * @description  function initates axios instances  and passes their default values
 * @type {{growthApi:{Promise<{axios: AxiosInstance<Function}>}}
 * @return {Object}
 */
export default (() => {
  const baseApi = () => {
    let baseURL = "http://localhost:1960";
    let token: string | null = "";
    if (sessionStorage.getItem("token")) {
      token = sessionStorage.getItem("token");
    }

    if (import.meta.env.MODE && import.meta.env.MODE === "production") {
      
      // import.meta.env.VITE_XX 
      baseURL = import.meta.env.VITE_API_URL;
    }
    return axios.create({
      baseURL,
      headers: {
        // Authorization: `Bearer ${token}`,
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  return { baseApi };
})();
