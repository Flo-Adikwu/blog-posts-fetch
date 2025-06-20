export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
        Processing…
      </button>{" "}
    </div>
  );
}
