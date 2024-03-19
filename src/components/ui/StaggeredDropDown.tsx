"use client";
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const StaggeredDropDown = ({
  linkedinLink,
  githubLink,
  twitterLink,
  portfolioLink,
}: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3 flex items-center justify-center bg-transparent">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative top-0 left-0 z-30"
      >
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-700 hover:bg-indigo-800 transition-colors z-20"
        >
          <span className="font-medium text-sm">Connect</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex items-center justify-center gap-3 py-1 px-2 rounded-lg bg-white/80 text-black shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-20"
        >
          <Link href={githubLink}>
            <Option Icon="/icons/github-12.png" />
          </Link>
          <Link href={linkedinLink}>
            <Option Icon="/icons/linkedin-12.png" />
          </Link>
          <Link href={twitterLink}>
            <Option Icon="/icons/twitter-12.png" />
          </Link>
          <Link href={portfolioLink}>
            <Option Icon="/icons/link-12.png" />
          </Link>
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ Icon }: any) => {
  return (
    <>
      <motion.span
        variants={actionIconVariants}
        className="flex justify-center items-center gap-2"
      >
        <Image
          src={Icon}
          height={28}
          width={28}
          alt=""
          className=" hover:scale-105 active:scale-95 transition-all duration-300"
        />
      </motion.span>
    </>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
