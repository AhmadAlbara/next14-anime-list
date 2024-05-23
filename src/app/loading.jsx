import LoadingSkeleton from "@/components/LoadingSkeleton";

const Loading = () => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center min-h-screen dark:bg-color-secondary/50 bg-color-primary/50 backdrop-blur">
      <LoadingSkeleton />
    </section>
  );
};

export default Loading;
