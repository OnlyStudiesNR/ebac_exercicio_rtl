import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

// Defina uma interface JSX.IntrinsicElements
declare namespace JSX {
    interface IntrinsicElements {
      // Adicione as definições de tipo para os elementos JSX padrão que você está usando em seu código
      // Por exemplo, para 'div', 'img', 'p', etc.
      // Aqui está um exemplo para 'div':
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      // Adicione mais elementos conforme necessário
    }
  }


const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;