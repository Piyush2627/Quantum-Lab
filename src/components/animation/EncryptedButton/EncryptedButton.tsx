import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface EncryptButtonProps {
  onClick?: () => void;
  buttonText: string;
}

function EncryptedButton({ buttonText }: EncryptButtonProps) {
  const EncryptButton: React.FC<{ buttonText: string }> = ({ buttonText }) => {
    const intervalRef = useRef<number | null>(null);
    const [text, setText] = useState<string>(buttonText);

    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;
    const CHARS = "!@#$%^&*():{};|,.<>/?";

    const scramble = () => {
      let pos = 0;

      intervalRef.current = window.setInterval(() => {
        const scrambled = buttonText
          .split("")
          .map((char, index) => {
            if (pos / CYCLES_PER_LETTER > index) {
              return char;
            }

            const randomCharIndex = Math.floor(Math.random() * CHARS.length);
            const randomChar = CHARS[randomCharIndex];

            return randomChar;
          })
          .join("");

        setText(scrambled);
        pos++;

        if (pos >= buttonText.length * CYCLES_PER_LETTER) {
          stopScramble();
        }
      }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
      window.clearInterval(intervalRef.current || undefined);
      setText(buttonText);
    };

    return (
      <motion.button
        whileHover={{
          scale: 1.025,
        }}
        whileTap={{
          scale: 0.975,
        }}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        className="group relative  tracking-widest overflow-hidden rounded-lg border-[1px] border-violet-700 bg-violet-600 px-4 py-2 font-mono font-medium  text-white transition-colors hover:text-white"
      >
        <div className="relative z-10 flex items-center gap-2">
          <span className="">{text}</span>
        </div>
        <motion.span
          initial={{
            y: "100%",
          }}
          animate={{
            y: "-100%",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "linear",
          }}
          className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-gray-300 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
        />
      </motion.button>
    );
  };

  return (
    <>
      <EncryptButton buttonText={buttonText} />
    </>
  );
}

export default EncryptedButton;
