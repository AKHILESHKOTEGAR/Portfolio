import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "@/lib/tokens";
import { VoxelPCFallback } from "./VoxelPCFallback";

export function VoxelPC() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{
          filter:
            "drop-shadow(0 0 18px rgba(232, 168, 124, 0.35)) drop-shadow(0 10px 40px rgba(232, 168, 124, 0.15))",
        }}
      >
        {!imgFailed ? (
          <img
            src="/retro-pc.png"
            alt="Retro voxel PC"
            onError={() => setImgFailed(true)}
            className="w-full max-w-[360px] md:max-w-[420px] h-auto select-none pointer-events-none"
            draggable={false}
          />
        ) : (
          <VoxelPCFallback />
        )}
      </motion.div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full blur-2xl opacity-40"
        style={{ backgroundColor: C.accent }}
      />
    </motion.div>
  );
}
