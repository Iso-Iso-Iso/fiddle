# Styling React Components Skill

## Goal
Follow consistent styling patterns when working with React components in this project.

## Implementation Rule
Whenever styling is required for a React component:
1. **Do not use inline styles** on elements.
2. **Create a `.styles.js` file** (or `.styles.jsx`) in the same directory as the component.
3. **Use MUI's `styled` utility** to create styled components.
4. **Use theme spacing and tokens** (e.g., `theme.spacing()`) for consistent layout and gaps.
5. **Export the styled components** and import them into your main component file.

## Example
If you are styling `MyComponent.jsx`:

1. Create `MyComponent.styles.js`:
```javascript
"use client";
import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
}));
```

2. Use it in `MyComponent.jsx`:
```javascript
import { Wrapper } from "./MyComponent.styles";

export const MyComponent = () => (
  <Wrapper>
    {/* content */}
  </Wrapper>
);
```
