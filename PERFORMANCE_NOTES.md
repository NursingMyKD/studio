// Performance optimization suggestions

// 1. Add React.memo to expensive components
export const ModuleCard = React.memo(ModuleCardComponent);

// 2. Use useMemo for expensive calculations
const filteredContent = useMemo(() => {
  // existing logic
}, [searchTerm]);

// 3. Implement virtual scrolling for large lists
// Consider using @tanstack/react-virtual for long content lists

// 4. Add proper loading states
// Already implemented well in AuthContext

// 5. Optimize images
// Consider next/image optimization and WebP format

// 6. Code splitting
// Add dynamic imports for heavy components:
// const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
//   loading: () => <Skeleton />
// });
