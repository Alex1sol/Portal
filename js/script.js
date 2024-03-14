const createStar = () => {
    const star = document.createElement("div");
    star.classList.add("star");
    const xy = Math.random() * 100;
    const duration = Math.random() * 1 + 0.5;
    star.style.left = `${xy}vw`;
    star.style.top = `${-10}px`;
    star.style.width = `${duration * 2}px`;
    star.style.height = `${duration * 2}px`;
    star.style.animation = `twinkle ${duration}s linear infinite`;
    return star;
  };
  
  const addStars = () => {
    const stars = document.getElementById("stars");
    for (let i = 0; i < 50; i++) {
      stars.appendChild(createStar());
    }
  };
  
  addStars();
  