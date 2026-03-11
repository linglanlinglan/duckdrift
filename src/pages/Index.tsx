const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#5BA3C6]">
      <iframe
        src="/duck-drift-v7.html"
        title="Duck Drift"
        className="w-full h-screen border-0"
        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
        allow="autoplay"
      />
    </div>
  );
};

export default Index;
