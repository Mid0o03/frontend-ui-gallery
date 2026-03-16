# Animations Guide

[English](ANIMATIONS.md) • [Français](ANIMATIONS.fr.md)

Learn how to work with GSAP animations in the Beauty's Gold template.

## Overview

This template uses **GSAP (GreenSock Animation Platform)** for smooth, professional animations. All animations run at 60fps for optimal performance.

## Animation Types

### 1. Fade In Animations

Elements fade in when the page loads or when scrolled into view.

**Used in:** Navbar, Footer, Decorative elements

### 2. Stagger Animations

Multiple elements animate in sequence with a delay between each.

**Used in:** Navigation items, Service cards, Contact grid

### 3. Scroll-Triggered Animations

Animations that trigger when you scroll to a section.

**Used in:** Philosophy, Services, Contact sections

### 4. Parallax Effects

Background images move at different speeds while scrolling.

**Used in:** Hero section background

## Custom Animation Hooks

All animations are managed through custom React hooks in [`src/hooks/useGsapAnimation.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/hooks/useGsapAnimation.ts).

### useGsapFadeIn

Fades in an element on mount.

```typescript
const ref = useGsapFadeIn({
  duration: 1,      // Animation duration in seconds
  delay: 0.5,       // Delay before starting
  y: 30            // Vertical offset (optional)
});

return <div ref={ref}>Content</div>;
```

### useGsapStagger

Animates children elements in sequence.

```typescript
const ref = useGsapStagger({
  stagger: 0.1,    // Delay between each child
  duration: 0.8,   // Duration for each animation
  y: 20           // Vertical offset
});

return (
  <div ref={ref}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
);
```

### useGsapScrollTrigger

Triggers animation when scrolling into view.

```typescript
const ref = useGsapScrollTrigger({
  start: 'top 80%',  // When to start (element position)
  duration: 1,
  y: 50
});

return <div ref={ref}>Content</div>;
```

### useGsapScrollStagger

Combines scroll trigger with stagger effect.

```typescript
const ref = useGsapScrollStagger({
  stagger: 0.15,
  start: 'top 80%',
  duration: 0.8
});

return (
  <div ref={ref}>
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
  </div>
);
```

### useGsapParallax

Creates parallax scrolling effect.

```typescript
const ref = useGsapParallax({
  speed: 0.3  // 0.3 = moves at 30% of scroll speed
});

return <div ref={ref} style={{backgroundImage: 'url(...)'}} />;
```

## Modifying Animations

### Change Animation Speed

Edit the `duration` parameter:

```typescript
// Slower (1.5 seconds)
const ref = useGsapFadeIn({ duration: 1.5 });

// Faster (0.5 seconds)
const ref = useGsapFadeIn({ duration: 0.5 });
```

### Change Stagger Delay

Edit the `stagger` parameter:

```typescript
// Longer delay between items
const ref = useGsapStagger({ stagger: 0.2 });

// Shorter delay
const ref = useGsapStagger({ stagger: 0.05 });
```

### Change Scroll Trigger Point

Edit the `start` parameter:

```typescript
// Trigger earlier (when element is 90% down the viewport)
const ref = useGsapScrollTrigger({ start: 'top 90%' });

// Trigger later (when element is 50% down)
const ref = useGsapScrollTrigger({ start: 'top 50%' });
```

### Adjust Movement Distance

Edit the `y` parameter:

```typescript
// Larger movement
const ref = useGsapFadeIn({ y: 50 });

// Smaller movement
const ref = useGsapFadeIn({ y: 10 });

// No movement (just fade)
const ref = useGsapFadeIn({ y: 0 });
```

## Adding Animations to New Components

### Example: Animate a New Section

```typescript
import { useGsapScrollTrigger } from '../hooks/useGsapAnimation';

export function NewSection() {
  const ref = useGsapScrollTrigger({
    start: 'top 80%',
    duration: 1,
    y: 30
  });

  return (
    <section ref={ref}>
      <h2>New Section</h2>
      <p>This will fade in when scrolled into view!</p>
    </section>
  );
}
```

### Example: Animate a List

```typescript
import { useGsapScrollStagger } from '../hooks/useGsapAnimation';

export function AnimatedList() {
  const ref = useGsapScrollStagger({
    stagger: 0.1,
    start: 'top 80%'
  });

  return (
    <ul ref={ref}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}
```

## Disabling Animations

### Disable Specific Animation

Remove the `ref` prop:

```typescript
// Before (with animation)
const ref = useGsapFadeIn();
return <div ref={ref}>Content</div>;

// After (no animation)
return <div>Content</div>;
```

### Disable All Animations

Comment out or remove animation hooks from components:

```typescript
// Before
const ref = useGsapFadeIn();

// After
// const ref = useGsapFadeIn();
```

## Performance Tips

✅ **Do:**
- Use animations sparingly for key elements
- Keep duration between 0.5-1.5 seconds
- Use stagger delays of 0.05-0.2 seconds
- Test on mobile devices

❌ **Don't:**
- Animate too many elements at once
- Use very long durations (>2 seconds)
- Animate on every scroll event
- Animate large images without optimization

## Browser Support

GSAP works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Advanced Customization

For advanced GSAP features, edit [`src/hooks/useGsapAnimation.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/hooks/useGsapAnimation.ts).

**GSAP Documentation:** [greensock.com/docs](https://greensock.com/docs/)

## Need Help?

- 📧 Email: support@yourtemplate.com
- 📖 [GSAP Documentation](https://greensock.com/docs/)
- 🎬 [GSAP Learning](https://greensock.com/learning/)
