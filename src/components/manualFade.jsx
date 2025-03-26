function ManualFade({ in: show, children }) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        visibility: show ? "visible" : "hidden",
        pointerEvents: show ? "auto" : "none",
        height: show ? "auto" : 0, // Prevent layout issues
        overflow: "hidden", // Prevent content from being visible when hidden
      }}
    >
      {children}
    </div>
  );
}

export default ManualFade;
