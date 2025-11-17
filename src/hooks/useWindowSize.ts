import { useEffect, useState } from 'react';

// 自定义 Hook
const useWindowSize = () => {
  // 初始化状态为 undefined，以避免服务端与客户端初始渲染内容不一致
  const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // 定义事件处理函数
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 立即执行一次，获取初始尺寸[citation:1]
    handleResize();
    
    // 添加监听
    window.addEventListener('resize', handleResize);
    
    // 清除监听（副作用清理）
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组确保effect只执行一次

  return windowSize;
};

export default useWindowSize;