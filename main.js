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
const lightboxLoader = document.getElementById("lightboxLoader");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const lightboxState = {
  group: 0,
  index: 0,
  previousFocus: null,
  scale: 1,
  translateX: 0,
  translateY: 0,
  isPanning: false,
  panStartX: 0,
  panStartY: 0,
  panOriginX: 0,
  panOriginY: 0
};

function applyLightboxTransform() {
  lightboxImage.style.transform = `translate3d(${lightboxState.translateX}px, ${lightboxState.translateY}px, 0) scale(${lightboxState.scale})`;
  lightbox.classList.toggle("is-zoomed", lightboxState.scale > 1);
}

function resetLightboxZoom() {
  lightboxState.scale = 1;
  lightboxState.translateX = 0;
  lightboxState.translateY = 0;
  lightboxState.isPanning = false;
  applyLightboxTransform();
}

function setLightboxZoom(nextScale) {
  lightboxState.scale = Math.min(4, Math.max(1, nextScale));
  if (lightboxState.scale === 1) {
    lightboxState.translateX = 0;
    lightboxState.translateY = 0;
  }
  applyLightboxTransform();
}

function hideLightboxLoading() {
  lightbox.classList.remove("is-loading");
  if (lightboxLoader) lightboxLoader.hidden = true;
}

function updateLightboxView() {
  const group = galleryGroups[lightboxState.group];
  if (!group || !group.length) return;

  const active = group[lightboxState.index];
  const fullSrc = active.dataset.full || active.currentSrc || active.src;
  lightbox.classList.add("is-loading");
  if (lightboxLoader) lightboxLoader.hidden = false;
  resetLightboxZoom();

  lightboxImage.src = fullSrc;
  lightboxImage.alt = active.alt || "Proje gorseli";
  lightboxCaption.textContent = active.alt || "";
  lightboxCounter.textContent = `${lightboxState.index + 1} / ${group.length}`;

  if (lightboxImage.complete && lightboxImage.naturalWidth > 0) {
    hideLightboxLoading();
  }
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
  hideLightboxLoading();
  resetLightboxZoom();
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
  if (event.key === "+" || event.key === "=") setLightboxZoom(lightboxState.scale + 0.35);
  if (event.key === "-" || event.key === "_") setLightboxZoom(lightboxState.scale - 0.35);
  if (event.key === "0") resetLightboxZoom();
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));
lightboxImage.addEventListener("load", hideLightboxLoading);
lightboxImage.addEventListener("error", hideLightboxLoading);

lightboxImage.addEventListener("dblclick", () => {
  if (lightboxState.scale > 1) {
    resetLightboxZoom();
  } else {
    setLightboxZoom(2.2);
  }
});

lightboxImage.addEventListener(
  "wheel",
  (event) => {
    if (lightbox.hidden) return;
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    setLightboxZoom(lightboxState.scale + direction * 0.25);
  },
  { passive: false }
);

lightboxImage.addEventListener("pointerdown", (event) => {
  if (lightboxState.scale === 1) return;
  event.preventDefault();
  lightboxState.isPanning = true;
  lightboxState.panStartX = event.clientX;
  lightboxState.panStartY = event.clientY;
  lightboxState.panOriginX = lightboxState.translateX;
  lightboxState.panOriginY = lightboxState.translateY;
  lightboxImage.setPointerCapture(event.pointerId);
});

lightboxImage.addEventListener("pointermove", (event) => {
  if (!lightboxState.isPanning) return;
  lightboxState.translateX = lightboxState.panOriginX + event.clientX - lightboxState.panStartX;
  lightboxState.translateY = lightboxState.panOriginY + event.clientY - lightboxState.panStartY;
  applyLightboxTransform();
});

function endLightboxPan(event) {
  if (!lightboxState.isPanning) return;
  lightboxState.isPanning = false;
  if (lightboxImage.hasPointerCapture(event.pointerId)) {
    lightboxImage.releasePointerCapture(event.pointerId);
  }
}

lightboxImage.addEventListener("pointerup", endLightboxPan);
lightboxImage.addEventListener("pointercancel", endLightboxPan);

const projectCards = Array.from(document.querySelectorAll(".project-card[data-project-url]"));

function openProjectPage(card) {
  const url = card.dataset.projectUrl;
  if (!url) return;
  window.location.href = url;
}

projectCards.forEach((card) => {
  card.tabIndex = 0;
  card.setAttribute("role", "link");

  card.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest("a, button, iframe, .gallery, .project-video-wrap")) return;
    openProjectPage(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectPage(card);
    }
  });
});
