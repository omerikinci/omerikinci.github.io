const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

sections.forEach((section) => observer.observe(section));

const galleries = Array.from(document.querySelectorAll(".gallery"));
const galleryGroups = galleries.map((gallery, groupIndex) => {
  const images = Array.from(gallery.querySelectorAll("img"));
  images.forEach((img, imageIndex) => {
    img.dataset.gallery = String(groupIndex);
    img.dataset.index = String(imageIndex);
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-haspopup", "dialog");
  });
  return images;
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const lightboxState = {
  group: 0,
  index: 0,
  previousFocus: null
};

function updateLightboxView() {
  const group = galleryGroups[lightboxState.group];
  if (!group || !group.length) return;

  const active = group[lightboxState.index];
  lightboxImage.src = active.currentSrc || active.src;
  lightboxImage.alt = active.alt || "Proje gorseli";
  lightboxCaption.textContent = active.alt || "";
  lightboxCounter.textContent = `${lightboxState.index + 1} / ${group.length}`;
}

function openLightbox(groupIndex, imageIndex, trigger) {
  lightboxState.group = groupIndex;
  lightboxState.index = imageIndex;
  lightboxState.previousFocus = trigger || document.activeElement;
  updateLightboxView();
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (lightboxState.previousFocus && lightboxState.previousFocus.focus) {
    lightboxState.previousFocus.focus();
  }
}

function stepLightbox(delta) {
  const group = galleryGroups[lightboxState.group];
  if (!group || !group.length) return;
  lightboxState.index = (lightboxState.index + delta + group.length) % group.length;
  updateLightboxView();
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const img = event.target.closest(".gallery img");
  if (img) {
    openLightbox(Number(img.dataset.gallery), Number(img.dataset.index), img);
    return;
  }

  if (!lightbox.hidden && event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!(event.target instanceof Element)) return;
  const img = event.target.closest(".gallery img");
  if (img && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openLightbox(Number(img.dataset.gallery), Number(img.dataset.index), img);
    return;
  }

  if (lightbox.hidden) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") stepLightbox(-1);
  if (event.key === "ArrowRight") stepLightbox(1);
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));
