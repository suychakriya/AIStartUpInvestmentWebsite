import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="root"
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.3 }}
        variants={{
          initialState: { opacity: 0 },
          animateState: { opacity: 1 },
          exitState: { opacity: 0 },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
