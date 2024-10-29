   // pages/api/proxy.js
export default async function handler(req, res) {
  const { method, query } = req; // 获取请求方法和查询参数
  const apiUrl = 'https://gyx.gyzwfw.com/gygyx/rest/ayystPolicy/getApplyPolicyList'; // 替换为目标 API 地址

  try {
    let response;

    if (method === 'GET') {
      // 构建请求 URL，添加查询参数
      const urlWithParams = new URL(apiUrl);
      Object.keys(query).forEach(key => urlWithParams.searchParams.append(key, query[key]));
      response = await fetch(urlWithParams.toString());
    } else if (method === 'POST') {
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
