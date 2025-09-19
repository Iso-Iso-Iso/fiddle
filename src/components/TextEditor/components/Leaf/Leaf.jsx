export const Leaf = ({ children, leaf, attributes }) => {
  if (leaf.underline) {
    return <u {...attributes}>{children}</u>;
  }

  if (leaf.italic) {
    return <i {...attributes}>{children}</i>;
  }

  if (leaf.bold) {
    return <strong {...attributes}>{children}</strong>;
  }

  return <span {...attributes}>{children}</span>;
};
