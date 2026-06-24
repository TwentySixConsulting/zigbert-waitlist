type Props = { className?: string; onDark?: boolean };

// Prepend Vite's base URL so assets resolve on the GitHub Pages subpath.
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

// The standalone Zigbert mark (the benchmark "divide" glyph).
export function Mark({ className = "h-7 w-auto", onDark = false }: Props) {
  return (
    <img
      src={asset(onDark ? "zigbert-mark-light.png" : "zigbert-mark.png")}
      alt=""
      aria-hidden="true"
      className={`block max-w-none self-start ${className}`}
    />
  );
}

// The full Zigbert lockup (mark + wordmark).
export default function Wordmark({ className = "h-8 w-auto", onDark = false }: Props) {
  return (
    <img
      src={asset(onDark ? "zigbert-logo-light.png" : "zigbert-logo.png")}
      alt="Zigbert"
      className={`block max-w-none self-start ${className}`}
    />
  );
}
