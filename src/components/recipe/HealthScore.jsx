/* eslint-disable react/prop-types */
export default function HealthScore({ icon, style, content }) {
  return (
    <div
      className={`border rounded-full flex flex-col items-center justify-center ${
        style && style
      }`}
    >
      {icon}
      <p className="font-semibold text-xl">{content}</p>
    </div>
  );
}
