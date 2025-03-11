export const scrollToSection = id => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 61; // Фіксований відступ
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
