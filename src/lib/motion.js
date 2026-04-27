const easeSoft = [0.33, 1, 0.68, 1];

export const revealViewport = {
  once: true,
  margin: "0px 0px -96px 0px",
};

export function sectionVariants(reduced) {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.01 : 0.5,
        ease: easeSoft,
        staggerChildren: reduced ? 0 : 0.052,
        delayChildren: reduced ? 0 : 0.03,
      },
    },
  };
}

export function itemVariants(reduced) {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.01 : 0.42,
        ease: easeSoft,
      },
    },
  };
}

export function cardHoverTransition(reduced) {
  return reduced
    ? { duration: 0 }
    : { type: "spring", stiffness: 360, damping: 38 };
}

export function shellTransition(reduced) {
  return {
    duration: reduced ? 0.01 : 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  };
}
