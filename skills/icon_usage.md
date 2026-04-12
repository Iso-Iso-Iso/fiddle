# Icon Usage Skill

## Goal
Ensure consistent icon management and usage across the project by using the centralized `Icon` abstraction.

## Implementation Rule
When you need to add an icon to a component:
1. **Do not import MUI icons directly** (e.g., `import EditIcon from "@mui/icons-material/Edit"`) into your feature components.
2. **Use the `Icon` component** from the UI Kit (`@/components/uikit/Icon/Icon`).
3. **Register new icons** in `src/components/uikit/Icon/Icon.jsx` if they are not already available.
    - Add the import from `@mui/icons-material`.
    - Map it to a descriptive key in the `iconMap`.

## Example Usage

### Registration (in src/components/uikit/Icon/Icon.jsx)
```javascript
import NewIcon from "@mui/icons-material/NewIcon";

const iconMap = {
  // ... existing icons
  newIconAction: NewIcon, 
};
```

### Usage (in your component)
```javascript
import { Icon } from "@/components/uikit/Icon/Icon";

export const MyComponent = () => (
  <div>
    <Icon name="newIconAction" size={24} color="primary" />
  </div>
);
```

## Benefits
- **Centralized Control**: Change the appearance or implementation of all icons from a single file.
- **Theme Integration**: The `Icon` abstraction maps simple color names to theme-specific palette colors.
- **Improved Maintainability**: No need to manage multiple direct imports across many files.
