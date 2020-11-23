import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME } from '@lib/constants';

export default function Hero() {
  const description = <>An interactive online experience by the community, free for everyone.</>;
  return (
    <>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {description}
      </h2>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        The first {BRAND_NAME} global user conference
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {description}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>JANUARY 01, 2021</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </>
  );
}
