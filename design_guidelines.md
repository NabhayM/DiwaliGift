# Design Guidelines: Interactive Festival Celebration Website

## Design Approach
**Reference-Based Approach**: Inspired by luxury celebration websites with interactive storytelling elements, combining traditional Indian festival aesthetics with modern web interactions. Think premium experience similar to high-end wedding invitation sites with magical reveal mechanics.

## Core Design Principles
1. **Magical Interactivity**: Dark-to-light transitions symbolizing the festival's essence
2. **Cultural Authenticity**: Rich Indian festival aesthetics with traditional symbols
3. **Intimate & Personal**: Designed specifically for a couple's private celebration
4. **Elegant Simplicity**: Focused interactions without overwhelming users

## Color Palette

### Landing Page (Gates)
- **Background**: Deep warm gradient from 25 15% 15% to 35 20% 10% with golden sparkle particles
- **Gates**: Ornate golden frames in 45 85% 55% with warm glow effects
- **Accents**: Sparkling lights in 50 90% 70% and warm amber 35 75% 60%

### Dhanteras Page
- **Initial Dark State**: Deep midnight 240 30% 8%
- **Lit State Background**: Rich golden warmth 40 70% 50% fading to 45 60% 65%
- **Diya Flame**: Vibrant flame gradient 30 95% 55% to 15 90% 50%
- **Gold Coins**: Metallic gold 45 85% 60% with shimmer
- **Message Glow**: Soft golden aura 45 100% 75%

## Typography
- **Headings**: "Playfair Display" or "Cormorant Garamond" (elegant serif for "Happy Dhanteras Anvesha")
- **Hindi Message**: "Noto Sans Devanagari" or "Poppins" (excellent Hindi support, 400-500 weight)
- **Sizes**: Hero headline 3xl-5xl, blessing message xl-2xl, body text base-lg
- **Color**: Pure white or warm cream 45 30% 95% on dark, deep charcoal 30 15% 20% on light

## Layout System
- **Spacing Units**: Tailwind spacing of 4, 8, 12, 16, 20, 24 for consistent rhythm
- **Containers**: Full viewport height sections with centered content, max-w-4xl for text
- **Grid**: Centered single-column focus for intimate storytelling

## Component Library

### Landing Page
- **Password Gate Cards**: Large decorative frames (w-64 h-80) with festival names, locked/unlocked states, subtle hover lift effect
- **Background**: Animated golden particles floating subtly across screen
- **Layout**: 2x2 grid on desktop, stacked on mobile with generous spacing (gap-8 to gap-12)

### Dhanteras Page
- **Diya (Centerpiece)**: SVG or image-based diya with animated flame using CSS animations
- **Light Diya Button**: Prominent golden button (bg-45-75-55) with subtle pulse before activation, hidden after click
- **Blessing Message Container**: Centered card with backdrop blur, appearing with fade-in and scale animation
- **Falling Coins Animation**: 15-20 gold coin elements falling from top with staggered delays and random horizontal positions
- **Sparkle Particles**: Small twinkling lights scattered across screen appearing after diya lights

### Interactions & Animations
- **Diya Flame**: Flickering animation using keyframes (subtle scale and opacity variations)
- **Background Transition**: 2-3 second smooth fade from dark to golden warm gradient
- **Message Reveal**: 1 second delay after diya lights, fade + scale from 0.9 to 1 with gentle glow pulse
- **Coins**: Fall over 3-4 seconds with rotation, various trajectories, some bounce at bottom
- **Sparkles**: Continuous subtle twinkle at 2-4 second intervals

## Accessibility & Technical
- **Dark Mode**: Page starts in dark mode by design, transitions to warm lit state
- **Mobile**: Fully responsive, touch-friendly interactions, reduced particle count on mobile
- **Password Protection**: Simple input overlay on landing page, validates before allowing gate access
- **Navigation**: Return to gates option on each festival page

## Images
This website uses primarily SVG illustrations and CSS animations rather than photographic images:
- **Diya Illustration**: Stylized traditional diya (oil lamp) as centerpiece - decorative vector or simple geometric shapes
- **Gold Coins**: Flat circular SVG elements with Lakshmi symbol or simple golden circles
- **Particle Effects**: Generated through CSS/JavaScript, not image-based
- No large hero images required; the interactive elements are the visual focus

## Special Notes
- Focus on smooth, elegant transitions over flashy effects
- Hindi text must render beautifully - use web fonts with proper Devanagari support
- Maintain magical, intimate atmosphere throughout
- Each interaction should feel like unwrapping a gift