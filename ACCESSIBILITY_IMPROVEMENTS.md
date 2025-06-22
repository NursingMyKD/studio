# Accessibility Improvements Needed

## 1. Missing ARIA labels and roles
- Add aria-labels to search inputs
- Add role="main" to main content areas
- Add aria-expanded to collapsible elements

## 2. Focus management
- Implement focus trapping in modals
- Add skip links for keyboard navigation
- Ensure proper focus indicators

## 3. Color contrast
- Verify all text meets WCAG AA standards
- Add high contrast theme option

## 4. Screen reader support
- Add aria-live regions for dynamic content updates
- Implement proper heading hierarchy (h1 → h2 → h3)
- Add alt text to all images

## 5. Keyboard navigation
- Ensure all interactive elements are keyboard accessible
- Add keyboard shortcuts for common actions

## Example improvements:
```tsx
// Add to search inputs
<Input
  aria-label="Search ICU content"
  aria-describedby="search-help"
  // ... other props
/>

// Add to navigation
<nav role="navigation" aria-label="Main navigation">
  {/* navigation items */}
</nav>

// Add to dynamic content
<div aria-live="polite" aria-atomic="true">
  {/* search results or status updates */}
</div>
```
