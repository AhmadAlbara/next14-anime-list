import LoadingSkeleton from "@/components/LoadingSkeleton";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-color-primary/75 dark:bg-color-secondary/75 backdrop-blur">
      <section className="absolute">
        <LoadingSkeleton />
      </section>
    </div>
  );
};

export default Loading;
