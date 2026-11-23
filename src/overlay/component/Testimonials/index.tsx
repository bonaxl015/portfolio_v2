import { TESTIMONIALS } from '../../../content';
import { useCarousel } from './hooks/useCarousel';
import styles from './index.module.css';

export function Testimonials() {
  const { index, next, previous } = useCarousel(TESTIMONIALS.length);
  const testimonial = TESTIMONIALS[index];
  return (
    <>
      <h2 className="heading">What colleagues say</h2>
      <figure className={styles.quote} aria-live="polite">
        <blockquote>
          <p className={styles.text}>{testimonial.quote}</p>
        </blockquote>
        <figcaption className={styles.caption}>
          <span className={styles.name}>{testimonial.name}</span>
          <span className={styles.role}>{testimonial.role}</span>
        </figcaption>
      </figure>
      <div className={styles.controls}>
        <button type="button" className="quiet" onClick={previous} aria-label="Previous testimonial">
          Previous
        </button>
        <p className={styles.count}>
          {index + 1} of {TESTIMONIALS.length}
        </p>
        <button type="button" className="quiet" onClick={next} aria-label="Next testimonial">
          Next
        </button>
      </div>
    </>
  );
}
