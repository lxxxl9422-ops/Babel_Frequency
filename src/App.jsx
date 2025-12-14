// 1. 注意这里必须引入 useEffect，否则会白屏报错
import { useEffect } from 'react'; 
import Spline from '@splinetool/react-spline';

export default function App() {
  // 保持你原来的变量名
  const storyScene = "/scene.splinecode"; 

  // --- 新增：强制回到顶部逻辑 ---
  useEffect(() => {
    // 告诉浏览器：刷新时别乱动，听我的
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // 立刻滚回坐标 0,0
    window.scrollTo(0, 0);
  }, []);
  // ---------------------------

  return (
    <div style={{ height: '500vh', width: '100vw' }}>
      
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%' 
      }}>
        {/* 2. 这里的变量名 storyScene 必须和上面定义的一模一样 */}
        <Spline scene={storyScene} />
      </div>

    </div>
  );
}