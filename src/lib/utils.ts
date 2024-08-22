import { clsx, type ClassValue } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string) => moment(date).format('DD MMM YYYY');

export const blurDataImage =
  'data:image/webp;base64,UklGRvQCAABXRUJQVlA4WAoAAAAgAAAAOQAAOQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBgEAAJALAJ0BKjoAOgA+bTCSRiQjIaEwFgkAgA2JQBWHOBs/zMoLISaWACRRJkfyBI4Lxdd/xd03yJpIGFTUqOQGP4xGt8WUYj9jng+v+2wjcftkQSQUlbocxVkWWLjln0a0IfovTZIAAP70062J9GjrH7g8QW5d3F+LQ8rXmHN3okrCe1/lyHE1N4J7O4QOlbIkk3Z32UNX6AwqF01B+DCejpwmvHfxAntOE/kxlbpt/hamu8MLs/k+nwpMp4g1BIvX+zQnii+y1Kl3Frd5sNA18WL4mwthjxSBIjPSiiMNEjmgFriUlUlYCmgWI0KnfUFVrqpG5rSDeBN77cUw84dmPu7Q3pMAAAA=';

// List of sensitive keywords
const sensitiveKeywords = ['lee', 'kmkl', 'min aung hlaing'];

// Function to filter sensitive keywords
export function filterSensitiveKeywords(input: string) {
  let filteredInput = input;

  // Replace sensitive keywords with asterisks or another placeholder
  sensitiveKeywords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    filteredInput = filteredInput.replace(regex, '****');
  });

  return filteredInput;
}
