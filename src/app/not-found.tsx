import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - 页面未找到 | 广元市综合金融服务平台',
  description: '很抱歉，您访问的页面不存在。请返回广元市综合金融服务平台首页。',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">页面未找到</h2>
          <p className="text-gray-600 mb-8">
            很抱歉，您访问的页面不存在或已被移除。
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            返回首页
          </Link>
          <Link 
            href="/policy-services"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            政策服务
          </Link>
        </div>
      </div>
    </div>
  );
}
