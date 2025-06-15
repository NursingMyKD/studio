
import { useSidebar } from '@/components/ui/sidebar';

const SidebarInset = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();

  return (
    <div className={`flex-1 transition-all duration-300 ease-in-out ${isOpen ? 'md:ml-64' : 'ml-0'}`}>
      {children}
    </div>
  );
};

export default SidebarInset;
