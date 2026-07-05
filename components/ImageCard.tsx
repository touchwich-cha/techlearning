// components/ImageCard.tsx
import Image from "next/image";
import styles from "./ImageCard.module.css";

type ImageCardProps = {
  src: string;
  alt: string;
};

export default function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className={styles.card}>
      <Image src={src} alt={alt} width={400} height={300} layout="responsive" />
    </div>
  );
}
