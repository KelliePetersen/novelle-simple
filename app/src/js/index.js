import BackToTop from './modules/BackToTop';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import WidescreenMenu from './modules/WidescreenMenu';

const backToTop = new BackToTop();
const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();
const widescreenMenu = new WidescreenMenu();

revealOnScroll.sr.reveal(".heading", { 
  distance: "10px",
  origin: "right",
  delay: 600,
  viewOffset: { bottom: -300 }
});