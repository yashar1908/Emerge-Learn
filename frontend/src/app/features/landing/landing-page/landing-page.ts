import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';

import { RouterLink } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.less',
})
export class LandingPage implements AfterViewInit, OnDestroy {

  private lenis?: Lenis;
  private animationFrame?: number;

  ngAfterViewInit(): void {
    this.setupSmoothScroll();
    this.setupAnimations();
  }

  private setupSmoothScroll(): void {

    this.lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      this.lenis?.raf(time);

      this.animationFrame =
        requestAnimationFrame(raf);
    };

    this.animationFrame =
      requestAnimationFrame(raf);
  }

  private setupAnimations(): void {

    const context = gsap.context(() => {

      /* ═══════════════════════════════
         HERO ENTRANCE
      ═══════════════════════════════ */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      });

      heroTimeline
        .from('.nav', {
          y: -30,
          opacity: 0,
          duration: 1,
        })
        .from('.hero .eyebrow', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.5')
        .from('.hero h1', {
          y: 80,
          opacity: 0,
          duration: 1.2,
        }, '-=0.5')
        .from('.hero-copy', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.7')
        .from('.hero-actions', {
          y: 25,
          opacity: 0,
          duration: 0.7,
        }, '-=0.5')
        .from('.learning-system', {
          scale: 0.8,
          opacity: 0,
          duration: 1.4,
          ease: 'power3.out',
        }, '-=1');


      /* ═══════════════════════════════
         AMBIENT GRADIENT MOVEMENT
      ═══════════════════════════════ */

      gsap.to('.orb-one', {
        x: 70,
        y: 40,
        scale: 1.12,

        duration: 8,
        repeat: -1,
        yoyo: true,

        ease: 'sine.inOut',
      });

      gsap.to('.orb-two', {
        x: -80,
        y: -50,
        scale: 1.2,

        duration: 10,
        repeat: -1,
        yoyo: true,

        ease: 'sine.inOut',
      });

      gsap.to('.orb-three', {
        x: 80,
        y: -70,

        duration: 9,
        repeat: -1,
        yoyo: true,

        ease: 'sine.inOut',
      });


      /* ═══════════════════════════════
         ADAPTIVE SYSTEM ANIMATION
      ═══════════════════════════════ */

      gsap.to('.system-ring', {
        rotation: 360,

        duration: 35,
        repeat: -1,

        ease: 'none',
      });

      gsap.to('.ring-two', {
        rotation: -360,

        duration: 50,
        repeat: -1,

        ease: 'none',
      });

      gsap.to('.ring-three', {
        rotation: 360,

        duration: 70,
        repeat: -1,

        ease: 'none',
      });

      gsap.to('.system-node', {
        scale: 1.6,
        opacity: 0.55,

        duration: 1.5,
        repeat: -1,
        yoyo: true,

        stagger: 0.25,

        ease: 'sine.inOut',
      });


      /* ═══════════════════════════════
         HERO PARALLAX
      ═══════════════════════════════ */

      gsap.to('.hero-content', {
        yPercent: -18,
        opacity: 0.5,

        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-background', {
        yPercent: 20,

        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });


      /* ═══════════════════════════════
         STATEMENT
      ═══════════════════════════════ */

      gsap.from('.statement-content > *', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.statement',
          start: 'top 65%',
        },
      });


      /* ═══════════════════════════════
         VISION
      ═══════════════════════════════ */

      gsap.from('.vision-content h2', {
        y: 80,
        opacity: 0,
        stagger: 0.25,
        duration: 1.2,

        ease: 'power4.out',

        scrollTrigger: {
          trigger: '.vision',
          start: 'top 65%',
        },
      });

      gsap.from('.transition-line span', {
        scaleX: 0,

        transformOrigin: 'left center',

        duration: 1.4,

        scrollTrigger: {
          trigger: '.transition-line',
          start: 'top 75%',
        },
      });


      /* ═══════════════════════════════
         EXPERIENCE CARDS
      ═══════════════════════════════ */

      gsap.from('.experience-card', {
        y: 100,
        opacity: 0,
        scale: 0.97,

        stagger: 0.12,

        duration: 1,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.experience-flow',
          start: 'top 75%',
        },
      });


      /* ═══════════════════════════════
         EXPERIENCE VISUALS
      ═══════════════════════════════ */

      gsap.to('.understand-visual .visual-dot', {
        scale: 1.5,
        opacity: 0.6,

        duration: 1.5,
        repeat: -1,
        yoyo: true,

        stagger: 0.2,

        ease: 'sine.inOut',
      });

      gsap.fromTo(
        '.adapt-bar',
        {
          scaleY: 0.65,
        },
        {
          scaleY: 1.1,

          duration: 1.4,
          repeat: -1,
          yoyo: true,

          stagger: 0.15,

          transformOrigin: 'bottom center',

          ease: 'sine.inOut',
        }
      );

      gsap.to('.learn-orbit', {
        rotation: 360,

        duration: 8,
        repeat: -1,

        ease: 'none',
      });

      gsap.to('.evolve-circle', {
        scale: 1.15,
        opacity: 0.5,

        duration: 2,
        repeat: -1,
        yoyo: true,

        stagger: 0.35,

        ease: 'sine.inOut',
      });


      /* ═══════════════════════════════
         ECOSYSTEM
      ═══════════════════════════════ */

      gsap.from('.ecosystem-card', {
        y: 100,
        opacity: 0,
        scale: 0.96,

        stagger: 0.15,

        duration: 1,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.ecosystem-grid',
          start: 'top 75%',
        },
      });


      /* ═══════════════════════════════
         FINAL CTA
      ═══════════════════════════════ */

      gsap.from('.final-content > *', {
        y: 60,
        opacity: 0,

        stagger: 0.15,

        duration: 1,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 70%',
        },
      });

    });

    /*
     * Keep the GSAP context alive for the component lifecycle.
     * Angular will destroy the component when navigating away.
     */
    void context;
  }

  ngOnDestroy(): void {

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.lenis?.destroy();

    ScrollTrigger.getAll()
      .forEach(trigger => trigger.kill());
  }
}