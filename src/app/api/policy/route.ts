import { getPolicyTableData } from "@/mock";

export async function GET() {
    const list = getPolicyTableData(); 
    return new Response(JSON.stringify(list), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
