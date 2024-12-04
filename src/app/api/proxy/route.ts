import { apiEndpoints } from "../apiEndpoints";

  export async function GET(request: Request) {
    console.log(request)
    const targetApi = request.headers.get("x-target-api") || "host";
    const targetUrl = apiEndpoints[targetApi];
  
    if (!targetUrl) {
      return new Response(JSON.stringify({ error: "Invalid target API" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    try {
      const options: RequestInit = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const apiResponse = await fetch(targetUrl, options);
      const responseData = await apiResponse.json();
  
      return new Response(JSON.stringify(responseData), {
        status: apiResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error forwarding request:", error);
      return new Response(
        JSON.stringify({ error: "Failed to forward request" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  
  export async function POST(request: Request) {
    const targetApi = request.headers.get("x-target-api") || "host";
    const targetUrl = apiEndpoints[targetApi];
  
    if (!targetUrl) {
      return new Response(JSON.stringify({ error: "Invalid target API" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    try {
      const options: RequestInit = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: await request.text(), // 获取请求体
      };
  
      const apiResponse = await fetch(targetUrl, options);
      const responseData = await apiResponse.json();
      return new Response(JSON.stringify(responseData), {
        status: apiResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error forwarding request:", error);
      return new Response(
        JSON.stringify({ error: "Failed to forward request" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  
  // 如果你还需要处理其他 HTTP 方法，例如 PUT 或 DELETE，也可以类似地添加。
  