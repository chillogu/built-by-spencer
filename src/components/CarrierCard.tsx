export default function CarrierCard({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <div className="bg-cream-50 border border-charcoal-900/10 p-6 hover:border-tan-600 transition-all group">
      <div className="w-16 h-16 bg-tan-500/30 flex items-center justify-center mb-4 group-hover:bg-tan-500 transition-colors">
        <span className="text-charcoal-900 font-bold text-xl">
          {name.charAt(0)}
        </span>
      </div>
      <h3 className="text-charcoal-900 font-semibold text-lg mb-1">{name}</h3>
      {description && (
        <p className="text-charcoal-700 text-sm">{description}</p>
      )}
    </div>
  );
}
