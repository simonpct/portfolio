export const KBD: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <kbd className="inline-flex items-center mx-1 px-1.5 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
      {children}
    </kbd>
  );
};