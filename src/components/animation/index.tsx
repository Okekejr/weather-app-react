import { FC } from "react";
import { motion } from "framer-motion";
import { Heading, HeadingProps } from "@chakra-ui/react";
import { textContainer, textVariant2 } from "@/util/motion";

interface TypingProps extends HeadingProps {
  title: string | undefined;
}

export const TypingText: FC<TypingProps> = ({ title, ...rest }) => (
  <motion.div
    variants={textContainer}
    initial="hidden"
    animate="show"
    custom={title?.length}
  >
    <Heading lineHeight={10} {...rest}>
      {title
        ? Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))
        : ""}
    </Heading>
  </motion.div>
);
