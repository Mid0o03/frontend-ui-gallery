# Guide des Animations

Apprenez à travailler avec les animations GSAP dans le template Beauty's Gold.

[English](ANIMATIONS.md) • **Français**

## Vue d'ensemble

Ce template utilise **GSAP (GreenSock Animation Platform)** pour des animations fluides et professionnelles. Toutes les animations tournent à 60fps pour une performance optimale.

## Types d'Animations

### 1. Animations de Fondu (Fade In)

Les éléments apparaissent en fondu lors du chargement de la page ou lorsqu'ils défilent dans la vue.

**Utilisé dans :** Barre de navigation, Pied de page, Éléments décoratifs

### 2. Animations Stagger (Décalées)

Plusieurs éléments s'animent en séquence avec un délai entre chaque.

**Utilisé dans :** Éléments de navigation, Cartes de service, Grille de contact

### 3. Animations Déclenchées au Défilement (Scroll-Triggered)

Animations qui se déclenchent lorsque vous atteignez une section en défilant.

**Utilisé dans :** Sections Philosophie, Services, Contact

### 4. Effets Parallaxe

Les images de fond se déplaçant à des vitesses différentes lors du défilement.

**Utilisé dans :** Arrière-plan de la section Hero

## Hooks d'Animation Personnalisés

Toutes les animations sont gérées via des hooks React personnalisés dans [`src/hooks/useGsapAnimation.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/hooks/useGsapAnimation.ts).

### useGsapFadeIn

Fait apparaître un élément en fondu au montage.

```typescript
const ref = useGsapFadeIn({
  duration: 1,      // Durée de l'animation en secondes
  delay: 0.5,       // Délai avant de commencer
  y: 30            // Décalage vertical (optionnel)
});

return <div ref={ref}>Contenu</div>;
```

### useGsapStagger

Anime les éléments enfants en séquence.

```typescript
const ref = useGsapStagger({
  stagger: 0.1,    // Délai entre chaque enfant
  duration: 0.8,   // Durée pour chaque animation
  y: 20           // Décalage vertical
});

return (
  <div ref={ref}>
    <div>Élément 1</div>
    <div>Élément 2</div>
    <div>Élément 3</div>
  </div>
);
```

### useGsapScrollTrigger

Déclenche l'animation lors du défilement vers la vue.

```typescript
const ref = useGsapScrollTrigger({
  start: 'top 80%',  // Quand commencer (position de l'élément)
  duration: 1,
  y: 50
});

return <div ref={ref}>Contenu</div>;
```

### useGsapScrollStagger

Combine le déclenchement au défilement avec un effet stagger.

```typescript
const ref = useGsapScrollStagger({
  stagger: 0.15,
  start: 'top 80%',
  duration: 0.8
});

return (
  <div ref={ref}>
    <div>Carte 1</div>
    <div>Carte 2</div>
    <div>Carte 3</div>
  </div>
);
```

### useGsapParallax

Crée un effet de défilement parallaxe.

```typescript
const ref = useGsapParallax({
  speed: 0.3  // 0.3 = se déplace à 30% de la vitesse de défilement
});

return <div ref={ref} style={{backgroundImage: 'url(...)'}} />;
```

## Modifier les Animations

### Changer la Vitesse de l'Animation

Modifiez le paramètre `duration` :

```typescript
// Plus lent (1.5 secondes)
const ref = useGsapFadeIn({ duration: 1.5 });

// Plus rapide (0.5 secondes)
const ref = useGsapFadeIn({ duration: 0.5 });
```

### Changer le Délai Stagger

Modifiez le paramètre `stagger` :

```typescript
// Délai plus long entre les éléments
const ref = useGsapStagger({ stagger: 0.2 });

// Délai plus court
const ref = useGsapStagger({ stagger: 0.05 });
```

### Changer le Point de Déclenchement au Défilement

Modifiez le paramètre `start` :

```typescript
// Déclencher plus tôt (quand l'élément est à 90% du bas de la vue)
const ref = useGsapScrollTrigger({ start: 'top 90%' });

// Déclencher plus tard (quand l'élément est à 50% du bas)
const ref = useGsapScrollTrigger({ start: 'top 50%' });
```

### Ajuster la Distance de Mouvement

Modifiez le paramètre `y` :

```typescript
// Mouvement plus large
const ref = useGsapFadeIn({ y: 50 });

// Mouvement plus petit
const ref = useGsapFadeIn({ y: 10 });

// Pas de mouvement (juste un fondu)
const ref = useGsapFadeIn({ y: 0 });
```

## Ajouter des Animations à de Nouveaux Composants

### Exemple : Animer une nouvelle section

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
      <h2>Nouvelle Section</h2>
      <p>Ceci apparaîtra en fondu lors du défilement !</p>
    </section>
  );
}
```

### Exemple : Animer une liste

```typescript
import { useGsapScrollStagger } from '../hooks/useGsapAnimation';

export function AnimatedList() {
  const ref = useGsapScrollStagger({
    stagger: 0.1,
    start: 'top 80%'
  });

  return (
    <ul ref={ref}>
      <li>Élément 1</li>
      <li>Élément 2</li>
      <li>Élément 3</li>
    </ul>
  );
}
```

## Désactiver les Animations

### Désactiver une animation spécifique

Retirez la prop `ref` :

```typescript
// Avant (avec animation)
const ref = useGsapFadeIn();
return <div ref={ref}>Contenu</div>;

// Après (sans animation)
return <div>Contenu</div>;
```

### Désactiver toutes les animations

Commentez ou retirez les hooks d'animation des composants :

```typescript
// Avant
const ref = useGsapFadeIn();

// Après
// const ref = useGsapFadeIn();
```

## Conseils de Performance

✅ **À faire :**
- Utilisez les animations avec parcimonie pour les éléments clés
- Gardez une durée comprise entre 0,5 et 1,5 seconde
- Utilisez des délais stagger de 0,05 à 0,2 seconde
- Testez sur des appareils mobiles

❌ **À éviter :**
- Animer trop d'éléments à la fois
- Utiliser des durées très longues (> 2 secondes)
- Animer à chaque événement de défilement
- Animer de grandes images sans optimisation

## Support Navigateur

GSAP fonctionne sur tous les navigateurs modernes :
- Chrome
- Firefox
- Safari
- Edge

## Personnalisation Avancée

Pour les fonctionnalités GSAP avancées, modifiez [`src/hooks/useGsapAnimation.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/hooks/useGsapAnimation.ts).

**Documentation GSAP :** [greensock.com/docs](https://greensock.com/docs/)

## Besoin d'aide ?

- 📧 Email : support@yourtemplate.com
- 📖 [Documentation GSAP](https://greensock.com/docs/)
- 🎬 [Apprentissage GSAP](https://greensock.com/learning/)
