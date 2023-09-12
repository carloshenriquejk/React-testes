type ButtonProps = {
  children: React.ReactNode; // Corrected the typo here
  isLoading?: boolean;
  color?: "red" | "green";
};

const useAuth = ({
  children, // Corrected the typo here
  isLoading = false, // Set to false as default unless you want it to always be loading by default
  color = "green",
}: ButtonProps) => {
  return (
    <button style={{ backgroundColor: color }}>
      {isLoading ? "Carregando..." : children}
    </button>
  );
};
export default useAuth;
