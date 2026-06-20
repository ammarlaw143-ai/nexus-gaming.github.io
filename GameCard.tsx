import Link from "next/link";
import { Star, Tag, BookOpen, Play } from "lucide-react";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  size?: "sm" | "md" | "lg";
}

export default function GameCard({ game, size = "md" }: GameCardProps) {
  const isFree = game.price === "Free";

  return (
    <Link href={`/games/${game.slug}`} className="game-card block rounded-xl bg-card-bg border border-white/5 overflow-hidden group">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-dark-700">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {game.featured && (
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-[10px] font-bold px-2 py-0.5 rounded font-display tracking-wide">
              FEATURED
            </span>
          )}
          {game.newRelease && (
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded font-display tracking-wide">
              NEW
            </span>
          )}
          {game.trending && (
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded font-display tracking-wide">
              🔥 HOT
            </span>
          )}
        </div>
        {/* Price badge */}
        <div className="absolute top-2 right-2">
          <span
            className={`text-xs font-bold px-2 py-1 rounded font-display ${
              isFree
                ? "bg-green-500/20 text-green-400 border border-green-500/40"
                : "bg-dark-900/80 text-white border border-white/10"
            }`}
          >
            {isFree ? "FREE" : `$${game.price}`}
          </span>
        </div>
        {/* Guide indicator */}
        {(game.hasGuide || game.hasTutorial) && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {game.hasGuide && (
              <span className="w-6 h-6 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <BookOpen size={12} className="text-cyan-400" />
              </span>
            )}
            {game.hasTutorial && (
              <span className="w-6 h-6 rounded bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                <Play size={12} className="text-purple-400" />
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-display font-bold text-sm text-white group-hover:text-neon-cyan transition-colors line-clamp-1 mb-1">
          {game.title}
        </h3>

        {size !== "sm" && (
          <p className="text-gray-500 text-xs line-clamp-2 mb-2 leading-relaxed">
            {game.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star size={11} className="fill-yellow-400 text-yellow-400" />
            <span className="text-yellow-400 text-xs font-semibold font-mono">
              {game.rating.toFixed(1)}
            </span>
          </div>
          {/* Genre */}
          <span className="text-gray-600 text-[10px]">{game.genre[0]}</span>
        </div>

        {size !== "sm" && (
          <div className="mt-2 flex flex-wrap gap-1">
            {game.platform.slice(0, 3).map((p) => (
              <span key={p} className="text-[10px] px-1.5 py-0.5 bg-dark-600 rounded text-gray-500">
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
