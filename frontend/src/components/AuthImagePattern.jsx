const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${
                i % 3 === 0 ? "bg-primary" : 
                i % 3 === 1 ? "bg-secondary" : "bg-accent"
              } ${i % 2 === 0 ? "animate-pulse" : ""}`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-base-content">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;