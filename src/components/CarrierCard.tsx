export default function CarrierCard({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <div className="bg-navy-800 border border-navy-700/50 rounded-xl p-6 hover:border-gold-500/30 transition-all group">
      <div className="w-16 h-16 bg-navy-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500/10 transition-colors">
        <span className="text-gold-500 font-bold text-xl">
          {name.charAt(0)}
        </span>
      </div>
      <h3 className="text-white font-semibold text-lg mb-1">{name}</h3>
      {description && (
        <p className="text-white/40 text-sm">{description}</p>
      )}
    </div>
  );
}
