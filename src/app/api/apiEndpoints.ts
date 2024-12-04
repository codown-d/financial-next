
const apiHost = process.env.NEXT_PUBLIC_API_HOST;
export const apiEndpoints = {
    host: apiHost,
    login: "http://129.211.162.64/gy001/public/Api2024/yhb1loginajax",
    policyList:`${apiHost}/admin/enterprise/service/policy/all/list`
    };