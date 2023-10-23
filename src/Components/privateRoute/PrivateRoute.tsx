import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


interface PrivateRouteProps {
    isAuthenticated: boolean;
    children?:any;
  }
  
  const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuthenticated,
    children,
  }) => {
    const router = useRouter();
  
    useEffect(() => {
      if (!isAuthenticated) {
    
        router.push('/');
      }
    }, [isAuthenticated, router]);
  
    if (!isAuthenticated) {
      return null; // Render nothing if not authenticated
    }
  
    return <>{children}</>;
  };
  
  export default PrivateRoute;
