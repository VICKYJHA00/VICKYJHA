import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

const RESUME_URL = "/resume/Vicky_Resume.pdf";
const RESUME_NAME = "Vicky_Resume.pdf";

export function Resume() {
  return (
    <section className="max-w-7xl mx-auto py-32 flex flex-col items-center px-6" id="resume">
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-primary uppercase mb-2 block font-semibold tracking-wider">
          Experience
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Professional Dossier
        </h2>
      </div>

      {/* Resume Glass Card with Animated Border */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
      >
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/40 via-primary/10 to-transparent rounded-2xl opacity-60" />

        <div className="relative rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 backdrop-blur-xl bg-surface/40 border border-white/5 shadow-2xl">
          {/* PDF Thumbnail Mockup */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative group cursor-pointer w-full md:w-48 aspect-3/4 rounded-lg overflow-hidden border border-outline-variant/20 shadow-2xl shrink-0"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZzwfI8r3_s5QjhnD02_7O733s7XMD1Dfw07re6IXq2slUJkKaiWN7VwJopS033nvQ6Z1HWYVfglVHkL9hvUfehanZIz4NYw0sGQNl97dwwO-djNXu-7HHITtQ46bo_oUTzpdncU5a3vC4NVxBWAxda2s3h5YPXM2NFPOdgtVgYHPVWzSBHJoczeQbm_wAUeQPwz_1ByUSsmohamnpeINkAje4f_iw6Kqt9m_5EHUjQ9L4_QXjXNkPGROsa5WOGAmqAgIoGni6jq8"
              alt="Resume Preview"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Eye className="text-primary" size={40} />
            </div>
          </motion.div>

          {/* Resume Info & Actions */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Technical Curriculum Vitae
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-sm">
              A comprehensive overview of my technical expertise, engineering projects, and
              architectural philosophy.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <motion.a
                href={RESUME_URL}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                <Eye size={16} />
                View CV
              </motion.a>
              <motion.a
                href={RESUME_URL}
                download={RESUME_NAME}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-foreground font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Download size={16} />
                Download PDF
              </motion.a>
            </div>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <div className="flex flex-col items-center md:items-start">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Format
                </span>
                <span className="text-sm text-foreground font-medium">PDF / 240KB</span>
              </div>
              <div className="w-px h-10 bg-border/30"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Updated
                </span>
                <span className="text-sm text-foreground font-medium">Oct 2024</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
